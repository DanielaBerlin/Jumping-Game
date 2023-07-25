const hero = document.querySelector(".hero");
const heroPikachu = document.querySelector(".hero-pikachu");
const pokeball = document.querySelector(".pokeball")

const jump = () => {
    if (hero.classList != "animate") {
        hero.classList.add("animate");
        pokeball.style.animation = "move 1s infinite linear";
    }
    setTimeout(() => {
        hero.classList.remove("animate");
    }, 300)
};
document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        jump();
    }
});

let isAlive = setInterval(() => {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let pokeballLeft = parseInt(window.getComputedStyle(pokeball).getPropertyValue("left"));
    if (pokeballLeft < 40 && pokeballLeft > 20 && heroTop >= 130) {
        pokeball.style.animation = "none";
        alert("Game over 😵. Press spacebar to start");
    }
}, 10);