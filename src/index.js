const fs = require("fs").promises;
const getTheme = require("./theme");

const darkDimmedTheme = getTheme({
  theme: "dark_dimmed",
  name: "GH+C Dark Dimmed",
})

const roseTheme = getTheme({
  theme: "rose",
  name: "GH+C Rose Pine",
})

const catTheme = getTheme({
  theme: "cat",
  name: "GH+C Catppuccin",
})


const idxTheme = getTheme({
  theme: "idx",
  name: "GH+C Project IDX",
})

// Write theme

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/ghc-dark-dimmed.json", JSON.stringify(darkDimmedTheme, null, 2)),
    fs.writeFile("./themes/ghc-rose.json", JSON.stringify(roseTheme, null, 2)),
    fs.writeFile("./themes/ghc-cat.json", JSON.stringify(catTheme, null, 2)),
    fs.writeFile("./themes/ghc-idx.json", JSON.stringify(idxTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
