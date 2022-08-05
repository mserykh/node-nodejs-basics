import zlib from "zlib";
import fs from "fs";
import { pipeline } from "stream";

const originalFilePath = "./files/fileToCompress.txt";
const archivedFilePath = "./files/archive.gz";

export const compress = async () => {
  const gzip = zlib.createGzip();
  const originalFile = fs.createReadStream(originalFilePath);
  const archivedFile = fs.createWriteStream(archivedFilePath);

  pipeline(originalFile, gzip, archivedFile, (error) => {
    if (error) {
      console.log(error);
      process.exitCode = 1;
    }
  });
};

compress();
