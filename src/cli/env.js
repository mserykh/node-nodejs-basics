const filterEnvVariables = (envObj) => {
  return Object.entries(envObj).filter(([k, v]) => k.startsWith("RSS"));
};

const printEnvVariables = (envVariables) => {
  if (envVariables.length === 0) {
    console.log("No variables were found");
    return;
  }
  const stringToPrint = envVariables
    .map(([varName, varValue]) => `${varName}=${varValue}`)
    .join("; ");
  console.log(stringToPrint);
};

export const parseEnv = () => {
  const envVariables = process.env;
  const envVariablesFiltered = filterEnvVariables(envVariables);
  printEnvVariables(envVariablesFiltered);
};

parseEnv();
