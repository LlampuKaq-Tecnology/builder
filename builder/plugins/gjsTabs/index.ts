import loadComponents from "./components/index";
import loadBlocks from "./blocks";
import defOptions from "./options";
import { Editor } from "grapesjs";

export const gjsTabs = (editor: Editor, opts = {}) => {
  const options = {
    ...defOptions,
    ...opts,
  };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);
};
