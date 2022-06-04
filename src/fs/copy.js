import fs from "fs";
import path from "path";

const filesDir = "./files";
const filesNewDir = "./files_copy";

export const copy = async () => {
  let doesDirAlreadyExist;
  let files;

  try {
    await fs.promises.access(filesDir, fs.constants.F_OK);
    files = await fs.promises.readdir(filesDir, { withFileTypes: true });
  } catch (error) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.promises.access(filesNewDir, fs.constants.F_OK);
    doesDirAlreadyExist = true;
  } catch (error) {
    fs.promises.mkdir(filesNewDir);
    for (let file of files) {
      const fileSource = path.join(filesDir, file.name);
      const fileDestination = path.join(filesNewDir, file.name);
      await fs.promises.copyFile(fileSource, fileDestination);
    }
  }

  if (doesDirAlreadyExist) {
    throw new Error("FS operation failed");
  }
};

copy();
