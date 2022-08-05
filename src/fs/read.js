import fs from "fs";
import path from "path";

export const read = async () => {
  try {
    fs.readFile(
      path.resolve("files", "fileToRead.txt"),
      { encoding: "utf-8" },
      (error, data) => {
        if (error) throw new Error("FS operation failed");
        console.log(data);
      }
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

read();
