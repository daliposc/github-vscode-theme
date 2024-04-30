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
        default: "#22272d",
        muted: "#22272d",
        subtle: "#181d23",
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
        default: "#211f2b",
        muted: "#211f2b",
        subtle: "#191724",
      } 
      roseColors.fg.default = "#e0def4"
      roseColors.accent.fg = "#ea9a97";
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
        default: "#1e2030",
        muted: "#1e2030",
        subtle: "#181926",
      }
      catColors.neutral = {
        emphasis: "#494d64",
        muted: "#363a4f",
        subtle: "#24273a",
      }
      catColors.fg = {
        default: "#cad3f5",
        muted: "#6e738d",
        subtle: "#5b6078",
      }
      catColors.accent = {
        fg: "#f4b8e4",
        emphasis: "#6842ab",
      }
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
        subtle: "#10151d",
      }
      idxColors.accent.emphasis = "#7287fd";
      return idxColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = {
  getColors,
};
