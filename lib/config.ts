import { app } from "electron";
import { readFile, stat, writeFile } from "fs-extra";
import { join } from "path";

export async function read() {
  const configPath = join(app.getPath("userData"), "config.json");
  const stats = await stat(configPath);
  if (!stats.isFile()) {
    const home = app.getPath("home");
    const template = join(home, "template");
    const config = {
      contentDir: join(home, "content"),
      designDir: join(template, "design"),
      scriptDir: join(template, "script"),
      siteDir: join(home, "site"),
      siteToken: "<GitHub Personal Access Token with public_repo access>",
      siteUrl: "https://github.com/<User Name>/<User Name>.github.io/",
      styleDir: join(template, "style"),
    };
    await writeFile(configPath, JSON.stringify(config));
    return config;
  }
  return JSON.parse(await readFile(configPath, "utf8"));
}
