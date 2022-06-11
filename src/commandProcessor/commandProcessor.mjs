import { printInvalid } from "../cli/messages.mjs";
import { getList } from "./navigation/list.mjs";
import { getUpDir } from "./navigation/up.mjs";

const commandProcessor = async (data, currentDir) => {
  const [command, ...args] = data.split(' ');
  switch (command) {

    case 'up':
      currentDir = getUpDir(currentDir);
      break;

    case 'ls':
      await getList(currentDir);
      break;


    default:
      printInvalid();
      break;
}
return currentDir
}

export { commandProcessor };