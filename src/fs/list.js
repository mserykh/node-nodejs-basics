import fs from "fs";
import path from "path";

export const list = async () => {
  try {
    fs.readdir(path.resolve("files"), (error, files) => {
      if (!error) {
        for (let file of files) {
          console.log(file);
        }
      }
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

list();
