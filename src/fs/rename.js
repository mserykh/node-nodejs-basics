import fs from "fs";

const filePath = "./files/wrongFilename.txt";
const fileNewPath = "./files/properFilename.txt";

export const rename = async () => {
  fs.open(fileNewPath, fs.constants.F_OK, (error) => {
    if (!error) throw new Error("FS operation failed");
    fs.rename(filePath, fileNewPath, (error) => {
      if (error) throw new Error("FS operation failed");
    });
  });
};

rename();
