import { getAllWordsInSelector } from "./ExtractWordsUtil";

const isWildcardWhitelistSelector = (selector: any) => {
  return selector[0] === "*" && selector[selector.length - 1] === "*";
};

const hasWhitelistMatch = (selector: any, whitelist: any) => {
  for (let el of whitelist) {
    if (selector.includes(el)) return true;
  }
  return false;
};

class SelectorFilter {
  //@ts-ignore
  constructor(contentWords, whitelist) {
    //@ts-ignore
    this.contentWords = contentWords;
    //@ts-ignore
    this.rejectedSelectors = [];
    //@ts-ignore
    this.wildcardWhitelist = [];
    //@ts-ignore
    this.parseWhitelist(whitelist);
  }
  //@ts-ignore
  initialize(CssSyntaxTree) {
    CssSyntaxTree.on("readRule", this.parseRule.bind(this));
  }
  //@ts-ignore
  parseWhitelist(whitelist) {
    //@ts-ignore
    whitelist.forEach((whitelistSelector) => {
      whitelistSelector = whitelistSelector.toLowerCase();

      if (isWildcardWhitelistSelector(whitelistSelector)) {
        // If '*button*' then pus
        //@ts-ignoreh 'button' onto list.
        this.wildcardWhitelist.push(
          whitelistSelector.substr(1, whitelistSelector.length - 2)
        );
      } else {
        getAllWordsInSelector(whitelistSelector).forEach((word) => {
          //@ts-ignore
          this.contentWords[word] = true;
        });
      }
    });
  }
  //@ts-ignore
  parseRule(selectors, rule) {
    rule.selectors = this.filterSelectors(selectors);
  }
  //@ts-ignore
  filterSelectors(selectors) {
    //@ts-ignore
    let contentWords = this.contentWords, //@ts-ignore
      rejectedSelectors = this.rejectedSelectors, //@ts-ignore
      wildcardWhitelist = this.wildcardWhitelist, //@ts-ignore
      usedSelectors = [];
    //@ts-ignore
    selectors.forEach((selector) => {
      if (hasWhitelistMatch(selector, wildcardWhitelist)) {
        usedSelectors.push(selector);
        return;
      }
      let words = getAllWordsInSelector(selector),
        usedWords = words.filter((word) => contentWords[word]);

      if (usedWords.length === words.length) {
        usedSelectors.push(selector);
      } else {
        rejectedSelectors.push(selector);
      }
    });
    //@ts-ignore
    return usedSelectors;
  }
}

export default SelectorFilter;
