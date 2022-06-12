import { printInvalid } from "../cli/messages.mjs";
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
        const path = args[0];
        currentDir = ChangeDirectory(currentDir, path);
        break;


    default:
      printInvalid();
      break;
}
return currentDir
}

export { commandProcessor };