import { say, STEGOSAURUS } from 'https://cdn.skypack.dev/cowsay';

const stegoContainer = document.getElementById("stego")

const buttons = document.querySelectorAll('.text-btn')

buttons.forEach(btn => {
    btn.onclick = () => 
        stegoContainer.textContent = say({
            text: btn.getAttribute('data-say'),
            cow: STEGOSAURUS
        })
});