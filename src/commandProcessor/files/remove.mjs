import { rm } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url'
import { defaultColorText, NameColorText } from '../../cli/constants.mjs';
import { printError } from '../../cli/messages.mjs';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const removeFile = async (currentDir, fileName) => {
  const currentFile = path.resolve(__dirname, currentDir, fileName);
  try {
    await rm(currentFile, { recursive: true });
    console.log(`File ${NameColorText}${fileName}${defaultColorText} deleted!`)
  } catch (err) {
    printError();
  }
};