import { rename as renameFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { open } from "fs";

const filePath = fileURLToPath(import.meta.url);
const dirName = dirname(filePath);
const oldFileName = "wrongFilename.txt";
const newFileName = "properFilename.md";

export const rename = async () => {
  open(join(dirName, "files", newFileName), (err) => {
    if (!err) {
      throw new Error("FS Operation failed");
    }
    renameFile(
      join(dirName, "files", oldFileName),
      join(dirName, "files", newFileName)
    );
  });
};

await rename();
