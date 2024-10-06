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
    "pve": [512,512,[],"e001","M105.2 38.9c-23.2 11.8-23.2 13.7-1.5 38c120.6 134.3 149.4 166 151.6 166c3 .3 170.1-182.3 171.9-187.7c.8-1.5-4.4-6.7-11.1-11.4c-8.8-6.7-18.4-9.2-36.5-10c-33.9-2.2-45.7 5.2-87.8 52.4c-19.2 21.3-35.4 39.1-35.4 39.1c-.3 0-16.2-17.3-35-38.3s-40.6-42.1-47.9-46.2c-17-9.6-51.7-10.3-68.3-1.8zM27.7 93.2c-18.1 7-27.7 13.7-27.7 18.8c0 2.6 28.4 35.8 62.8 73.8c34.7 38 62.7 69.7 62.7 70.4c0 .8-28.4 32.5-62.8 70.5c-34.7 38.3-62.3 71.9-61.9 74.8c1.8 10 32.1 22.6 54.2 22.6c35.8-.4 43.9-6.7 119.6-89.7c38-41.7 68.9-77.1 68.9-78.3c0-1.4-30.6-36.1-68.2-77.4c-49.1-53.5-73.1-77.5-84.5-82.7c-17.3-8.5-45.3-9.9-63.1-2.9zm394 2.6c-10.8 5.5-37.7 32.1-84.2 83c-37.6 41.3-68.3 76-68.3 77.4c0 1.5 31 36.6 69 78.3c75.6 83 83.7 89.2 119.5 89.7c22.2 0 52.4-12.6 54.3-22.6c.3-3.3-27.3-36.5-62-74.5c-34.3-37.9-62.7-70.1-62.7-70.8c0-.7 28.4-32.8 62.7-70.8c34.7-37.9 62.3-71.2 62-74.1c-1.8-9.6-29.2-20.7-52.8-22.2c-17-.8-25.8 .8-37.6 6.7zm-252 266.3c-45.7 50.6-83.3 93.3-84.1 95.2c-.8 1.5 4.4 6.7 11.1 11.4c8.8 6.7 18.4 9.2 36.5 10c33.6 2.2 46.1-5.6 88.5-53.5c18.5-20.7 34.3-38 34.7-38c.4 0 16.3 17.3 35.1 38.3c43.2 48 54.6 55 88.2 53.2c18.1-.8 27.7-3.3 36.5-10c6.7-4.8 11.8-9.9 11.1-11.4c-1.8-5.5-169-188.2-171.9-187.7c-1.5 0-39.8 41.7-85.6 92.6z"]

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
