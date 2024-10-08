(function () {
  'use strict';

  let _WINDOW = {};
  let _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  const {
    userAgent = ''
  } = _WINDOW.navigator || {};
  const WINDOW = _WINDOW;
  const DOCUMENT = _DOCUMENT;
  const IS_BROWSER = !!WINDOW.document;
  const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var a = "classic",
      r = "sharp",
      o = "sharp-duotone";

  var et$1 = {
    classic: {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    sharp: {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    },
    "sharp-duotone": {
      900: "fasds"
    }
  };
  var bt = {
    kit: {
      fak: "kit",
      "fa-kit": "kit"
    },
    "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
    }
  };
  var lo = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    },
    "sharp-duotone": {
      "fa-solid": "fasds"
    }
  },
      no = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    },
    "sharp-duotone": {
      fasds: "fa-solid"
    }
  },
      fo = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab"
    },
    sharp: {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    },
    "sharp-duotone": {
      solid: "fasds"
    }
  },
      ho = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands"
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid"
    }
  };
  var Io = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  },
      Fo = {
    kit: {
      fak: "fa-kit"
    },
    "kit-duotone": {
      fakd: "fa-kit-duotone"
    }
  },
      So = {
    kit: {
      kit: "fak"
    },
    "kit-duotone": {
      "kit-duotone": "fakd"
    }
  };

  const NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  const PRODUCTION = (() => {
    try {
      return "production" === 'production';
    } catch (e$$1) {
      return false;
    }
  })();

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get(target, prop) {
        return prop in target ? target[prop] : target[a];
      }

    });
  }

  const _PREFIX_TO_STYLE = { ...ho
  };
  _PREFIX_TO_STYLE[a] = { ...ho[a],
    ...bt['kit'],
    ...bt['kit-duotone']
  };
  const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  const _STYLE_TO_PREFIX = { ...fo
  };
  _STYLE_TO_PREFIX[a] = { ..._STYLE_TO_PREFIX[a],
    ...So['kit'],
    ...So['kit-duotone']
  };
  const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  const _PREFIX_TO_LONG_STYLE = { ...no
  };
  _PREFIX_TO_LONG_STYLE[a] = { ..._PREFIX_TO_LONG_STYLE[a],
    ...Fo['kit']
  };
  const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  const _LONG_STYLE_TO_PREFIX = { ...lo
  };
  _LONG_STYLE_TO_PREFIX[a] = { ..._LONG_STYLE_TO_PREFIX[a],
    ...Io['kit']
  };
  const LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  const _FONT_WEIGHT_TO_PREFIX = { ...et$1
  };
  const FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
  const prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[a]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[r]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[o]).map(prefixes.add.bind(prefixes));

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn(...args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  const w$1 = WINDOW || {};
  if (!w$1[NAMESPACE_IDENTIFIER]) w$1[NAMESPACE_IDENTIFIER] = {};
  if (!w$1[NAMESPACE_IDENTIFIER].styles) w$1[NAMESPACE_IDENTIFIER].styles = {};
  if (!w$1[NAMESPACE_IDENTIFIER].hooks) w$1[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w$1[NAMESPACE_IDENTIFIER].shims) w$1[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w$1[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce((acc, iconName) => {
      const icon = icons[iconName];
      const expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      skipHooks = false
    } = params;
    const normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = { ...(namespace.styles[prefix] || {}),
        ...normalized
      };
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    
    "destiny2": [512,512,[],"e000","M215.2 240.4q7.6 9 21.4 14.5c5 2.6 11 4.1 17.2 4.1h0c6.7 0 13.1-1.1 19.1-2.9l-.5 .1c4.2-1.1 7.9-2.8 11.2-4.9l-.1 .1c3.6-2.3 6.8-4.8 9.7-7.6l0 0c4.9-4.7 9-10.2 12.3-16.2l.2-.4c2.6-5.4 4.1-11.7 4.1-18.4c0-.3 0-.7 0-1l0 0v-97.3c0-.1 0-.2 0-.3c0-4.1-.5-8-1.5-11.8l.1 .3c-3.5-10.8-9.7-19.9-17.9-26.8l-.1-.1Q278 61.6 260.1 60.3c-2-.4-4.2-.7-6.6-.7s-4.6 .3-6.8 .7l.2 0c-5.1 1.2-9.5 2.6-13.7 4.4l.6-.2c-9.7 4.2-17.6 10.8-23.3 19.1l-.1 .2c-5.2 7.9-8.3 17.5-8.3 27.9c0 .4 0 .8 0 1.2l0-.1v91.1c0 .1 0 .2 0 .3c0 2.6 .3 5.1 .7 7.6l0-.2c.4 1.9 .7 4 .7 6.2l0 0c2.5 8.8 6.5 16.4 11.8 22.9l-.1-.1zM511.3 114.1c.4-3.1 .7-6.7 .7-10.4s-.3-7.2-.7-10.8l0 .4c-.9-3.7-1.8-7.8-2.8-12.4c-.9-4.7-2.4-8.8-4.3-12.7l.1 .3c-3.7-7.4-7.6-13.7-12-19.7l.2 .3c-4.5-5.9-9.8-10.9-15.6-15l-.2-.1c-4.4-3.5-9.4-6.5-14.8-8.8l-.4-.2c-5.2-2.2-11.2-3.9-17.6-4.8l-.4 0c-4.4-.9-9.4-1.4-14.5-1.4c-.2 0-.4 0-.7 0h0c-5.9 0-11.6 .5-17.2 1.5l.6-.1c-7.9 2-14.8 4.6-21.3 7.9l.6-.3c-7 3.5-12.9 6.9-18.5 10.7l.6-.4q-8.3 5.5-16.6 10.4c-4.9 2.9-10.8 5.9-16.9 8.6l-1.1 .4-1.4 .7v145.6c0 .1 0 .2 0 .3c0 5.5-.5 10.9-1.5 16.1l.1-.5c-1 5.5-2.4 10.4-4.3 15l.2-.5c-4.5 10.1-10.3 18.8-17.3 26.3l.1-.1c-7.1 7.4-15.6 13.5-25 17.7l-.5 .2c-3.2 1.6-7.1 3.3-11.1 4.6l-.6 .2c-3.9 1.3-8.3 2.1-12.9 2.1c-.1 0-.1 0-.2 0h0c-1.8 .6-3.8 .9-5.9 .9c-1.1 0-2.1-.1-3.2-.3l.1 0c-3-.4-6.5-.7-10.1-.7c-.1 0-.2 0-.3 0h0c-6-1-11.1-2.2-16.1-3.7l.9 .2c-5.3-1.6-9.8-3.7-14.1-6.4l.3 .1c-8.4-4.7-15.5-10.7-21.3-17.8l-.1-.1c-5.8-7.1-10.7-15.3-14.3-24.2l-.2-.6c-.9-2.8-1.8-5.3-2.8-7.6c-.9-2.2-1.4-4.7-1.4-7.3c0-.1 0-.2 0-.3v0q-1.4-10.4-1.4-10.4V58.2c0-.4-.4-.7-1.4-.7q-6.9-4.1-12.4-6.9c-4.2-2.2-7.8-4.4-11.2-7l.2 .1q-8.3-4.1-15.9-8.3t-14.5-8.3c-6.4-3.3-13.8-6-21.6-7.5l-.5-.1c-4.2-.8-9.1-1.2-14-1.2c-3.3 0-6.6 .2-9.8 .6l.4 0c-7.7 .9-14.7 2.6-21.4 5l.7-.2c-6.9 2.5-12.8 6-18 10.4l.1-.1c-5.6 3.7-10.3 8.1-14.4 13l-.1 .1c-3.8 4.6-7.3 9.8-10.1 15.4l-.2 .5c-2.4 4.5-4.7 10-6.6 15.7l-.3 .9c-1.8 5.2-2.8 11.2-2.8 17.5c0 .2 0 .3 0 .5v0c-.4 2.3-.6 4.8-.6 7.5c0 4 .4 7.8 1.3 11.5l-.1-.3q2.1 9 4.8 17.2c3.1 7.1 6.8 13.2 11.2 18.8l-.1-.2c4.8 6.1 10.2 11.3 16.3 15.7l.2 .2 33.1 22.1c3.6 3.6 7.4 7 11.5 10.1l.3 .2c4.3 3.4 8.1 6.7 11.7 10.4l13.8 13.8c4.5 4.5 8.6 9.5 12.2 14.8l.2 .4q5.5 6.9 9.7 13.1t8.3 13.1c4.3 6 8.2 12.8 11.4 20l.3 .7q4.8 11 9 22.1q5.5 15.2 9.7 29.7c2.6 8.6 4.5 18.7 5.5 29l0 .6c.9 2.5 1.4 5.3 1.4 8.3v0c0 3 .5 5.8 1.4 8.5l0-.2c0 3.9 .3 7.7 .7 11.5l0-.4c.4 3.3 .7 7.2 .7 11v0l2.8 16.6c1.1 6.4 2.5 12 4.4 17.3l-.2-.8c2.1 7.1 4.9 13.3 8.5 18.9l-.2-.3c3.8 6.1 8.4 11.4 13.7 15.8l.1 .1c10.7 9.7 24.5 16.2 39.7 17.9l.3 0c3.7 .8 8 1.3 12.4 1.4l0 0c3.9 0 7.7-.5 11.4-1.5l-.3 .1c.1 0 .3 0 .5 0c5.3 0 10.4-1 15-2.9l-.3 .1q6.9-2.8 15.2-6.9c9.6-6 17.5-13.9 23.3-23.2l.2-.3c4.4-5.3 7.9-11.5 10.2-18.2l.1-.4c2.1-6.1 3.8-13.4 4.8-20.8l.1-.6c0-3.2 .3-6.3 .7-9.3l0 .4c.4-2.7 .7-5.8 .7-8.9v0q1.4-8.3 2.1-16.6c.4-5.7 1.2-10.9 2.2-16l-.1 .8q1.4-8.3 2.8-17.2c1-6.6 2.5-12.4 4.4-18l-.2 .8q6.9-22.1 6.9-22.1l8.3-22.1q5.5-11 11-21.4c4.2-7.8 8.3-14.3 12.8-20.6l-.4 .5q8.3-9.7 15.9-18.6t15.9-18.6q5.5-4.1 10.4-8.3t9-8.3l11-8.3c3.2-2.5 6.8-4.8 10.6-6.7l.4-.2 13.8-9.7 13.8-11c3.7-3.7 7.1-7.8 10.2-12.1l.2-.3c3.1-4.4 5.7-9.4 7.5-14.8l.1-.4v1.4c2.5-5.6 4.4-12.1 5.5-18.9l0-.4z"],
    "idea": [512,512,[],"e004","M0 0v512h512V0zm79.4 66.4h106.7v39.1h-29.7v133.9h29.7v39.1H79.4v-39.1h30.8V105.5H79.4zm235.8 0h47.4V205c0 13.1-1.2 23.7-4.7 33.2c-3.6 9.5-8.3 16.6-15.4 23.7c-5.9 6-14.2 11.9-23.7 14.3a83.9 83.9 0 0 1 -30.8 5.9c-16.6 0-30.8-3.6-41.5-9.5a102.6 102.6 0 0 1 -27.3-22.5l29.7-33.2a68.3 68.3 0 0 0 17.8 15.4c5.9 3.6 13 5.9 20.2 5.9c8.3 0 15.4-2.4 21.3-8.3c4.7-5.9 7.1-14.2 7.1-27.3zM47.4 416h192v32h-192z"],
    "issues": [512,512,[],"e006","M256 304a48 48 0 1 0 0-96 48 48 0 0 0 0 96zm0 208A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM48 256a208 208 0 1 0 416 0 208 208 0 0 0 -416 0z"],
    "jetbrains": [512,512,[],"e002","M0 0h512v512H0zM44.8 448h192v-32h-192zM70.4 147.2h6.4c14.9-2.1 25.6-14.9 25.6-32V64H78.9v53.3c0 8.5-2.1 10.7-8.5 10.7s-10.7-2.2-12.8-6.4l-14.9 12.8c6.4 10.7 17.1 14.9 27.8 12.7zm106.7 0V128h-44.8v-12.8h38.4V96h-38.4V83.2h44.8V64h-68.2v85.3h68.2zm27.8 0h23.4v-64h25.6V64h-72.5v19.2h25.6v64zm-85.3 81.1c0-10.7-6.4-19.2-17.1-19.2c8.5-2.2 12.7-10.7 12.7-19.3c0-4.2-2.1-10.7-4.2-14.9c-6.4-6.4-14.9-8.5-23.4-8.5H44.8v83.2h42.7c19.2 0 32-8.5 32-21.3zM66.2 185.6h14.9c6.4 0 10.7 2.2 10.7 6.4c0 6.4-4.2 8.5-10.7 8.5H66.2zm0 44.8v-14.9h17c8.6 0 12.8 2.1 10.7 6.3c0 4.4-4.2 8.6-10.7 8.6zm157.8-64l-32 74.7-12.8-19.3c10.7-4.2 17.1-14.9 17.1-25.6c0-6.4-2.1-14.9-6.4-19.2c-8.5-8.6-19.2-10.7-27.6-10.7h-40.6v83.2h23.5V224h10.7l17.1 25.6h38.3l6.4-14.9h32l6.4 14.9h25.6l-34.1-85.3H224zm-64 40.5h-14.9v-19.2H160c6.4 0 12.8 2.1 12.8 10.7c0 4.2-4.4 8.5-12.8 8.5zm83.2 10.7h-17l8.5-23.4zm40.6 32h23.4v-83.2h-23.4zm85.3-38.4l-34.2-44.7h-21.3v83.2h23.5v-44.7l36.2 46.9h19.2v-85.3h-23.4zm66.1-12.7c-10.7-2.2-14.9-4.2-14.9-8.6c0-2.1 2.2-4.2 8.6-4.2c8.5 0 17 4.2 23.4 8.6l12.8-17.1c-10.7-8.6-21.3-10.7-34.2-10.7c-19.2 0-32 12.7-32 27.8c0 17 12.8 21.3 32 25.6c10.7 2.1 14.9 4.2 14.9 8.5s-4.2 6.4-10.7 6.4c-10.7 0-19.2-4.2-27.6-10.7l-12.8 14.9c10.7 8.6 25.6 12.8 38.4 12.8c21.3 0 34.1-10.7 34.1-27.8c0-14.9-12.7-21.3-32-25.6z"],
    "modrinth": [511,512,[],"e007","M501.7 322.3c11.3-41.9 12.1-87.3 0-132.3C465.3 54 325.3-26.7 189.1 9.7C84 37.9 11.8 127.6 1.2 229.6l43.1 0C54.6 146.8 113.8 74.4 199.5 51.5C305.4 23.2 414 80.4 451.9 180.7l-42 11.2c-19.3-46.7-58.2-80.9-104.3-95.5l-7.7 43.7c36.4 13.4 65.9 43.7 76.7 83.9c15.7 58.7-13.6 118.8-66.7 143.7l11.5 42.8c69.9-28.8 111.9-101.5 101.9-176.3L463.1 223c4.5 28.6 2.9 57-3.8 83.8l42.4 15.4zm-180.5 180C185 538.7 45.1 458 8.6 322c-4.3-15.9-6.9-31.8-8.1-47.6H43.6c1.1 11.9 3.2 23.8 6.4 35.7c3.3 12.5 7.7 24.4 13.1 35.6l38.4-23.1c-3.2-7.5-6-15.3-8.1-23.4C69.4 210 122.4 118.3 211.8 94.4c16.9-4.5 34-6.3 50.6-5.6l-7.7 43.7c-10.4 0-21 1.4-31.5 4.2c-66 17.7-105.1 85.4-87.4 151.2c1.1 4.1 2.4 8 3.8 11.9l49.2-29.5L173.9 231l46.4-47.7L279 170.7l17 20.9-27 27.4-23.6 7.4-16.9 17.3 8.3 23s16.7 17.8 16.8 17.8l23.6-6.3 16.8-18.5 36.7-11.6 10.9 24.6-37.9 46.4-63.5 20.1-28.5-31.7-49.6 29.8c25.4 29 63.7 45.1 103.3 41.7L277 421.9c-59.2 7.8-117-16.7-152.9-61.7l-38.3 23c50.4 66.2 137.7 99 223.1 76.2C370.4 442.9 418.3 401 444.2 348l42.5 15.4c-30.8 66-89.5 118.5-165.4 138.8z"],
    "pve": [512,512,[],"e001","M105.2 38.9c-23.2 11.8-23.2 13.7-1.5 38c120.6 134.3 149.4 166 151.6 166c3 .3 170.1-182.3 171.9-187.7c.8-1.5-4.4-6.7-11.1-11.4c-8.8-6.7-18.4-9.2-36.5-10c-33.9-2.2-45.7 5.2-87.8 52.4c-19.2 21.3-35.4 39.1-35.4 39.1c-.3 0-16.2-17.3-35-38.3s-40.6-42.1-47.9-46.2c-17-9.6-51.7-10.3-68.3-1.8zM27.7 93.2c-18.1 7-27.7 13.7-27.7 18.8c0 2.6 28.4 35.8 62.8 73.8c34.7 38 62.7 69.7 62.7 70.4c0 .8-28.4 32.5-62.8 70.5c-34.7 38.3-62.3 71.9-61.9 74.8c1.8 10 32.1 22.6 54.2 22.6c35.8-.4 43.9-6.7 119.6-89.7c38-41.7 68.9-77.1 68.9-78.3c0-1.4-30.6-36.1-68.2-77.4c-49.1-53.5-73.1-77.5-84.5-82.7c-17.3-8.5-45.3-9.9-63.1-2.9zm394 2.6c-10.8 5.5-37.7 32.1-84.2 83c-37.6 41.3-68.3 76-68.3 77.4c0 1.5 31 36.6 69 78.3c75.6 83 83.7 89.2 119.5 89.7c22.2 0 52.4-12.6 54.3-22.6c.3-3.3-27.3-36.5-62-74.5c-34.3-37.9-62.7-70.1-62.7-70.8c0-.7 28.4-32.8 62.7-70.8c34.7-37.9 62.3-71.2 62-74.1c-1.8-9.6-29.2-20.7-52.8-22.2c-17-.8-25.8 .8-37.6 6.7zm-252 266.3c-45.7 50.6-83.3 93.3-84.1 95.2c-.8 1.5 4.4 6.7 11.1 11.4c8.8 6.7 18.4 9.2 36.5 10c33.6 2.2 46.1-5.6 88.5-53.5c18.5-20.7 34.3-38 34.7-38c.4 0 16.3 17.3 35.1 38.3c43.2 48 54.6 55 88.2 53.2c18.1-.8 27.7-3.3 36.5-10c6.7-4.8 11.8-9.9 11.1-11.4c-1.8-5.5-169-188.2-171.9-187.7c-1.5 0-39.8 41.7-85.6 92.6z"],
    "pwa": [1359,512,[],"e008","M1000 419.8l39.2-99.2h113.3L1098.8 170 1166 0 1358.6 511.4h-142l-32.9-91.6zM878.8 511.4 1085 0H948.3L807.3 330.5 707 0H601.9l-107.7 330.5-76-150.6-68.7 211.7 69.8 119.8h134.5L651.2 215 744 511.4zM130.1 335.8h84.2a248.8 248.8 0 0 0 68.1-8.5l21.8-67.1 60.9-187.5a147.5 147.5 0 0 0 -15.9-20.8Q302.4 0 212.1 0H.4V511.4H130.1zm111.4-218.2q18.3 18.4 18.3 49.3t-16.1 49.4q-17.6 20.3-65 20.3H130.1V99.2h49q44.1 0 62.4 18.4z"],
    "pycharm": [512,512,[],"e005","M167.1 142.2V141c0-21.3-14.2-32-37.9-32H93.6v65.2h36.8c23.7 0 36.7-14.2 36.7-32zM0 0v512h512V0H0zm47.4 67.6h85.3c51 0 81.8 29.6 81.8 73.5v1.2c0 48.6-37.9 74.7-85.4 74.7H93.6v62.8H47.4V67.6zM240.6 448h-192v-32h192v32zm102-165.9c-62.8 1.2-109-47.4-109-107.9c0-60.4 45-110.2 110.2-110.2c40.3 0 64 13 84.1 33.2l-29.6 34.3c-16.6-15.4-33.2-23.7-54.5-23.7c-35.4 0-61.3 29.3-61.6 65.8c.3 36.5 25 65.8 61.6 65.8c23.7 0 39.1-9.5 55.7-24.9l29.7 29.6c-21.3 23.7-46.2 38-86.5 38z"],
    "vscode": [512,512,[],"e003","M4.9 178.5s-12.5-9.1 2.5-21.2l34.9-31.5s10-10.6 20.5-1.4L384.5 370.7V488.7s-.2 18.5-23.7 16.5L4.9 178.5zm82.9 76.1L4.9 330.9s-8.5 6.4 0 17.9l38.5 35.4s9.1 9.9 22.7-1.4l87.9-67.4L87.8 254.6zm145.6 .6L385.5 137.9l-1-117.4s-6.5-25.6-28.2-12.3L153.9 194.4l79.4 60.9zM360.8 505.4c8.8 9.1 19.5 6.1 19.5 6.1l118.5-59c15.2-10.5 13-23.4 13-23.4V76.5c0-15.5-15.7-20.9-15.7-20.9L393.5 5.6c-22.4-14-37.1 2.5-37.1 2.5s18.9-13.8 28.2 12.3l0 466.1c0 3.2-.7 6.4-2 9.2c-2.7 5.5-8.6 10.7-22.7 8.5l1 1.1z"]

  };
  var prefixes$1 = [null    ,'fak',
    ,'fa-kit'

  ];
  bunker(() => {
    for (const prefix of prefixes$1) {
      if (!prefix) continue;
      defineIcons(prefix, icons);
    }
  });

}());
