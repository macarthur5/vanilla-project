import Component from "./../lib/Component";
import dom from "./../lib/dom";
import Note from "./note";
import Notes from "./notes-list";

class App extends Component {
  private list: Notes | null = null;

  constructor(list?: Notes) {
    super();

    if (list) {
      this.list = list;
    }
  }

  public render() {
    const container = this.getContainer();

    if (container) {
      if (!this.isRendered()) {
        const node = dom.create("div");
        node.classList.add("list-app");

        this.setHtmlNode(node);
      }

      if (this.list) {
        this.list.setContainer(this.getHtmlNode());
        this.list.render();
      }
    }
  }

  public addNote(note: Note) {
    this.list && this.list.addNote(note);
    this.render();
  }

  public deleteNote(note: Note) {
    this.list && this.list.deleteNote(note);
    this.render();
  }

  public setList(list: Notes) {
    this.list = list;
    this.render();
  }
}

const app = new App(
  new Notes([
    new Note(1, "This is my first note."),
    new Note(1, "This is my second note."),
    new Note(1, "This is my third note."),
  ])
);

app.setContainer(document.querySelector("#container"));

export default App;
