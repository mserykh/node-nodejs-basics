import { createWriteStream } from "fs";
import { dirname, join } from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const dirPath = fileURLToPath(import.meta.url);
const dirName = dirname(dirPath);
const filePath = join(dirName, "files", "fileToWrite.txt");

export const write = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Hi! Please type a text: \n",
  });

  const myFile = createWriteStream(filePath);

  rl.prompt();

  rl.on("line", (userInput) => {
    myFile.write(userInput);
  });

  rl.on("SIGINT", () => {
    rl.close();
  });

  rl.on("close", () => {
    rl.write(
      "\nTyping is canceled. The entered text is saved to the file. Bye!"
    );
  });
};

await write();
