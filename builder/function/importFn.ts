import { Editor } from "grapesjs";

function importCode(editor: any) {
  let codeViewer = editor && editor.CodeManager.getViewer("CodeMirror").clone();
  let btnImp = document.createElement("button");
  let container = document.createElement("div");
  let pfx = "";
  // Init import button
  btnImp.innerHTML = "import";
  btnImp.className = pfx + "btn-prim " + pfx + "btn-import";
  btnImp.onclick = () => {
    let code = codeViewer.editor.getValue();
    editor.DomComponents.getWrapper().set("content", "");
    editor.setComponents(code);
    editor.Modal.close();
  };
  // Init code viewer
  codeViewer.set({
    codeName: "htmlmixed",
    theme: "hopscotch",
    readOnly: 0,
  });
  return {
    run(editor: Editor, sender: any) {
      let md = editor.Modal;
      let modalContent = md.getContentEl();
      let viewer = codeViewer.editor;
      md.setTitle("Import template");
      // Init code viewer if not yet instantiated
      if (!viewer) {
        let txtarea = document.createElement("textarea");
        if ("modalLabelImport") {
          let labelEl = document.createElement("div");
          labelEl.className = pfx + "import-label";
          labelEl.innerHTML = "opt.modalLabelImport";
          container.appendChild(labelEl);
        }
        container.appendChild(txtarea);
        container.appendChild(btnImp);
        codeViewer.init(txtarea);
        viewer = codeViewer.editor;
      }
      md.setContent("");
      md.setContent(container);
      codeViewer.setContent("");
      md.open();
      viewer.refresh();
      sender && sender.set("active", 0);
    },
  };
}
export const importFn = (editor: Editor) => {
  const cm = editor.Commands;
  cm.add("gjs-open-import-template", importCode(editor));
};
