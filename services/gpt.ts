export const gtp = async (
  code: string | null,
  message: string
): Promise<{ response: any }> => {
  return fetch("http://localhost:3001/tailwindcss", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, message }),
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
};
