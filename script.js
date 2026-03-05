import { say, STEGOSAURUS } from 'https://cdn.skypack.dev/cowsay';

const stegoContainer = document.getElementById("stego")
const imgGridContainers = document.getElementsByClassName("img-grid")

const imgGrids = {
    "uncompressed-face": [
        ["rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)"],
        ["rgb(255,250,0)",   "rgb(0,0,0)",       "rgb(255,250,0)",   "rgb(0,0,0)",       "rgb(255,250,0)"],
        ["rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)"],
        ["rgb(255,250,0)",   "rgb(0,0,0)",       "rgb(0,0,0)",       "rgb(0,0,0)",       "rgb(255,250,0)"],
        ["rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)"]
    ],
    "compressed-face": [
        ["rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)"],
        ["rgb(255,250,0)",   "rgb(0,0,0)",       "rgb(255,250,0)",   "rgb(0,0,0)",       "rgb(255,250,0)"],
        ["rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)"],
        ["rgb(255,250,0)",   "rgb(0,0,0)",       "rgb(0,0,0)",       "rgb(0,0,0)",       "rgb(255,250,0)"],
        ["rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)",   "rgb(255,250,0)"]
    ]
}

const compressedFaceReps = [
    [5,0,0,0,0],
    [1,1,1,1,1],
    [5,0,0,0,0],
    [1,3,0,0,1],
    [5,0,0,0,0],
]

for (let imgGrid of imgGridContainers) {
    const pixels = imgGrids[imgGrid.id];
    for (let i = 0; i < pixels.length; i++) {
        for (let j = 0; j < pixels[i].length; j++) {
            const pix = pixels[i][j];
            const reps = imgGrid.id === "compressed-face" ? compressedFaceReps[i][j]: 1; //TODO: this is such a bad approach
            const pixelDiv = document.createElement("div");
            pixelDiv.style = `background-color: ${pix}; color: ${pix === "rgb(0,0,0)" ? "white" : "black"}`;
            pixelDiv.classList.add("pixel");
            const pixelDivText = document.createElement("p");
            pixelDiv.appendChild(pixelDivText);
            if (reps > 0) {
                if (reps > 1) {
                    pixelDivText.textContent = `${reps} x ` + pix;
                } else {
                    pixelDivText.textContent = pix;
                }
            } else {
                pixelDiv.textContent = "";
            }
            imgGrid.appendChild(pixelDiv);
        }
    }
}

const buttons = document.querySelectorAll('.text-btn')

buttons.forEach(btn => {
    btn.onclick = () => 
        stegoContainer.textContent = say({
            text: btn.getAttribute('data-say'),
            cow: STEGOSAURUS
        })
});