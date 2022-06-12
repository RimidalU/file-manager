import { printInvalid } from "../cli/messages.mjs";
import { createFile } from "./files/add.mjs";
import { removeFile } from "./files/remove.mjs";
import { ChangeDirectory } from "./navigation/cd.mjs";
import { getList } from "./navigation/list.mjs";
import { getUpDir } from "./navigation/up.mjs";

const commandProcessor = async (data, currentDir) => {
  const [command, ...args] = data.split(' ');
  switch (command) {

    case 'up':
      currentDir = getUpDir(currentDir);
      break;

    case 'ls':
      await getList(currentDir);
      break;

    case 'cd':
      const path = args[0].trim();
      currentDir = await ChangeDirectory(currentDir, path);
      break;

    case 'add':
      const fileName = args[0].trim();
      await createFile(currentDir, fileName);
      break;

    case 'rm':
      const fileNameRemove = args[0].trim();
      await removeFile(currentDir, fileNameRemove);
      break;


    default:
      printInvalid();
      break;
  }
  return currentDir
}

export { commandProcessor };