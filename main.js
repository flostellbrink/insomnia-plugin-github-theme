// Based on https://github.com/primer/github-vscode-theme/blob/main/src/index.js
// And https://docs.insomnia.rest/insomnia/custom-themes

const getTheme = require("./theme");

const lightDefaultTheme = getTheme({
  theme: "light",
  name: "GitHub Light Default",
  zen: false,
});

const lightDefaultZenTheme = getTheme({
  theme: "light",
  name: "GitHub Light Default Zen",
  zen: true,
});

const lightHighContrastTheme = getTheme({
  theme: "light_high_contrast",
  name: "GitHub Light High Contrast",
  zen: false,
});

const lightHighContrastZenTheme = getTheme({
  theme: "light_high_contrast",
  name: "GitHub Light High Contrast Zen",
  zen: true,
});

const lightColorblindTheme = getTheme({
  theme: "light_colorblind",
  name: "GitHub Light Colorblind",
  zen: false,
});

const lightColorblindZenTheme = getTheme({
  theme: "light_colorblind",
  name: "GitHub Light Colorblind Zen",
  zen: true,
});

const darkDefaultTheme = getTheme({
  theme: "dark",
  name: "GitHub Dark Default",
  zen: false,
});

const darkDefaultZenTheme = getTheme({
  theme: "dark",
  name: "GitHub Dark Default Zen",
  zen: true,
});

const darkHighContrastTheme = getTheme({
  theme: "dark_high_contrast",
  name: "GitHub Dark High Contrast",
  zen: false,
});

const darkHighContrastZenTheme = getTheme({
  theme: "dark_high_contrast",
  name: "GitHub Dark High Contrast Zen",
  zen: true,
});

const darkColorblindTheme = getTheme({
  theme: "dark_colorblind",
  name: "GitHub Dark Colorblind",
  zen: false,
});

const darkColorblindZenTheme = getTheme({
  theme: "dark_colorblind",
  name: "GitHub Dark Colorblind Zen",
  zen: true,
});

const darkDimmedTheme = getTheme({
  theme: "dark_dimmed",
  name: "GitHub Dark Dimmed",
  zen: false,
});

const darkDimmedZenTheme = getTheme({
  theme: "dark_dimmed",
  name: "GitHub Dark Dimmed Zen",
  zen: true,
});

module.exports.themes = [
  lightDefaultTheme,
  lightDefaultZenTheme,
  lightHighContrastTheme,
  lightHighContrastZenTheme,
  lightColorblindTheme,
  lightColorblindZenTheme,
  darkDefaultTheme,
  darkDefaultZenTheme,
  darkHighContrastTheme,
  darkHighContrastZenTheme,
  darkColorblindTheme,
  darkColorblindZenTheme,
  darkDimmedTheme,
  darkDimmedZenTheme,
];
