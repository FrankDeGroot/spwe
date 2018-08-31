import { createServer } from "http-server";
import { IConfig } from "spwb";

export async function serve(config: IConfig) {
  const options = {
    root: config.siteDir,
  };
  const server = createServer(options);
  return new Promise((resolve) => {
    server.listen(8080, "0.0.0.0", resolve);
  });
}
