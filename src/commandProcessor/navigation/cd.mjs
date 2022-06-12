import { join } from 'path';
import { checkNodeAccess } from '../helpers/checkNodeAccess.mjs';
import { printError } from '../../cli/messages.mjs';

export const ChangeDirectory = async (currentDir, path) => {
  const newPath =
    (await checkNodeAccess(path)) && path !== '.' && path !== '..'
      ? path
      : join(currentDir, path);
  if (await checkNodeAccess(newPath)) {return newPath};
  printError();
  return currentDir;
};