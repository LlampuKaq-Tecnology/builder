// export const PreviewFunction = (editor: any) => {
//   editor.on("run:preview", () => {
//     // This will be used to hide border
//     editor.stopCommand("sw-visibility");
//   });
//   editor.on("stop:preview", () => {
//     editor.runCommand("sw-visibility");
//   });
//   //Undo
//   editor.Commands.add("undo", {
//     run: (editor: any) => editor.UndoManager.undo(),
//   });

//   // Redo
//   editor.Commands.add("redo", {
//     run: (editor: any) => editor.UndoManager.redo(),
//   });
// };
// export const saveFunction = (
//   editor: any,
//   sendDataHomepage: (CHtml: any) => Promise<void>
// ) => {
//   editor.Commands.add("save", {
//     run: async (editor: any) => {
//       const tmlp = editor.getHtml() + `<style>${editor.getCss()}</style>`;
//       const r = await fetch(
//         "https://us-east-1.aws.data.mongodb-api.com/app/backend-llkhttp-hropc/endpoint/html",
//         { method: "POST", body: tmlp }
//       );
//       const html = await r.json();
//       sendDataHomepage(html.html, getConfig);
//     },
//   });
// };
