import fs from "fs";
const fileData = "I am fresh and young";
const filePath = "./files/fresh.txt";

export const create = async () => {
  let doesFileExist;
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    doesFileExist = true;
  } catch (error) {
    fs.promises.writeFile(filePath, fileData, "utf8");
  }

  if (doesFileExist) {
    throw new Error("FS operation failed");
  }
};

create();
