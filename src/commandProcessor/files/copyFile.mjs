import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'
import fs from "fs/promises";
import { constants } from "fs";
import { printError } from '../../cli/messages.mjs';


export const copyFile = async (currentDir, currentFile, newFolder) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const filePath = path.resolve(__dirname, currentDir, currentFile);
    const newPath = path.resolve(__dirname, currentDir, newFolder);

    console.log(filePath);

    console.log(newPath);
    try {
        await fs.access(filePath, constants.R_OK | constants.F_OK);
        await fs.access(newPath, constants.R_OK | constants.F_OK);
    } catch (err) {
        printError()
        return null;
    }

    const rs = createReadStream(filePath);
    const ws = createWriteStream(path.join(newPath, path.basename(currentFile)));
    rs.pipe(ws);
    }
