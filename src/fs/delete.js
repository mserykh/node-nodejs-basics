import { open } from "fs";
import { unlink } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const dirName = dirname(filePath);
const fileName = "fileToRemove.txt";

export const remove = async () => {
  try {
    open(join(dirName, "files", fileName), async (err) => {
      if (err) {
        throw new Error("FS Operation failed");
      }
      await unlink(join(dirName, "files", fileName));
    });
  } catch (err) {
    throw new Error("FS Operation failed");
  }
};

await remove();
