import { TextStyle } from "pixi.js";

export const defaultTextStyle: TextStyle = new TextStyle({
    fontFamily: "PixelFont",
    fontSize: 24,
    fill: 0xffffff,
    align: "center",
});

export const defaultBigTextStyle: TextStyle = new TextStyle({
    fontFamily: "PixelFont",
    fontSize: 100,
    fill: 0xffffff,
    align: "center",
});
