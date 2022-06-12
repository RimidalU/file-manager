import { dirname } from 'path';

function getUpDir(path) {
  return dirname(path);
}

export { getUpDir }