document.addEventListener('DOMContentLoaded', () => {
    ZOMBIE_TYPE.DEAD = 0;

    const zombieList = document.querySelector('.zombies');

    renderZombieList(zombies);

    function renderZombieList(units) {
        zombieList.innerHTML = '';

        for (let i = 0; i < units.length; i++) {
            renderZombie(units[i], i);
        }
    }

    function renderZombie(item, index) {
        const zombie = document.createElement('div');

        zombie.classList.add('zombie');

        if (item.type === ZOMBIE_TYPE.SMALL) {
            zombie.classList.add('zombie--small');
        } else if (item.type === ZOMBIE_TYPE.MAD) {
            zombie.classList.add('zombie--mad');
        } else if (item.type === ZOMBIE_TYPE.STRONG) {
            zombie.classList.add('zombie--strong');
        } else if (item.type === ZOMBIE_TYPE.DEAD) {
            zombie.classList.add('zombie--dead');
        }

        zombie.addEventListener('click', function (event) {
            if (item.type !== ZOMBIE_TYPE.DEAD) {
                zombies[index].type = 0;
                renderZombieList(zombies);
            }
        });

        zombieList.appendChild(zombie);
    }
});
