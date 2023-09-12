import { EditorConfig } from "grapesjs";
import { blockManager } from "./blocks/blocks";
import { panels } from "./panels/panels";
import { layerManager } from "./layer/layer";
import { styleManager } from "./style/style";
import { traitManager } from "./trait/trait";
import { deviceManager } from "./devices/deviceManager";

export const grapesSettings: EditorConfig = {
  commands: {
    //@ts-ignore
    defaults: [
      {
        // id and run are mandatory in this case
        id: "dark",
        run(editor) {
          editor.setComponents(`hola`);
          console.log(editor.Canvas.getConfig());
          
        },
      },
    ],
  },
  blockManager,
  container: "#grapes",
  fromElement: true,
  height: "100vh",
  width: "auto", //@ts-ignore
  panels,
  layerManager,
  //@ts-ignore
  styleManager,
  traitManager,
  deviceManager,
  storageManager: false,
  assetManager: {
    noAssets:
      '<div class="gjs-fonts gjs-two-color gjs-f-image" style="width:100%;font-size:20px;text-align:center;">No Assets Yet</div>',
  },
};
