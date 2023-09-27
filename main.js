// Based on https://github.com/primer/github-vscode-theme/blob/main/src/index.js
// And https://docs.insomnia.rest/insomnia/custom-themes

const getTheme = require("./theme");

const lightDefaultTheme = getTheme({
  theme: "light",
  name: "GitHub Light Default",
});

const lightHighContrastTheme = getTheme({
  theme: "light_high_contrast",
  name: "GitHub Light High Contrast",
});

const lightColorblindTheme = getTheme({
  theme: "light_colorblind",
  name: "GitHub Light Colorblind",
});

const darkDefaultTheme = getTheme({
  theme: "dark",
  name: "GitHub Dark Default",
});

const darkHighContrastTheme = getTheme({
  theme: "dark_high_contrast",
  name: "GitHub Dark High Contrast",
});

const darkColorblindTheme = getTheme({
  theme: "dark_colorblind",
  name: "GitHub Dark Colorblind",
});

const darkDimmedTheme = getTheme({
  theme: "dark_dimmed",
  name: "GitHub Dark Dimmed",
});

module.exports.themes = [
  lightDefaultTheme,
  lightHighContrastTheme,
  lightColorblindTheme,
  darkDefaultTheme,
  darkHighContrastTheme,
  darkColorblindTheme,
  darkDimmedTheme,
];
