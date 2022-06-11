import process, { argv } from 'process';
import { createInterface } from 'readline';
import { printGreetings, printFarewell, printPath } from './src/messages.mjs';
import os from 'os';

let currentDir = os.homedir();
const readLine = createInterface({ input: process.stdin });

printGreetings(argv);
printPath(currentDir);

function exit() {
    printFarewell()
    readLine.close()
};

readLine
    .on('line', async (data) => {
        if (data === '.exit' || data === '.Exit') {
            exit()
        }
        else {
            printPath(currentDir)
            // console.log(`${data}`)
        }
    })

    .on('SIGINT', () => { exit() })
    .on('error', error => console.log('Error', error.message));