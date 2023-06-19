import { open } from "fs";
import { readdir, stat } from "fs/promises";
import { dirname, join, parse } from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const dirName = dirname(filePath);
const filesDirPath = join(dirName, "files");

async function isFile(path) {
  const stats = await stat(path);

  return stats.isFile();
}

export const list = async () => {
  open(filesDirPath, async (err) => {
    if (err) {
      throw new Error("FS Operation failed");
    }

    const files = await readdir(filesDirPath, { withFilesType: true });
    for (let file of files) {
      if (await isFile(join(filesDirPath, file))) {
        console.log(parse(file).name);
      }
    }
  });
};

await list();
