import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";

import modifyTable from "./src/plugins/modifyTable";
import addTableOfContents from "./src/plugins/addTableOfContents";
import addMain from "./src/plugins/addMain";

export default defineConfig({
  base: "/presentation/",
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkGfm,
          [remarkEmoji, { emoticon: true }],
          modifyTable,
        ],
        rehypePlugins: [addMain, addTableOfContents],
      }),
    },
    react({ include: /\.(jsx|js|mdx|md)$/ }),
  ],
});
