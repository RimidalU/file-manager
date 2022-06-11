
import { stdout } from 'process';
import { EOL } from 'os';

let userName = ''

const defaultColorText = '\x1b[0m'
const appealColorText = '\x1b[0m\x1b[32m'
const NameColorText = '\x1b[1m\x1b[33m'
const pathColorText = '\x1b[1m\x1b[34m'
const errorColorText = '\x1b[1m\x1b[31m'

 const printGreetings = (args) => {
  userName = args[2] ? args[2].split('=')[1] : 'Username';
  stdout.write(`${EOL}${appealColorText} Welcome to the File Manager, ${NameColorText}${userName}${appealColorText}!${defaultColorText} ${EOL}${EOL}${EOL}`);
};

 const printFarewell = () => {
  stdout.write(`${EOL}${EOL}${appealColorText} Thank you for using File Manager, ${NameColorText}${userName}${appealColorText}!${defaultColorText} ${EOL}${EOL}`);
};

 const printPath = (path) => {
  stdout.write(`You are currently in ${pathColorText}${path}${defaultColorText}$  `);
};

const printError = () => {
  console.log(`${errorColorText}Operation failed ${defaultColorText}\n`);
};

const printInvalid = () => {
  console.log(`${errorColorText}Invalid input ${defaultColorText}\n`);
};

export{
  printGreetings, printFarewell, printPath, printError, printInvalid
}