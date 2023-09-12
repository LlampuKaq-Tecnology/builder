const $ = (ed: any) => {
  return document.querySelector(ed);
};
const showPanel = (panelName: string) => {
  const panels = ["block", "layer", "style", "config", "editor"];
  const navbar = $("#navbar-panels");
  panels.forEach((panel) => {
    const element = $(`#${panel}`);
    if (panel === panelName) {
      element?.classList.remove("hidden");
    } else {
      element?.classList.add("hidden");
    }
  });

  if (navbar) {
    navbar.classList.remove("w-[950px]");
    navbar.classList.add("w-[300px]");
  }

  if (panelName === "editor" && navbar) {
    navbar.classList.add("w-[950px]");
  }
};

export const showBlock = () => {
  showPanel("block");
};

export const showLayer = () => {
  showPanel("layer");
};

export const showStyle = () => {
  showPanel("style");
};

export const showConfig = () => {
  showPanel("config");
};

export const showEditor = () => {
  showPanel("editor");
};
