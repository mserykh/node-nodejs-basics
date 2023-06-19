import { Transform } from "stream";

export const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split("").reverse().join("").concat("\n"));
      callback();
    },
  });
  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
