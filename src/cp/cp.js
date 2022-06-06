import { spawn } from "child_process";
import path from "path";

const modulePath = path.resolve("files", "script.js");

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

await spawnChildProcess(process.argv.slice(2));
