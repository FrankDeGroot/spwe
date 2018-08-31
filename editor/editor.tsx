import { ipcRenderer } from "electron";
import * as glob from "globby";
import { basename, join, relative } from "path";
import { h, render } from "preact";
import { IConfig } from "spwb";
import { Files } from "./files";
import { open as openMde } from "./mde";

const webview: any = document.getElementById("site");

ipcRenderer.on("config", async (_, config: IConfig) => {
  async function open(markdownFile) {
    openMde(markdownFile);
    const htmlFile = "http://localhost:8080/" + basename(markdownFile, ".md") + ".html";
    webview.setAttribute("src", htmlFile);
    // webview.reload();
  }

  const files = await glob(join(config.contentDir, "*.md"));
  render(<Files files={files} open={open}/>,
    document.getElementById("controls"),
  );
});
