import path from "path";
import url from "url";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";

import a from "./files/a.json" assert { type: "json" };
import b from "./files/a.json" assert { type: "json" };
import "./files/c.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});
