//@ts-ignore
export const saveFunction = (editor, fn) => {
  const cm = editor.Commands;
  cm.add("save", {
    //@ts-ignore
    run(editor, sender) {
      const component = editor.getComponents();
      const html = editor.getHtml();
      const css = editor.getCss();
      const js = editor.getJs();
      if (fn != undefined) {
        fn({ html, css, js, component });
      }
      if (fn == undefined) {
        console.log("no component");
      }
    }, //@ts-ignore
    stop(editor, sender) {},
  });
};

