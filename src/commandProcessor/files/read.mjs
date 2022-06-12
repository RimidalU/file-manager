import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'
import { printError, printPath } from '../../cli/messages.mjs';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const readFile = async (currentDir, freadFileName) => {
  const filePath = path.resolve(__dirname, currentDir, freadFileName);
  const rs = createReadStream(filePath);
  rs.on('error', () => {
    printError()
    printPath(currentDir)
  });
  rs.pipe(process.stdout);
  rs.on('end', () => {printPath(currentDir)});
};

