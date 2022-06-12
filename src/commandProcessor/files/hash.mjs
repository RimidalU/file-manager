
import path from 'path';
import { createHash } from "crypto";
import { fileURLToPath } from 'url'
import { createReadStream } from 'fs';
import { appealColorText, defaultColorText, NameColorText } from '../../cli/constants.mjs';
import { printError, printPath } from '../../cli/messages.mjs';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getHash = async (currentDir, fileName) => {
  const filePath = path.resolve(__dirname, currentDir, fileName);
  const hexHash = createHash('sha256');
  const rs = createReadStream(filePath);
  rs.on('data', () => console.log(`calculation hash in progress...`))
  rs.on('end', () => {
    console.log(`Hash "${NameColorText}${fileName}${defaultColorText}": ${appealColorText}${hexHash.digest('hex')}${defaultColorText}`);
    printPath(currentDir);
  });
  rs.on('error', () => {
    printError();
    printPath(currentDir);
  });
}