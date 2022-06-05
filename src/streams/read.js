import fs from "fs";

export const read = async () => {
  const stream = fs.createReadStream("./files/fileToRead.txt", "utf-8");
  let data = "";
  stream.on("data", (chunk) => {
    data += chunk;
  });
  stream.on("end", () => process.stdout.write(data));
};

await read();
