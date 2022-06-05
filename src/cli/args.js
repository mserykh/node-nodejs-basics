const filterEnvArguments = (envArray) => {
  return envArray.filter((k, i, array) => {
    if (k.startsWith("--")) return true;
    if (i > 0 && array[i - 1].startsWith("--")) return true;
  });
};

const printEnvArguments = (envArguments) => {
  if (envArguments.length === 0) {
    console.log("No arguments were found");
    return;
  }
  const newArgumentsArray = [];
  envArguments.forEach((el, i) => {
    if (i % 2 === 0) {
      newArgumentsArray.push(`${el.slice(2)} is ${envArguments[i + 1]}`);
    }
  });
  const stringToPrint = newArgumentsArray.join(", ");
  console.log(stringToPrint);
};

export const parseArgs = () => {
  const envArguments = process.argv;
  const envArgumentsFiltered = filterEnvArguments(envArguments);
  printEnvArguments(envArgumentsFiltered);
};

parseArgs();
