/**
 * Object for creating click-triggered navigation submenus
 *
 * Latest version, Issues, etc: https://github.com/mrwweb/clicky-menus
 *
 * Thanks for the inspiration:
 *    - https://www.lottejackson.com/learning/a-reusable-javascript-toggle-pattern
 *    - https://codepen.io/lottejackson/pen/yObQRM
 */

(function () {
  const ClickyMenus = function (menu) {
    // DOM element(s)
    const container = menu.parentElement;
    let currentMenuItem;
    let index;
    let length_;

    this.init = function () {
      menuSetup();
      document.addEventListener("click", closeOpenMenu);
    };

    /* = ==================================================
    =            Menu Open / Close Functions            =
    =================================================== */
    function toggleOnMenuClick(e) {
      const button = e.currentTarget;

      // close open menu if there is one
      if (currentMenuItem && button !== currentMenuItem) {
        toggleSubmenu(currentMenuItem);
      }

      toggleSubmenu(button);
    }

    function toggleSubmenu(button) {
      const submenu = document.getElementById(button.getAttribute("aria-controls"));

      if (button.getAttribute("aria-expanded") === "true") {
        button.setAttribute("aria-expanded", false);
        submenu.setAttribute("aria-hidden", true);
        currentMenuItem = false;
      } else {
        button.setAttribute("aria-expanded", true);
        submenu.setAttribute("aria-hidden", false);
        preventOffScreenSubmenu(submenu);
        currentMenuItem = button;
      }
    }

    function preventOffScreenSubmenu(submenu) {
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const parent = submenu.offsetParent;
      const menuLeftEdge = parent.getBoundingClientRect().left;
      const menuRightEdge = menuLeftEdge + submenu.offsetWidth;

      if (menuRightEdge + 32 > screenWidth) {
        // adding 32 so it's not too close
        submenu.classList.add("sub-menu--right");
      }
    }

    function closeOnEscKey(e) {
      if (e.keyCode === 27) {
        // we're in a submenu item
        if (e.target.closest('ul[aria-hidden="false"]') !== null) {
          currentMenuItem.focus();
          toggleSubmenu(currentMenuItem);

          // we're on a parent item
        } else if (e.target.getAttribute("aria-expanded") === "true") {
          toggleSubmenu(currentMenuItem);
        }
      }
    }

    function closeOpenMenu(e) {
      if (currentMenuItem && !e.target.closest(`#${container.id}`)) {
        toggleSubmenu(currentMenuItem);
      }
    }

    /* = ==========================================================
    =            Modify Menu Markup & Bind Listeners            =
    ============================================================= */
    function menuSetup() {
      menu.classList.remove("no-js");

      for (const submenu of menu.querySelectorAll("ul")) {
        const menuItem = submenu.parentElement;

        if (typeof submenu !== "undefined") {
          const button = convertLinkToButton(menuItem);

          setUpAria(submenu, button);

          // bind event listener to button
          button.addEventListener("click", toggleOnMenuClick);
          menu.addEventListener("keyup", closeOnEscKey);
        }
      }
    }

    /**
     * Why do this? See https://justmarkup.com/articles/2019-01-21-the-link-to-button-enhancement/
     */
    function convertLinkToButton(menuItem) {
      const link = menuItem.querySelectorAll("a")[0];
      const linkHTML = link.innerHTML;
      const linkAtts = link.attributes;
      const button = document.createElement("button");

      if (link !== null) {
        // set button content and attributes
        button.innerHTML = linkHTML.trim();
        for (index = 0, length_ = linkAtts.length; index < length_; index++) {
          const attribute = linkAtts[index];
          if (attribute.name !== "href") {
            button.setAttribute(attribute.name, attribute.value);
          }
        }

        link.replaceWith(button);
      }

      return button;
    }

    function setUpAria(submenu, button) {
      const submenuId = submenu.getAttribute("id");

      let id;
      id =
        submenuId === null
          ? `${button.textContent.trim().replace(/\s+/g, "-").toLowerCase()}-submenu`
          : `${menuItemId}-submenu`;

      // set button ARIA
      button.setAttribute("aria-controls", id);
      button.setAttribute("aria-expanded", false);

      // set submenu ARIA
      submenu.setAttribute("id", id);
      submenu.setAttribute("aria-hidden", true);
    }
  };

  /* Create a ClickMenus object and initiate menu for any menu with .clicky-menu class */
  document.addEventListener("DOMContentLoaded", function () {
    const menus = document.querySelectorAll(".clicky-menu");

    for (const menu of menus) {
      const clickyMenu = new ClickyMenus(menu);
      clickyMenu.init();
    }
  });
})();

console.log("works");
