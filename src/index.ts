import "./style.css";
import { Application, Assets } from "pixi.js";
import { gameOptions } from "./gameConfig";
import Game from "./Game";

console.log(
    `%cPixiJS V7\nTypescript Boilerplate%c ${VERSION} %chttp://www.pixijs.com %c❤️`,
    "background: #ff66a1; color: #FFFFFF; padding: 2px 4px; border-radius: 2px; font-weight: bold;",
    "color: #D81B60; font-weight: bold;",
    "color: #C2185B; font-weight: bold; text-decoration: underline;",
    "color: #ff66a1;",
);

const app = new Application<HTMLCanvasElement>({
    backgroundColor: gameOptions.backgroundColor,
    width: gameOptions.width,
    height: gameOptions.height,
});

window.onload = async (): Promise<void> => {
    await loadGameAssets();

    document.body.appendChild(app.view);

    resizeCanvas();

    new Game(app);
};

async function loadGameAssets(): Promise<void> {
    const manifest = {
        bundles: [
            {
                name: "fonts",
                assets: [
                    {
                        name: "fonts",
                        srcs: "./assets/fonts/PixelFont.woff",
                    },
                ],
            },
            {
                name: "assets",
                assets: [
                    {
                        name: "assets",
                        srcs: "./assets/spritesheet.json",
                    },
                ],
            },
        ],
    };

    await Assets.init({ manifest });
    await Assets.loadBundle(["fonts", "assets"]);
}

function resizeCanvas(): void {
    const resize = () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        app.stage.scale.x = window.innerWidth / gameOptions.width;
        app.stage.scale.y = window.innerHeight / gameOptions.height;
    };

    resize();

    window.addEventListener("resize", resize);
}
