import { basename } from "path";
import { Component, h } from "preact";

export interface IFiles {
  files: string[];
  open: (item: string) => void;
}

export class Files extends Component<IFiles> {
  public render(props) {
    const items = props.files.map((item) =>
      <li id={item}><a href="#" onClick={() => props.open(item)}>{basename(item)}</a></li>,
    );
    return <main><ul>{items}</ul></main>;
  }
}
