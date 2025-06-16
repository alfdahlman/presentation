import { visit } from "unist-util-visit";

const getText = (node) =>
  node.type === "text"
    ? node.value
    : node.children?.map(getText).join("") || "";

const getTableRows = (rows) =>
  rows.map((row) => row.children.map((cell) => getText(cell)));

const modifyTable = () => (tree) => {
  visit(tree, "table", (node) => {
    const rows = JSON.stringify(getTableRows(node.children));

    node.data = {
      hName: "table",
      hProperties: { rows },
    };
  });
};

export default modifyTable;
