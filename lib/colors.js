let colors =
  "0" -
  "1" -
  "2" -
  "3" -
  "4" -
  "5" -
  "6" -
  "7" - 
  "8" -
  "9" -
  "A" -
  "B" -
  "C" -
  "D" -
  "E" -
  "F";

let teal = "#7ADBBC";
let lgreen = "#B9E87E";
let orange = "#E7896D";
let yellow = "#FDF380";
let lavender = "#B58EFD";
let pink = "#EF99C3";
let vlgrey = "#E8EBF7";

var l = {
  teal: "#7ADBBC",
  lgreen: "#B9E87E",
  orange: "#E7896D",
  yellow: "#FDF380",
  lavender: "#B58EFD",
  pink: "#EF99C3",
  vlgrey: "#E8EBF7",
  lgrey: "#AA9F9E",
  guiwhite: "#FFFFFF",
  black: "#484848",
  blue: "#3CA4CB",
  green: "#8ABC3F",
  red: "#E03E41",
  gold: "#EFC74B",
  purple: "#8D6ADF",
  magenta: "#CC669C",
  grey: "#A7A7AF",
  dgrey: "#726F6F",
  white: "#DBDBDB",
  guiblack: "#000000",
  paletteSize: 10,
  border: 0.65
};
var T = "";
function e(b) {
  switch (b) {
    case 0:
      return l.teal;
    case 1:
      return l.lgreen;
    case 2:
      return l.orange;
    case 3:
      return l.yellow;
    case 4:
      return l.lavender;
    case 5:
      return l.pink;
    case 6:
      return l.vlgrey;
    case 7:
      return l.lgrey;
    case 8:
      return l.guiwhite;
    case 9:
      return l.black;
    case 10:
      return l.blue;
    case 11:
      return l.green;
    case 12:
      return l.red;
    case 13:
      return l.gold;
    case 14:
      return l.purple;
    case 15:
      return l.magenta;
    case 16:
      return l.grey;
    case 17:
      return l.dgrey;
    case 18:
      return l.white;
    case 19:
      return l.guiblack;
    case 20:
      return 150 > Date.now() % 300 ? l.blue : l.red;
    case 21:
      return 150 > Date.now() % 300 ? l.blue : l.grey;
    case 22:
      return 150 > Date.now() % 300 ? l.grey : l.blue;
    case 23:
      return 150 > Date.now() % 300 ? l.red : l.grey;
    case 24:
      return 150 > Date.now() % 300 ? l.grey : l.red;
    case 30:
      return "#d21fff";
    case 31:
      return "#226ef6";
    case 32:
      return "#ff1000";
    case 33:
      return "#ff9000";
    case 34:
      return "#00e00b";
    case 35:
      return "#ffd300";
    case 36: //rainbow baby yeah
      return T(
        [l.red, l.orange, l.yellow, l.green, l.blue, l.purple][
          Math.floor((Date.now() / 200) % 6)
        ],
        [l.orange, l.yellow, l.green, l.blue, l.purple, l.red][
          Math.floor((Date.now() / 200) % 6)
        ],
        (Date.now() / 200) % 1
      );
    case 37: // rainbow baby bro
      return T(
        [l.black, l.white][Math.floor((Date.now() / 200) % 6)],
        [l.white, l.black][Math.floor((Date.now() / 200) % 6)],
        (Date.now() / 200) % 1
      );
    case 38: // dev woomy scren IDK
      return T(
        [
          l.red,
          "#000000",
          l.orange,
          "#000000",
          l.yellow,
          "#000000",
          l.green,
          "#000000",
          l.blue,
          "#000000",
          l.purple,
          "#000000"
        ][Math.floor((Date.now() / 200) % 12)],
        [
          "#000000",
          l.orange,
          "#000000",
          l.yellow,
          "#000000",
          l.green,
          "#000000",
          l.blue,
          "#000000",
          l.purple,
          "#000000",
          l.red
        ][Math.floor((Date.now() / 200) % 12)],
        (Date.now() / 200) % 1
      );
    case 39:
      return "#c0c0c0";
    case 40:
      return "#edc07c";
    default:
      return "#ff0000";
    case 41:
      return "#edc03c";
    case 42:
      return T(
        [
          "#e796ff",
          "#000000"
        ][Math.floor((Date.now() / 200) % 2)],
        [
          "#000000",
          "#e796ff"//I added my new color
        ][Math.floor((Date.now() / 200) % 2)],
        (Date.now() / 200) % 1
      );
  }
}