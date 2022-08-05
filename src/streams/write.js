import fs from "fs";
import readline from "readline";

export const write = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Hi! Please type a text: \n",
  });

  const myFile = fs.createWriteStream("./files/fileToWrite.txt");

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

write();
