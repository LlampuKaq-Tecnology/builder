import { Editor } from "grapesjs";

const images = (editor: any) => {
  const toggleImages = (components: any, on: any) => {
    const srcPlh = "##";
    components.each((component: any) => {
      if (component.get("type") === "image") {
        const source = component.get("src");

        if (on) {
          if (source === srcPlh) {
            component.set("src", component.get("src_bkp"));
          }
        } else if (source !== srcPlh) {
          component.set("src_bkp", component.get("src"));
          component.set("src", srcPlh);
        }
      }

      toggleImages(component.get("components"), on);
    });
  };

  return {
    run(editor: Editor) {
      const components = editor.getComponents();
      //@ts-ignore
      toggleImages(components);
    },
    stop(editor: Editor) {
      const components = editor.getComponents();
      toggleImages(components, 1);
    },
  };
};
export const toggleMore = (editor: Editor) => {
  editor.Commands.add("toogle-images", images(editor));
};
