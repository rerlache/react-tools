const CELL_SIZE = "10vmin";
const CELL_GAP = "1.5vmin";
export const GRID_SIZE = 4;

export function setCSSVariables() {
  document.documentElement.style.setProperty("--grid-size", GRID_SIZE);
  document.documentElement.style.setProperty("--cell-size", CELL_SIZE);
  document.documentElement.style.setProperty("--cell-gap", CELL_GAP);
}
export function setTileLightness(value) {
  const backgroundLightness = 100 - Math.log2(value) * 9;
  const style = {
    "--background-lightness": `${backgroundLightness}%`,
    "--text-lightness": `${backgroundLightness <= 50 ? 90 : 10}%`,
  };
  return style;
}
