document.addEventListener('DOMContentLoaded', () => {
    const zombieList = document.querySelector('.zombies');

    for (let i = 0; i < zombies.length; i++) {
        const zombie = document.createElement('div');

        zombie.classList.add('zombie');

        if (zombies[i].type === ZOMBIE_TYPE.SMALL) {
            zombie.classList.add('zombie--small');
        } else if (zombies[i].type === ZOMBIE_TYPE.MAD) {
            zombie.classList.add('zombie--mad');
        } else if (zombies[i].type === ZOMBIE_TYPE.STRONG) {
            zombie.classList.add('zombie--strong');
        }

        zombie.addEventListener('click', function () {
            if (!zombie.classList.contains('zombie--dead')) {
                zombie.classList.value = 'zombie zombie--dead';
            }
        });

        zombieList.appendChild(zombie);
    }
});
