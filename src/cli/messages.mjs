import { stdout } from 'process';
import { EOL } from 'os';
import {
	defaultColorText,
	appealColorText,
	NameColorText,
	pathColorText,
	errorColorText,
} from './constants.mjs';

let userName = '';

const printGreetings = (args) => {
	userName = args[2] ? args[2].split('=')[1] : 'Username';
	stdout.write(
		`${EOL}${appealColorText} Welcome to the File Manager, ${NameColorText}${userName}${appealColorText}!${defaultColorText} ${EOL}${EOL}${EOL}`,
	);
};

const printFarewell = () => {
	stdout.write(
		`${EOL}${EOL}${appealColorText} Thank you for using File Manager, ${NameColorText}${userName}${appealColorText}!${defaultColorText} ${EOL}${EOL}`,
	);
};

const printPath = (path) => {
	stdout.write(`You are currently in ${pathColorText}${path}${defaultColorText}$  `);
};

const printError = () => {
	console.log(`${errorColorText}Operation failed ${defaultColorText}\n`);
};

const printInvalid = () => {
	console.log(`${errorColorText}Invalid input ${defaultColorText}`);
};

export { printGreetings, printFarewell, printPath, printError, printInvalid };
