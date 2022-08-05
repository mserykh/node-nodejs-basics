import zlib from "zlib";
import fs from "fs";
import { pipeline } from "stream";

const originalFilePath = "./files/archive.gz";
const restoredFilePath = "./files/fileToCompress.txt";

export const decompress = async () => {
  const unzip = zlib.createUnzip();
  const originalFile = fs.createReadStream(originalFilePath);
  const restoredFile = fs.createWriteStream(restoredFilePath);

  pipeline(originalFile, unzip, restoredFile, (error) => {
    if (error) {
      console.log(error);
      process.exitCode = 1;
    }
  });
};

decompress();
