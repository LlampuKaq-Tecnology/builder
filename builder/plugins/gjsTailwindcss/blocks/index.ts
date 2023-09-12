import { Editor } from "grapesjs";
import loadTailwindBlocks from "./tailwind";

export default (editor: Editor, opts = {}) => {
  loadTailwindBlocks(editor, opts);
};
