import { readdir } from 'fs/promises';
import { defaultColorText, pathColorText } from '../../cli/constants.mjs';

export const getList = async (currentDir) => {
  const files = await readdir(currentDir, { withFileTypes: true });
  files.map((file) => {
    if (file.isDirectory()) {
      console.log(file.name = `${pathColorText}${file.name}${defaultColorText}`)
    }
    else {
      console.log(file.name)
    }
  });
};