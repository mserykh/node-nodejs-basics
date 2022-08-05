import fs from "fs";
import path from "path";

export const remove = async () => {
  try {
    await fs.promises.unlink(path.resolve("files", "fileToRemove.txt"));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

remove();
