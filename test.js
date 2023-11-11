const themes = require("./main").themes;
const jsonThemes = JSON.stringify(
  themes,
  (_, v) => (v === undefined ? null : v),
  2
);

console.log(jsonThemes);

if (jsonThemes.includes("null")) {
  throw Error(
    "Null property in theme. This is not intentional, check the json above to see what's wrong."
  );
}
