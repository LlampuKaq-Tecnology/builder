import React, { useEffect } from "react";
import useGrapes from "./useGrapes";
import {
  showBlock,
  showConfig,
  showEditor,
  showLayer,
  showStyle,
} from "./function/showPanel";
import { saveFunction } from "./function/saveFuncion";
import { devicesFunction } from "./function/devices";
import { importFn } from "./function/importFn";
import { GPT } from "./function/ChatGPT";
import { Button, H1, useT } from "cllk";

export default function Editor({ fn }: { fn: any; addAsset: () => void }) {
  const { t } = useT();
  const { Editor } = useGrapes();
  useEffect(() => {
    const editor = Editor();
    saveFunction(editor, fn);
    importFn(editor);
    devicesFunction(editor);
    GPT(editor);
  }, []);
  return (
    <div className="flex border-t">
      <div
        className="duration-500 hidden w-[300px] sm:flex flex-col border-r-2"
        id="navbar-panels"
      >
        <div className="border-b-2 rounded-xl py-3">
          <H1 size={"1.5em"} span>
            Editor
          </H1>
        </div>
        <div className="m-0 text-3xl border-b rounded-xl flex justify-between dark:text-zinc-50 p-4 items-center">
          <button
            //@ts-ignore
            tooltip="Componentes"
            tooltip-pos="bottom"
            className="hover:text-zinc-400 duration-300"
            onClick={showBlock}
          >
            <i className="fa fa-cubes"></i>
          </button>
          <button
            //@ts-ignore
            tooltip="Layer"
            tooltip-pos="bottom"
            onClick={showLayer}
            className="hover:text-zinc-400 duration-300"
          >
            <i className="fa fa-tasks"></i>
          </button>

          <button
            //@ts-ignore
            tooltip="Estilos"
            tooltip-pos="bottom"
            onClick={showStyle}
            className="hover:text-zinc-400 duration-300"
          >
            <i className="fa fa-paint-brush"></i>
          </button>

          <button
            //@ts-ignore
            tooltip="Configuraciones"
            tooltip-pos="bottom"
            onClick={showConfig}
            className="hover:text-zinc-400 duration-300"
          >
            <i className="fa fa-cog"></i>
          </button>

          <button
            //@ts-ignore
            tooltip="Codigo Custom"
            tooltip-pos="bottom"
            onClick={showEditor}
            className="hover:text-zinc-400 duration-300"
          >
            <i className="fa fa-code"></i>
          </button>
        </div>
        <div>
          <div id="block" />
          <div id="layer" className="hidden" />
          <div id="style" className="hidden" />
          <div id="config" className="hidden" />
          <div id="editor" className="hidden" />
        </div>
      </div>
      <div className="w-full">
        <div className="py-1 border-b-2 rounded-xl flex justify-between">
          <div>
            <div className="panel-editor" id="panel-editor" />
          </div>
          <div>
            <div className="panel-devices w-min" id="panel-devices" />
          </div>
          <div className="space-x-4">
            <div className="panel-save hidden" id="panel-save" />
            <Button
              onClick={() => {
                const res = document.getElementsByClassName("fa-floppy-o");
                //@ts-ignore
                res[0].click();
              }}
            >
              {t("Guardar", "Save")}
            </Button>
          </div>
        </div>
        <div id="grapes" />
      </div>
    </div>
  );
}
