import { readFile } from "fs-extra";
import * as SimpleMDE from "simplemde";

const simplemde = new SimpleMDE({
  spellChecker: false,
  status: false,
});

export async function open(markdownFile) {
  const value = await readFile(markdownFile, "utf8");
  simplemde.value(value);
}
