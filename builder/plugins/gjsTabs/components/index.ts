import Tab from "./Tab";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
import TabContents from "./TabContents";
import TabContainer from "./TabContainer";
import { Editor } from "grapesjs";

export default (editor: Editor, config = {}) => {
  const dc = editor.DomComponents;
  const opts = {
    ...config,
    defaultModel: dc.getType("default").model,
    editor,
  };
//@ts-ignore
  [Tab, Tabs, TabContent, TabContents, TabContainer].map((c) => c(dc, opts));
};
