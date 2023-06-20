import { createReadStream, createWriteStream } from "fs";
import { dirname, join } from "path";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const dirPath = fileURLToPath(import.meta.url);
const dirName = dirname(dirPath);
const originalFilePath = join(dirName, "files", "fileToCompress.txt");
const archivedFilePath = join(dirName, "files", "archive.gz");

export const compress = async () => {
  const gzip = createGzip();
  const originalFile = createReadStream(originalFilePath);
  const archivedFile = createWriteStream(archivedFilePath);

  pipeline(originalFile, gzip, archivedFile, (error) => {
    if (error) {
      console.log(error);
      process.exitCode = 1;
    }
  });
};

await compress();
