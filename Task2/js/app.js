document.addEventListener('DOMContentLoaded', () => {
    const zombieList = document.querySelector('.zombies');

    if (Array.isArray(zombies)){
        for (let i = 0; i < zombies.length; i++) {
            renderZombie(zombies[i], i);
        }
    }

    function renderZombie(item) {
        const zombie = document.createElement('div');

        zombie.classList.add('zombie');

        if (item.type === ZOMBIE_TYPE.SMALL) {
            zombie.classList.add('zombie--small');
        } else if (item.type === ZOMBIE_TYPE.MAD) {
            zombie.classList.add('zombie--mad');
        } else if (item.type === ZOMBIE_TYPE.STRONG) {
            zombie.classList.add('zombie--strong');
        }

        zombieList.appendChild(zombie);

        zombie.addEventListener('click', function (event) {
            if (!event.target.classList.contains('zombie--dead')) {
                event.target.classList.value = 'zombie zombie--dead';
            }
        })
    }
});
