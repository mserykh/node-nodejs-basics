import { open } from "fs";
import { copyFile, mkdir, readdir, stat } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const dirName = dirname(filePath);
const filesDir = join(dirName, "files");
const filesNewDir = join(dirName, "files_copy");

async function isFile(path) {
  const stats = await stat(path);

  return stats.isFile();
}

export const copy = async () => {
  let files = null;
  try {
    open(filesNewDir, async (err) => {
      if (!err) {
        throw new Error("FS Operation failed");
      }

      files = await readdir(filesDir, { withFilesType: true });

      await mkdir(filesNewDir);

      for (let file of files) {
        if (await isFile(join(filesDir, file))) {
          await copyFile(join(filesDir, file), join(filesNewDir, file));
        }
      }
    });
  } catch (err) {
    throw new Error("FS Operation failed");
  }
};

await copy();
