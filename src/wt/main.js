import { cpus } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const dirPath = fileURLToPath(import.meta.url);
const dirName = dirname(dirPath);
const filePath = join(dirName, "worker.js");

const performCalculations = async () => {
  const cpuCount = cpus().length;
  const promises = [];

  for (let i = 0; i < cpuCount; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const workerInput = i + 10;
        const worker = new Worker(filePath, {
          workerData: workerInput,
        });

        worker.on("message", (value) => {
          const data = {
            status: "resolved",
            data: value,
          };
          resolve(data);
        });

        worker.on("error", () => {
          const data = {
            status: "error",
            data: null,
          };
          reject(data);
        });
      })
    );
  }

  Promise.all(promises).then((value) => console.log(value));
};

await performCalculations();
