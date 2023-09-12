import { EditorConfig } from "grapesjs";
import customCodePlugin from "grapesjs-custom-code";
import parserPostCSS from "grapesjs-parser-postcss";
import { gjsBasicBlocks } from "./gjsBasicBlocks";
import { gjsTabs } from "./gjsTabs";
import { gjsTooltip } from "./gjsTooltip";
import { gjsTyped } from "./gjsTyped";
import { gjsTailwindcss } from "./gjsTailwindcss";
import { gjsVideoBg } from "./gjsVideoBg";
//@ts-ignore
import gjsFont from "@silexlabs/grapesjs-fonts";
//@ts-ignore
import { gjsScriptEditor } from "./gjsScriptEditor";
//@ts-ignore
import gjsTwitch from "grapesjs-component-twitch";
import { gjsBorderStyle } from "./gjsBorderStyle";
import { gjsCountDown } from "./gjsCountDown";
export const pluginsGrapes: EditorConfig = {
  plugins: [
    gjsBasicBlocks,

    gjsCountDown,
    gjsTooltip,
    gjsTabs,
    gjsTailwindcss,
    gjsVideoBg,
    gjsTyped,
    customCodePlugin,
    gjsScriptEditor,
    parserPostCSS,
    gjsTwitch,
    // gjsCodeEditor,
    gjsBorderStyle,

    (editor: any) =>
      //@ts-ignore
      customCodePlugin(editor, { category: { label: "Extra", open: false } }),
    (editor: any) =>
      gjsFont(editor, { api_key: "AIzaSyCCz2Wp4FTe-juF5hMLnm0kp4RKgZOvpks" }),
  ],
};
