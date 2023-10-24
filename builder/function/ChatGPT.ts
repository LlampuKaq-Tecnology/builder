import { Editor } from "grapesjs";
import FooterModal from "../components/FooterModal";
export const GPT = (editor: Editor) => {
  const OPENAI_API_KEY = "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";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  const si = () => {
    console.log("sd");

    //@ts-ignore
    var input = document.getElementById("myInput")?.value;
    const res = editor.getSelected();

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a web programmer, you use tailwindcss, html and javascipt without dependencies and using the browser's APIs, your answers are only uncommented code structured as follows <style><html><javascript>",
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
        console.log(result.choices[0].message.content);
        editor.setComponents(result.choices[0].message.content);
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
