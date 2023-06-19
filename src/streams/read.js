import { createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dirPath = fileURLToPath(import.meta.url);
const dirName = dirname(dirPath);
const filePath = join(dirName, "files", "/fileToRead.txt");

export const read = async () => {
  const stream = createReadStream(filePath, "utf-8");
  let data = "";
  stream.on("data", (chunk) => {
    data += chunk;
  });
  stream.on("end", () => process.stdout.write(data));
};

await read();
