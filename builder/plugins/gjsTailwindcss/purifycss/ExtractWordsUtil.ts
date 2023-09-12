//@ts-ignore
const addWord = (words, word) => {
  if (word) words.push(word);
};
//@ts-ignore
export const getAllWordsInContent = (content) => {
  let used = {
    // Always include html and body.
    html: true,
    body: true,
  };
  const words = content.split(/[^a-z]/g);
  for (let word of words) {
    //@ts-ignore
    used[word] = true;
  }
  return used;
};
//@ts-ignore
export const getAllWordsInSelector = (selector) => {
  // Remove attr selectors. "a[href...]"" will become "a".
  selector = selector.replace(/\[(.+?)\]/g, "").toLowerCase();
  // If complex attr selector (has a bracket in it) just leave
  // the selector in. ¯\_(ツ)_/¯
  if (selector.includes("[") || selector.includes("]")) {
    return [];
  }
  let skipNextWord = false,
    word = "", //@ts-ignore
    words = [];

  for (let letter of selector) {
    if (skipNextWord && !/[ #.]/.test(letter)) continue;
    // If pseudoclass or universal selector, skip the next word
    if (/[:*]/.test(letter)) {
      //@ts-ignore
      addWord(words, word);
      word = "";
      skipNextWord = true;
      continue;
    }
    if (/[a-z]/.test(letter)) {
      word += letter;
    } else {
      //@ts-ignore
      addWord(words, word);
      word = "";
      skipNextWord = false;
    }
  }
  //@ts-ignore
  addWord(words, word); //@ts-ignore
  return words;
};
