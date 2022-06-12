import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import zlib from 'zlib'
import { fileURLToPath } from 'url'
import { printError } from '../../cli/messages.mjs';
import { appealColorText, defaultColorText } from '../../cli/constants.mjs';


export const decompressFile = async (currentDir, currentFile, newFolder) => {

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const readableFile = path.resolve(__dirname, currentDir, currentFile);
  const writableFile = path.resolve(__dirname, currentDir, newFolder, path.basename(currentFile).match(/^(.+)\.br$/));

  const readable = createReadStream(readableFile);
  const writable = createWriteStream(writableFile, { flags: 'ax' });

  try {
    await pipeline(
      readable,
      zlib.createBrotliDecompress(),
      writable
    );
    console.log(`${appealColorText}Deompress done!${defaultColorText}`);
  } catch (error) {
    console.log(error);
    printError()
  }
};
