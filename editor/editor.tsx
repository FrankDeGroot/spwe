import { ipcRenderer } from "electron";
import * as glob from "globby";
import { join } from "path";
import { h, render } from "preact";
import { Files } from "./files";
import { open } from "./mde";

ipcRenderer.on("config", async (event, config) => {
  const files = await glob(join(config.contentDir, "*.md"));
  render(<Files files={files} open={open}/>,
    document.getElementById("controls"),
  );
});
