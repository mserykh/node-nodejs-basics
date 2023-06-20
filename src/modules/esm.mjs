import { createServer as createServerHttp } from "http";
import { release, version } from "os";
import { dirname, sep } from "path";
import { fileURLToPath } from "url";
import {
  default as a,
  default as b,
} from "./files/a.json" assert { type: "json" };
import "./files/c.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

export let unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});
