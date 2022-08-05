import { unknownObject, createMyServer } from "./cjsToEsm.mjs";

console.log("Unknown object:", unknownObject);

console.log("Server started on localhost:8000");
createMyServer.listen(8000);
