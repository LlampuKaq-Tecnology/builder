import { gtp } from "@/services/gpt";

import { Button, H1, Input, useInput } from "cllk";
import { useState } from "react";
import Showdown from "showdown";
function extractCodeFromHTML(htmlString: string) {
  // Crea un elemento div para almacenar el HTML y extraer su contenido
  const div = document.createElement("div");
  div.innerHTML = htmlString;

  // Busca el elemento <code> dentro del div
  const codeElement = div.querySelector("code");

  // Si se encuentra un elemento <code>, devuelve su contenido
  if (codeElement) {
    return codeElement.textContent;
  } else {
    return null; // Si no se encuentra, devuelve null
  }
}
function containsBackticks(inputString: string) {
  // Verifica si el string contiene el símbolo de comillas triples (```)
  return inputString.includes("```");
}

export default function Home() {
  const [html, setHtml] = useState<string | null>(`<div>hola</div>`);

  const input = useInput("name", "");
  const call = async () => {
    const res = await gtp(html, input.value);
    if (containsBackticks(res.response)) {
      var converter = new Showdown.Converter();
      var htm = converter.makeHtml(res.response);
      const r = extractCodeFromHTML(htm);
      setHtml(r);
    } else {
      setHtml(res.response);
    }
  };
  return (
    <>
      {/* <Builder addAsset={() => {}} fn={() => {}} /> */}
      <Input label="si" {...input} />
      <Button onClick={call}>Button</Button>
      <H1>Hola</H1>
      <div
        dangerouslySetInnerHTML={{
          __html: html ?? "",
        }}
      ></div>
    </>
  );
}
// return <Builder addAsset={() => {}} fn={() => {}} />;
