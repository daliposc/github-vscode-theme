const fs = require("fs").promises;
const getTheme = require("./theme");

const darkDimmedTheme = getTheme({
  theme: "dark_dimmed",
  name: "GitHub Dark Dimmed - Connor",
})

const darkDimmedRosePineTheme = getTheme({
  theme: "dark",
  name: "GitHub Dark Dimmed Rose Pine - Connor",
})

// Write theme

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/dark-dimmed.json", JSON.stringify(darkDimmedTheme, null, 2)),
    fs.writeFile("./themes/dark-dimmed-rose-pine.json", JSON.stringify(darkDimmedRosePineTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
