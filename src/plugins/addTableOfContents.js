import { visit } from "unist-util-visit";

const getText = (node) =>
  node.type === "text"
    ? node.value
    : node.children?.map(getText).join("") || "";

const toSlug = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const addTableOfContents = () => (tree) => {
  const links = [];

  visit(tree, { tagName: "h2" }, (node, _, parent) => {
    if (parent.tagName === "main") {
      const title = getText(node);
      const id = toSlug(title);

      const linkObj = { title, id };

      node.properties = {
        ...node.properties,
        id,
      };

      links.push(linkObj);
    }
  });

  if (links.length) {
    tree.children.unshift({
      type: "element",
      tagName: "toc",
      properties: {
        links: JSON.stringify(links),
      },
    });
  }
};

export default addTableOfContents;
