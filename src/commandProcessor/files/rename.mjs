import path from 'path';
import { fileURLToPath } from 'url'
import { access, rename as fsRename } from 'fs/promises';
import { defaultColorText, NameColorText } from '../../cli/constants.mjs';
import { printError, printPath } from '../../cli/messages.mjs';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function renameFile(currentDir, currentFile, newFile) {

  const currenFilePath = path.resolve(__dirname, currentDir, currentFile);
  const newFilePath = path.resolve(__dirname, currentDir, newFile);

  let isnewFilePath;

  try {
    await access(newFilePath);
    isnewFilePath = true;
  } catch {
    isnewFilePath = false;
  }

  if (isnewFilePath) {
    process.stdout.write(
      `File ${NameColorText}${newFile}${defaultColorText} already exists!\n`
    );
    printError();
    return;
  }
  try {
    await fsRename(currenFilePath, newFilePath);
    console.log(`New file name: ${NameColorText}${newFile}${defaultColorText}.\n`)
    printPath(currentDir)
  } catch (error) {
    printError();
    printPath(currentDir)
  }
}