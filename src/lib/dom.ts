export default {
  create: (tagName: string): HTMLElement => {
    return document.createElement(tagName);
  },
};
