export const devicesFunction = (editor: any) => {
  const cm = editor.Commands;
  cm.add("set-device-desktop", (e: any) => e.setDevice("Desktop"));
  cm.add("set-device-tablet", (e: any) => e.setDevice("Tablet"));
  cm.add("set-device-mobile", (e: any) => e.setDevice("Mobile"));
};
