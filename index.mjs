import process, { argv } from 'process';
import { createInterface } from 'readline';
import { printGreetings, printFarewell, printPath } from './src/cli/messages.mjs';
import os from 'os';
import { commandProcessor } from './src/commandProcessor/commandProcessor.mjs';

let currentDir = os.homedir();

const readLine = createInterface({ input: process.stdin });

printGreetings(argv);
printPath(currentDir);

function exit() {
    printFarewell();
    readLine.close();
};

readLine
    .on('line', async (data) => {
        const command = data.trim().split(' ');
        command[0] == '.exit' ? exit() : currentDir = await commandProcessor(data, currentDir);
        printPath(currentDir);
    })

    .on('SIGINT', () => { exit() })
    .on('error', error => console.log('Error', error.message));