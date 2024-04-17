const dimmedColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");
const roseColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");
const catColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");
const idxColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");

function getColors(theme) {

  switch(theme) {
    case "dark_dimmed":
      dimmedColors.canvas = {
        default: "#22272d",
        overlay: "#22272d",
        inset: "#181d23",
        subtle: "#181d23",
      }
      dimmedColors.border = {
        default: "#181d23",
        muted: "#22272d",
        subtle: "#24292f",
      }
      return dimmedColors;
    case "rose":
      roseColors.canvas = {
        default: "#211f2b",
        overlay: "#211f2b",
        inset: "#191724",
        subtle: "#191724",
      }
      roseColors.border = {
        default: "#191724",
        muted: "#211f2b",
        subtle: "#6e6a86",
      } 
      roseColors.fg.default = "#e0def4"
      roseColors.accent.fg = "#9ccfd8";
      roseColors.accent.emphasis = "#eb6f92";
      return roseColors;
    case "cat":
      catColors.canvas = {
        default: "#1e2030",
        overlay: "#1e2030",
        inset: "#181926",
        subtle: "#181926",
      }
      catColors.border = {
        default: "#181926",
        muted: "#1e2030",
        subtle: "#8087a2",
      }
      catColors.fg.default = "#cad3f5"
      catColors.accent.fg = "#8aadf4";
      catColors.accent.emphasis = "#f0c6c6";
      return catColors;
    case "idx":
      idxColors.canvas = {
        default: "#171f2b",
        overlay: "#171f2b",
        inset: "#10151d",
        subtle: "#10151d",
      }
      idxColors.border = {
        default: "#171f2b",
        muted: "#171f2b",
        subtle: "#393552",
      }
      return idxColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = {
  getColors,
};
