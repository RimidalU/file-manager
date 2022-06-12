import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import zlib from 'zlib'
import { fileURLToPath } from 'url'
import { printError } from '../../cli/messages.mjs';
import { appealColorText, defaultColorText } from '../../cli/constants.mjs';


export const compressFile = async (currentDir, currentFile, newFolder) => {

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const readableFile = path.resolve(__dirname, currentDir, currentFile);
  const writableFile = path.resolve(__dirname, currentDir, newFolder, path.basename(readableFile) + ".br");

  const readable = createReadStream(readableFile);
  const writable = createWriteStream(writableFile, { flags: 'ax' });

  try {
    await pipeline(
      readable,
      zlib.createBrotliCompress(),
      writable
    );
    console.log(`${appealColorText}Compress done!${defaultColorText}`);
  } catch (error) {
    printError()
  }
};
