// Based on https://github.com/primer/github-vscode-theme/blob/main/src/theme.js

const chroma = require("chroma-js");
const { getColors } = require("./colors");

// Choosing colors from primer/primitives
// There are multiple ways to define what color is used:

// 1. Global variable
//    e.g. "textLink.foreground": color.fg.default,
// 2. Color scale
//    e.g. "textLink.foreground": scale.blue[5],
// 3. Per theme. Useful when a certain theme needs an exception
//    e.g. "textLink.foreground": themes({ light: scale.blue[5], light_high_contrast: scale.blue[5], light_colorblind: scale.blue[5], dark: scale.blue[2], dark_high_contrast: scale.blue[3], dark_colorblind: scale.blue[2], dark_dimmed: scale.blue[3] }),

/**
 * @param {{theme: string, name: string, zen: boolean}} options
 * @returns {import('./types').PluginTheme}
 */
function getTheme({ theme, name, zen }) {
  const themes = (options) => options[theme]; // Usage: themes({ light: "lightblue", light_high_contrast: "lightblue", light_colorblind: "lightblue", dark: "darkblue", dark_high_contrast: "darkblue", dark_colorblind: "darkblue", dark_dimmed: "royalblue" })
  const rawColors = getColors(theme);
  const color = changeColorToHexAlphas(rawColors);
  const scale = color.scale; // Usage: scale.blue[6]

  const onlyDark = (color) => {
    return themes({
      dark: color,
      dark_high_contrast: color,
      dark_colorblind: color,
      dark_dimmed: color,
    });
  };

  const onlyHighContrast = (color) => {
    return themes({ light_high_contrast: color, dark_high_contrast: color });
  };

  const onlyDarkHighContrast = (color) => {
    return themes({ dark_high_contrast: color });
  };

  const lightDark = (light, dark) => {
    return themes({
      light: light,
      light_high_contrast: light,
      light_colorblind: light,
      dark: dark,
      dark_high_contrast: dark,
      dark_colorblind: dark,
      dark_dimmed: dark,
    });
  };

  const alpha = (color, alpha) => {
    return chroma(color).alpha(alpha).hex();
  };

  /**
   * @type {import('./types').ThemeBlock['background']}
   */
  const globalBackground = {
    // Primary background
    default: color.canvas.default,
    // POST request, 200 OK, parameter names
    success: color.success.fg,
    // PATCH request
    notice: color.attention.fg,
    // PUT request
    warning: color.severe.fg,
    // DELETE request
    danger: color.danger.fg,
    // accent (Dashboard link, GET request, SEND button, branch button, add plugin button)
    surprise: color.accent.fg,
    // OPTIONS AND HEAD request
    info: color.attention.fg,
  };

  /**
   * @type {import('./types').ThemeBlock['foreground']}
   */
  const globalForeground = {
    // Text used everywhere
    default: color.fg.default,
    // Text used over colored backgrounds
    success: color.scale.white,
    notice: color.scale.white,
    warning: color.scale.white,
    danger: color.scale.white,
    surprise: color.scale.white,
    info: color.scale.white,
  };

  /**
   * @type {import('./types').ThemeBlock['highlight']}
   */
  const globalHighlight = {
    // Header/action text color
    default: color.fg.default,
    // Inactive input background
    xxs: color.canvas.overlay,
    // Scrollbar background
    xs: "transparent",
    // Modal and badge outlines
    sm: "transparent",
    // Input and div outlines
    md: color.border.default,
    // Secondary button outline
    lg: color.border.default,
    // Line numbers
    xl: lightDark(scale.gray[4], scale.gray[4]),
  };

  /**
   * @type {import('./types').ThemeBlock['rawCss']}
   */
  const zenCss = `
    .grid-template-app-layout {
      grid-template-rows: 0 1fr 0;
    }
    .grid-template-app-layout > *:first-child,
    .grid-template-app-layout > *:last-child {
      display: none !important;
    }
  `;

  return {
    name: `github-${theme}${zen ? "-zen" : ""}`,
    displayName: name,

    theme: {
      rawCss: zen ? zenCss : "",
      background: globalBackground,
      foreground: globalForeground,
      highlight: globalHighlight,
      styles: {
        appHeader: {},
        dialog: {
          highlight: {
            ...globalHighlight,
            sm: color.border.default,
          },
        },
        dialogFooter: {},
        dialogHeader: {},
        dropdown: {},
        editor: {},
        link: {
          foreground: {
            ...globalForeground,
            default: color.accent.fg,
          },
        },
        overlay: {},
        pane: {
          // Code text colors
          background: {
            // Actual background
            // default: "red",
            // Properties
            success: lightDark(scale.green[6], scale.green[1]),
            // Strings
            notice: lightDark(scale.blue[6], scale.blue[1]),
            // warning: "red",
            // danger: "red",
            // Numbers, booleans, null, undefined
            surprise: lightDark(scale.blue[6], scale.blue[3]),
            // info: "red",
          },
        },
        paneHeader: {
          background: {
            ...globalBackground,
            default: color.canvas.inset,
          },
        },
        sidebar: {
          background: {
            ...globalBackground,
            default: color.canvas.inset,
          },
        },
        sidebarHeader: {},
        sidebarList: {},
        tooltip: {
          background: {
            ...globalBackground,
            default: color.canvas.overlay,
          },
          highlight: {
            ...globalHighlight,
            sm: color.border.default,
          },
        },
        // Backdrop for modals, dropdowns, etc.
        transparentOverlay: {},
      },
    },
  };
}

// Convert to hex
// VS Code doesn't support other formats like hsl, rgba etc.

function changeColorToHexAlphas(obj) {
  if (typeof obj === "object") {
    for (var keys in obj) {
      if (typeof obj[keys] === "object") {
        changeColorToHexAlphas(obj[keys]);
      } else {
        let keyValue = obj[keys];
        if (chroma.valid(keyValue)) {
          obj[keys] = chroma(keyValue).hex();
        }
      }
    }
  }
  return obj;
}

module.exports = getTheme;
