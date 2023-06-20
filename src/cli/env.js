export const parseEnv = () => {
  const envVars = [];
  for (let envVar in process.env) {
    if (envVar.startsWith("RSS")) {
      const string = `${envVar}=${process.env[envVar]}`;
      envVars.push(string);
    }
  }

  const result = envVars.join("; ");
  console.log(result);
};

parseEnv();
