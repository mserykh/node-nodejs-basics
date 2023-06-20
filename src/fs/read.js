import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dirPath = fileURLToPath(import.meta.url);
const dirName = dirname(dirPath);
const filePath = join(dirName, "files", "fileToRead.txt");

export const read = async () => {
  try {
    const data = await readFile(filePath, { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    throw new Error("FS Operation failed");
  }
};

await read();
