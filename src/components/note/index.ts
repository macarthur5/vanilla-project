import Component from "../../lib/Component";
import dom from "./../../lib/dom";

class Note extends Component {
  private id: number;
  private text: string;

  constructor(id: number, text: string) {
    super();

    this.id = id;
    this.text = text;
  }

  public getText() {
    return this.text;
  }

  public setText(text: string) {
    this.text = text;
  }

  public getId() {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  public render() {
    const container = this.getContainer();

    if (!this.isRendered() && container) {
      const node = dom.create("li");
      node.classList.add("note");

      const textNode = dom.create("p");
      textNode.innerText = this.text;
      node.appendChild(textNode);

      this.setHtmlNode(node);
    }
  }
}

export default Note;
