import os from "os";
import { Worker } from "worker_threads";

const workerFilePath = "./worker.js";

export const performCalculations = async () => {
  const cpuCount = os.cpus().length;
  const result = [];
  const promises = [];

  for (let i = 0; i < cpuCount; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const workerInput = i + 10;
        const worker = new Worker(workerFilePath, {
          workerData: workerInput,
        });
        const workerResult = { status: "created", data: null };
        result.push(workerResult);

        worker.on("message", (value) => {
          workerResult.status = "resolved";
          workerResult.data = value;
          console.log(`thread ${i}: resolved`);
          resolve();
        });

        worker.on("error", () => {
          workerResult.status = "error";
          console.log(`thread ${i}: error`);
          resolve();
        });
      })
    );
  }

  await Promise.all(promises);

  return result;
};

const result = await performCalculations();
console.log(result);
