import { spawn } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dirPath = fileURLToPath(import.meta.url);
const dirName = dirname(dirPath);
const modulePath = join(dirName, "files", "script.js");

export const spawnChildProcess = async (args) => {
  const child = spawn("node", [modulePath, ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  child.on("error", (error) => {
    console.log(error);
    process.exit(1);
  });
};

spawnChildProcess(["arg1", "arg2", "arg3"]);
