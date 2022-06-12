import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

import { printError, printPath } from '../../cli/messages.mjs';
import { appealColorText, defaultColorText, NameColorText } from '../../cli/constants.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const createFile = (currentDir, fileName) => {
  const filePath = path.resolve(__dirname, currentDir, fileName);
  const ws = createWriteStream(filePath, { flags: 'ax' });

  ws.on('error', () => {
    process.stdout.write(
      `\nFile ${NameColorText}${fileName}${defaultColorText} already exists: ${appealColorText}${filePath}${defaultColorText} \n`
    )
    printError();
    printPath(currentDir);
  }
  );
  ws.end(console.log(`File ${NameColorText}${fileName}${defaultColorText} created!`));
  return currentDir
};