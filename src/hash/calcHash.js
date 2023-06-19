import {createHash} from "crypto";
import {readFile} from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dirPath = fileURLToPath(import.meta.url);
const dirName = dirname(dirPath);
const filePath = join(dirName, "files", "fileToCalculateHashFor.txt");

export const calculateHash = async () => {
  const data = await readFile(filePath);
  const hash = createHash("sha256");
  if (data) {
    hash.update(data);
  }
  const hex = hash.digest("hex");
  console.log(hex);
};

await calculateHash();
