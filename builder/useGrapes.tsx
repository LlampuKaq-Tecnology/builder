import grapesjs from "grapesjs";
import { grapesSettings } from "./settings/settingsGrapes";
import { pluginsGrapes } from "./plugins/pluginsGrapes";

function useGrapes() {
  const Editor = () => {
    const editor = grapesjs.init({
      ...grapesSettings,
      ...pluginsGrapes,
    });

    return editor;
  };
  return { Editor };
}

export default useGrapes;
