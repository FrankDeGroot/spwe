import { createServer } from "http-server";
import { IConfig } from "spwb";

export async function serve(config: IConfig) {
  const options = {
    root: config.siteDir,
  };
  const server = createServer(options);
  return await server.listen(8080, "127.0.0.1");
}
