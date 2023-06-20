import { open } from "fs";
import { writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const dirName = dirname(filePath);
const path = join(dirName, "files", "fresh.txt");

const data = "I am fresh and young";

const create = async () => {
  open(path, (err) => {
    if (!err) {
      throw new Error("FS Operation failed");
    }
    writeFile(path, data);
  });
};

await create();
