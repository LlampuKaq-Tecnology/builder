export const panels = {
  defaults: [
    {
      id: "panel-devices",
      el: ".panel-devices",
      buttons: [
        {
          id: "device-desktop",
          label: '<i class="fa fa-television"></i>',
          command: "set-device-desktop",
          active: true,
          attributes: {
            tooltip: "Vista completa",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "device-tablet",
          label: '<i class="fa fa-tablet"></i>',
          command: "set-device-tablet",
          attributes: {
            tooltip: "Vista de Tablet",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "device-mobile",
          label: '<i class="fa fa-mobile"></i>',
          command: "set-device-mobile",
          attributes: {
            tooltip: "Vista de celular",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "ia",
          label: '<i class="fa fa-question-circle"></i>',
          command: "chatgpt", // Built-in command
          attributes: {
            tooltip: "Intelligence Artificial",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "dark",
          label: '<i class="fa fa-moon-o"></i>',
          command: "dark", // Built-in command
          attributes: {
            tooltip: "Make Dark",
            "tooltip-pos": "bottom",
          },
        },
      ],
    },
    {
      id: "panel-editor",
      el: ".panel-editor",
      buttons: [
        {
          id: "importCode",
          className: "fa fa-upload",
          command: "gjs-open-import-template",
          attributes: {
            tooltip: "Importar codigo",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "exportCode",
          className: "fa fa-code",
          command: "core:open-code",
          attributes: {
            tooltip: "Export codigo",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "downloadCode",
          className: "fa fa-download",
          command: "gjs-export-zip",
          attributes: {
            tooltip: "Descargar codigo",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "undo",
          className: "fa fa-undo",
          command: "core:undo",
          attributes: {
            tooltip: "Atras",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "redo",
          className: "fa fa-repeat",
          command: "core:redo",
          attributes: {
            tooltip: "Adelante",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "preview",
          className: "fa fa-eye",
          command: "core:preview",
          attributes: {
            tooltip: "Vista previa",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "visibility",
          label: '<i class="fa fa-clone"></i>',
          command: "sw-visibility", // Built-in command
          attributes: {
            tooltip: "Mostrar cuadricula",
            "tooltip-pos": "bottom",
          },
        },
        {
          id: "addFont",
          label: '<i class="fa fa-font" aria-hidden="true"></i>',
          command(editor: any) {
            editor.runCommand("open-fonts");
          },
          attributes: {
            tooltip: "Añadir fuente",
            "tooltip-pos": "bottom",
          },
        },
      ],
    },
    {
      id: "panel-save",
      el: ".panel-save",
      buttons: [
        {
          className: "fa fa-floppy-o hidden",
          command: "save",
        },
      ],
    },
  ],
};
