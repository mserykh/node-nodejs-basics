import { parentPort, workerData } from "worker_threads";

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  const data = nthFibonacci(workerData);
  parentPort.postMessage(data);
  // To check if a worker throws an error
  // if (workerData % 2 !== 0) {
  //   const data = nthFibonacci(workerData);
  //   parentPort.postMessage(data);
  // } else {
  //   throw new Error("error");
  // }
};

sendResult();
