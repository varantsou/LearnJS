function Zombie(className, maxHit, container, onClick) {
    this.health = maxHit;
    let zombieHPStatus;
    let zombie;

    this.render = () => {
        zombie = document.createElement('div');
        zombie.classList.add('zombie');
        zombie.classList.add(className);
        zombie.addEventListener('click', this.hit);

        const zombieIcon = document.createElement('div');
        zombieIcon.classList.add('zombie__icon');

        const zombieHP = document.createElement('div');
        zombieHP.classList.add('zombie__hp');
        zombieHPStatus = document.createElement('div');
        zombieHPStatus.classList.add('zombie__hp-status');
        zombieHPStatus.style.width = `${Math.round(this.health / maxHit * 100)}%`;

        zombieHP.appendChild(zombieHPStatus);
        zombie.appendChild(zombieHP);
        zombie.appendChild(zombieIcon);
        container.appendChild(zombie);
    };

    this.updateHit = () => {
        if (this.health <= 0) {
            zombieHPStatus.style.width = '0%';
            zombie.classList.add('zombie--dead');

            setTimeout(function () {
                container.removeChild(zombie);
                onClick('deleted');
            }, 2000);
        } else {
            zombieHPStatus.style.width = `${Math.round(this.health / maxHit * 100)}%`;
        }
    };

    this.hit = () => {
        this.health -= HIT_DAMAGE;
        this.updateHit();
    }
}
