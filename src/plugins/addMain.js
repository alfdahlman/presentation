const addMain = () => (tree) => {
  const children = [...tree.children];

  const main = {
    type: "element",
    tagName: "main",
    properties: {},
    children,
  };

  tree.children = [main];
};

export default addMain;
