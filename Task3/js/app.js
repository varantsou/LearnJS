document.addEventListener('DOMContentLoaded', () => {
    const zombieList = document.querySelector('.zombies');

    const engine = new Engine(zombieList);
    engine.start();
});
