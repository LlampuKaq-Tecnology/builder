export default (
  dc: any,
  {
    typeTab,
    typeTabContent,
    typeTabContents,
    typeTabContainer,
    style,
    ...config
  }: any
) => {
  const type = config.typeTabs;
  //@ts-ignore
  const script = function (props) {
    //@ts-ignore
    const el = this;
    const classTabActive = props.classactive;
    const selectorTab = props.selectortab; //@ts-ignore
    const { history, _isEditor } = window;
    const attrTabindex = "tabIndex";
    const attrSelected = "ariaSelected";
    const roleTab = "[role=tab]";
    const roleTabContent = "[role=tabpanel]";
    const { body, location } = document as any;
    const matches =
      body.matchesSelector ||
      body.webkitMatchesSelector ||
      body.mozMatchesSelector ||
      body.msMatchesSelector;
    const each = (items: any, clb: any) => {
      const arr = items || [];
      for (let i = 0; i < arr.length; i++) clb(arr[i], i);
    };

    const hideContents = () => {
      //@ts-ignore
      each(el.querySelectorAll(roleTabContent), (i) => (i.hidden = true));
    };
    //@ts-ignore
    const getTabId = (item) => item.getAttribute(selectorTab);
    //@ts-ignore
    const qS = (elem, qs) => elem.querySelector(qs);

    const getAllTabs = () => el.querySelectorAll(roleTab); //@ts-ignore
    const upTabIdx = (item, val) => !_isEditor && (item[attrTabindex] = val);

    const activeTab = (tabEl: any) => {
      each(getAllTabs(), (item: any) => {
        item.className = item.className.replace(classTabActive, "").trim();
        item[attrSelected] = "false";
        upTabIdx(item, "-1");
      });
      hideContents();
      tabEl.className += " " + classTabActive;
      tabEl[attrSelected] = "true";
      upTabIdx(tabEl, "0");
      const tabContentId = getTabId(tabEl);
      const tabContent = tabContentId && qS(el, `#${tabContentId}`);
      tabContent && (tabContent.hidden = false);
    };

    const getTabByHash = () => {
      const hashId = (location.hash || "").replace("#", "");
      const qrStr = (att: any) => `${roleTab}[${att}=${hashId}]`;
      return hashId && qS(el, qrStr(selectorTab));
    };

    const getSelectedTab = (target: any) => {
      //@ts-ignore
      let found; //@ts-ignore
      each(getAllTabs(), (item) => {
        //@ts-ignore
        if (found) return;
        if (item.contains(target)) found = item;
      });
      return found;
    };

    let tabToActive = qS(el, `.${classTabActive}${roleTab}`);
    tabToActive = tabToActive || getTabByHash() || qS(el, roleTab);
    tabToActive && activeTab(tabToActive);
    //@ts-ignore
    el.addEventListener("click", (ev) => {
      let { target } = ev;
      let found = matches.call(target, roleTab);

      if (!found) {
        target = getSelectedTab(target);
        if (target) found = 1;
      }

      if (found && !ev.__trg && target.className.indexOf(classTabActive) < 0) {
        ev.preventDefault();
        ev.__trg = 1;
        activeTab(target);
        const id = getTabId(target);
        try {
          //@ts-ignore
          history && history.pushState(null, null, `#${id}`);
        } catch (e) {}
      }
    });
  };
  const defTabs = [1, 2, 3].map((i) => ({ type: typeTab }));
  const traits = [
    {
      full: 1,
      type: "button",
      label: false,
      text: "Add Tab", //@ts-ignore
      command: (ed) => {
        const sel = ed.getSelected();
        sel && sel.addTab();
      },
    },
  ];

  dc.addType(type, {
    model: {
      defaults: {
        name: "Tabs",
        classactive: config.classTabActive,
        selectortab: config.selectorTab,
        "script-props": ["classactive", "selectortab"],
        script,
        traits,
        components: [
          { type: typeTabContainer, components: defTabs },
          { type: typeTabContents },
          style && `<style>${style(config)}</style>`,
        ],
        ...config.tabsProps,
      },

      init() {
        this.findTabs().map(this.__onTab); //@ts-ignore
        this.listenTo(
          this.getTabContainerType().components(),
          "add",
          this.__onTab
        );
      },
      //@ts-ignore
      __onTab(tab, v, opts = {}) {
        //@ts-ignore
        !opts.avoidStore && !opts.temporary && tab.__initTab && tab.__initTab();
      },
      //@ts-ignore
      getTabContainerType() {
        //@ts-ignore
        return this.findType(typeTabContainer)[0];
      },
      //@ts-ignore
      getContentsType() {
        //@ts-ignore
        return this.findType(typeTabContents)[0] || this;
      },
      //@ts-ignore
      findTabs() {
        //@ts-ignore
        return this.findType(typeTab);
      },
      //@ts-ignore
      findContents() {
        //@ts-ignore
        return this.findType(typeTabContent);
      },
      //@ts-ignore
      addTab(content) {
        const cnt = this.getTabContainerType();
        cnt.append({
          type: typeTab,
          components: content,
        });
      },
    },
  });
};
