import { createReadStream, createWriteStream } from "fs";
import { dirname, join } from "path";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
import { createUnzip } from "zlib";

const dirPath = fileURLToPath(import.meta.url);
const dirName = dirname(dirPath);
const originalFilePath = join(dirName, "files", "archive.gz");
const restoredFilePath = join(dirName, "files", "fileToCompress.txt");

export const decompress = async () => {
  const unzip = createUnzip();
  const originalFile = createReadStream(originalFilePath);
  const restoredFile = createWriteStream(restoredFilePath);

  pipeline(originalFile, unzip, restoredFile, (error) => {
    if (error) {
      console.log(error);
      process.exitCode = 1;
    }
  });
};

await decompress();
