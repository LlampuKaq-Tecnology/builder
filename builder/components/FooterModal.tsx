const FooterModal = (fn: any, id: any, html: string) => {
  const modalContent = document.createElement("div");
  modalContent.innerHTML = `
     ${html}
     <div class="flex justify-around"><button id="close" class="px-8 py-1 font-semibold rounded-full border dark:text-gray-50">Cerrar</button>
     <button class="px-8 py-1 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800" id="${id}">Haz clic</button></div>
     
     `;
  const r = () => {
    const btnClose = document.querySelector(`.gjs-mdl-btn-close`);
    const b = modalContent.querySelector(`#close`);
    b?.addEventListener("click", () => {
      //@ts-ignore
      btnClose.click();
    });
    const btnSi = modalContent.querySelector(`#${id}`);
    btnSi?.addEventListener("click", fn);
  };

  return {
    content: modalContent,
    fn: r,
  };
};

export default FooterModal;
