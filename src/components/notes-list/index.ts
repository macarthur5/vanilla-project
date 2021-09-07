import Component from "./../../lib/Component";
import dom from "./../../lib/dom";
import Note from "./../note";

class Notes extends Component {
  private notes: Note[] = [];

  constructor(notes?: Note[]) {
    super();

    if(notes){
      this.notes = notes;
    }
  }

  public render() {
    const container = this.getContainer();

    if (container) {
      if (!this.isRendered()) {
        const node = dom.create("ul");
        node.classList.add("notes-list");
        this.setHtmlNode(node);
      }

      this.notes.forEach((note) => {
        note.setContainer(this.getHtmlNode());
        note.render();
      });
    }
  }

  public addNote(note: Note) {
    this.notes.push(note);
    this.render();
  }

  public deleteNote(note: Note) {
    const index = this.notes.findIndex(
      (_note) => _note.getId() === note.getId()
    );

    if (index !== -1) {
      this.notes.splice(index, 1);
      this.notes[index].remove();
    }
  }
}

export default Notes;
