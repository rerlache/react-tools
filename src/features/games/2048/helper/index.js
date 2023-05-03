
import Nr2 from "../assets/2.gif";
import Nr4 from "../assets/4.gif";
import Nr8 from "../assets/8.gif";
import Nr16 from "../assets/16.gif";
import Nr32 from "../assets/32.gif";
import Nr64 from "../assets/64.gif";
import Nr128 from "../assets/128.gif";
import Nr256 from "../assets/256.gif";
import Nr512 from "../assets/512.gif";
import Nr1024 from "../assets/1024.gif";
import Nr2048 from "../assets/2048.gif";

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
export function UseCorrectGif(value) {
  let gif;
  switch (value) {
    case 2:
      gif = Nr2;
      break;
    case 4:
      gif = Nr4;
      break;
    case 8:
      gif = Nr8;
      break;
    case 16:
      gif = Nr16;
      break;
    case 32:
      gif = Nr32;
      break;
    case 64:
      gif = Nr64;
      break;
    case 128:
      gif = Nr128;
      break;
    case 256:
      gif = Nr256;
      break;
    case 512:
      gif = Nr512;
      break;
    case 1024:
      gif = Nr1024;
      break;
    case 2048:
      gif = Nr2048;
      break;
  }
  return gif
}