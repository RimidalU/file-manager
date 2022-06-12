import { printInvalid } from "../cli/messages.mjs";
import { createFile } from "./files/add.mjs";
import { getHash } from "./files/hash.mjs";
import { readFile } from "./files/read.mjs";
import { removeFile } from "./files/remove.mjs";
import { renameFile } from "./files/rename.mjs";
import { ChangeDirectory } from "./navigation/cd.mjs";
import { getList } from "./navigation/list.mjs";
import { getUpDir } from "./navigation/up.mjs";
import { defaultColorText, errorColorText } from '../cli/constants.mjs';
import { copyFile } from "./files/copyFile.mjs";
import { cpus, EOL, architecture, homedir, username } from './os.mjs'

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

    case 'cat':
      const freadFileName = args[0].trim();
      await readFile(currentDir, freadFileName);
      break;

    case 'hash':
      const hashFileName = args[0].trim();
      getHash(currentDir, hashFileName);
      break;

    case 'rn':
      if (args.length < 2) {
        console.log(`${errorColorText}Expected 2 arguments${defaultColorText}`);
        printInvalid();
        break
      } else {
        const currentFile = args[0].trim();
        const newFile = args[1].trim();
        renameFile(currentDir, currentFile, newFile);
      }
      break;

    case 'cp':
      if (args.length < 2) {
        console.log(`${errorColorText}Expected 2 arguments${defaultColorText}`);
        printInvalid();
        break
      } else {
        const currentFile = args[0].trim();
        const newFolder = args[1].trim();
        copyFile(currentDir, currentFile, newFolder);
      }
      break;

    case 'mv':
      if (args.length < 2) {
        console.log(`${errorColorText}Expected 2 arguments${defaultColorText}`);
        printInvalid();
        break
      } else {
        const currentFile = args[0].trim();
        const newFolder = args[1].trim();
        await copyFile(currentDir, currentFile, newFolder);
        await removeFile(currentDir, currentFile);
      }
      break;

    case 'os':
      const [arg] = args;
      switch (arg) {
        case '--EOL':
          EOL()
          break;

        case '--cpus':
          cpus();
          break;

        case '--homedir':
          homedir();
          break;

        case '--username':
          username();
          break;

        case '--architecture':
          architecture();
          break;

        default:
          printInvalid();
          break;
      }
      break;


    default:
      printInvalid();
      break;
  }
  return currentDir
}

export { commandProcessor };