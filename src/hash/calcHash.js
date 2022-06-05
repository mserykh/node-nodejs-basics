import fs from "fs/promises";
import crypto from "crypto";

export const calculateHash = async () => {
  const data = await fs.readFile("./files/fileToCalculateHashFor.txt");
  const hash = crypto.createHash("sha256");
  if (data) {
    hash.update(data);
  }
  const hex = hash.digest("hex");
  return hex;
};

await calculateHash();
