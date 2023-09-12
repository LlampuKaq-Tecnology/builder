import { Editor } from "grapesjs";
import FooterModal from "../components/FooterModal";
export const GPT = (editor: Editor) => {
  const OPENAI_API_KEY = "";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  const si = () => {
    console.log("sd");
    return;

    //@ts-ignore
    var input = document.getElementById("myInput")?.value;
    const res = editor.getSelected();

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Eres un desarollador web que usa tailwindcss en modo claro y oscuro, en el modo osucuro usas bg-zinc que develoveras solo el codigo que te piden",
        },
        { role: "user", content: input },
      ],
    };
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        res?.append(result.choices[0].message.content);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const cm = editor.Commands;
  const openModal = () => {
    const { fn, content } = FooterModal(
      si,
      "btnSi",
      `<input type="text" id="myInput">`
    );
    fn();
    editor.Modal.open({
      title: "Chat Gpt",
      content,
    });
  };
  cm.add("chatgpt", openModal);
};
