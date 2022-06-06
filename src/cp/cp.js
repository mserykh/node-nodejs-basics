import { fork } from "child_process";
import path from "path";

const modulePath = path.resolve("files", "script.js");

export const spawnChildProcess = async (args) => {
  fork(modulePath, args);
};

await spawnChildProcess(process.argv.slice(2));
