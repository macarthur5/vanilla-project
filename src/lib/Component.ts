abstract class Component {
  private htmlNode: HTMLElement | null = null;
  private container: HTMLElement | null = null;

  constructor(container?: HTMLElement | null) {
    if (container) {
      this.container = container;
    }
  }

  public abstract render(): void;

  public getHtmlNode(): HTMLElement | null {
    return this.htmlNode;
  }

  public setHtmlNode(htmlNode: HTMLElement | null) {
    if (this.container) {

      if(this.htmlNode){
        this.container.removeChild(this.htmlNode);
      }

      if (htmlNode) {
        this.container.appendChild(htmlNode);
      } else {
        this.htmlNode && this.container.removeChild(this.htmlNode);
      }
    }

    this.htmlNode = htmlNode;
  }

  public setContainer(container: HTMLElement | null) {
    if (this.container) {
      this.htmlNode && this.container.removeChild(this.htmlNode);
    }

    this.container = container;

    if (this.container) {
      this.htmlNode && this.container.appendChild(this.htmlNode);
    }
  }

  public getContainer(): HTMLElement | null {
    return this.container;
  }

  public isRendered(): boolean {
    return this.htmlNode !== null;
  }

  public remove() {
    if (this.container) {
      this.htmlNode && this.container.removeChild(this.htmlNode);
    }

    this.htmlNode = null;
  }
}

export default Component;
