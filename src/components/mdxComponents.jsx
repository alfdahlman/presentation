import Tabs, { Tab } from "./Tabs";
import CodeBlock from "./CodeBlock";
import Playground from "./Playground";
import Table from "./Table";
import ToC from "./ToC";
import BlockQuote from "./BlockQuote";
import Anchor from "./Anchor";

export default {
  table: ({ rows }) => <Table rows={JSON.parse(rows)} />,
  pre: (props) => {
    const p = getProps(props);
    const lang = p.className ? p.className.split("-")[1] : "js";

    return <CodeBlock lang={lang} {...p} />;
  },
  Playground,
  Tab,
  Tabs,
  toc: ({ links }) => <ToC links={JSON.parse(links)} />,
  blockquote: (props) => <BlockQuote {...props} />,
  a: Anchor
};

const getProps = (props) => {
  if (props.children?.props) {
    return getProps(props.children.props);
  }

  return props;
};
