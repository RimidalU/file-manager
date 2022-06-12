import os from "os";
import { defaultColorText, NameColorText } from "../cli/constants.mjs";

const username = async () => {
  console.log(`${NameColorText}${os.userInfo().username}${defaultColorText}`);
};

const homedir = async () => {
  console.log(`${NameColorText}${os.homedir()}${defaultColorText}`);
};

const architecture = async () => {
  console.log(`${NameColorText}${os.arch()}${defaultColorText}`);
};

const EOL = async () => {
  console.log(`${NameColorText}${JSON.stringify(os.EOL)}${defaultColorText}`);
};

const cpus = async () => {
  os.cpus().forEach((cpu) =>
  console.log(`${NameColorText}${cpu.model} - ${cpu.speed / 100}GHz${defaultColorText}`))};

export { cpus, EOL, architecture, homedir, username };