const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const lightHighContrastColors = require("@primer/primitives/dist/json/colors/light_high_contrast.json");
const lightColorblindColors = require("@primer/primitives/dist/json/colors/light_colorblind.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const darkHighContrastColors = require("@primer/primitives/dist/json/colors/dark_high_contrast.json");
const darkColorblindColors = require("@primer/primitives/dist/json/colors/dark_colorblind.json");
const dimmedColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");

function getColors(theme) {

  switch(theme) {
    case "light":

      // Temp override until Primitives are updated
      lightColors.success.emphasis = "#1f883d";
      lightColors.btn.primary.bg = lightColors.success.emphasis;
      lightColors.btn.primary.hoverBg = lightColors.scale.green[5];
      lightColors.fg.default = "#1f2328";
      lightColors.fg.muted = "#656d76";

      return lightColors;
    case "light_high_contrast":
      return lightHighContrastColors;
    case "light_colorblind":
        return lightColorblindColors;
    case "dark":
      darkColors.canvas = {
        default: "#1d1b27",
        overlay: "#1d1b27",
        inset: "#191724",
        subtle: "#191724",
      }
      darkColors.border = {
        default: "#191724",
        muted: "#1b1926",
        subtle: "#26233a",
      } 
      darkColors.accent.fg = "#ffb3d8";
      darkColors.accent.emphasis = "#6e558f";
      return darkColors;
    case "dark_high_contrast":
      return darkHighContrastColors;
    case "dark_colorblind":
      return darkColorblindColors;
    case "dark_dimmed":
      dimmedColors.canvas = {
        default: "#1c2127",
        overlay: "#1c2127",
        inset: "#181d23",
        subtle: "#181d23",
      }
      dimmedColors.border = {
        default: "#181d23",
        muted: "#1a1f25",
        subtle: "#24292f",
      }
      return dimmedColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = {
  getColors,
};
