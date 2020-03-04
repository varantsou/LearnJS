function Engine(container) {
    let currentZombieIndex = 0;

    this.start = () => {
        this.createZombie();
        this.handleChangeStatus();
    };

    this.createZombie = () => {
        let zombie;

        if (zombies[currentZombieIndex].type === ZOMBIE_TYPE.SMALL) {
            zombie = new ZombieSmall(zombies[currentZombieIndex].health, container, this.handleClick);
        } else if (zombies[currentZombieIndex].type === ZOMBIE_TYPE.MAD) {
            zombie = new ZombieMad(zombies[currentZombieIndex].health, container, this.handleClick);
        } else if (zombies[currentZombieIndex].type === ZOMBIE_TYPE.STRONG) {
            zombie = new ZombieStrong(zombies[currentZombieIndex].health, container, this.handleClick);
        }

        zombie.render();
    };

    this.handleClick = (status) => {
        if (currentZombieIndex < zombies.length - 1) {
            if (status === 'deleted') {
                currentZombieIndex++;
                this.handleChangeStatus();
                this.createZombie();
            }
        } else {
            const gameStatus = document.createElement('div');

            gameStatus.classList.add('game-status');
            gameStatus.innerText = 'Done';
            container.appendChild(gameStatus);
        }
    };

    this.handleChangeStatus = () => {
        const currentElement = document.querySelector('.zombies-status__current');
        const totalElement = document.querySelector('.zombies-status__total');

        currentElement.innerHTML = `${currentZombieIndex + 1}`;
        totalElement.innerHTML = `${zombies.length}`;
    }
}
