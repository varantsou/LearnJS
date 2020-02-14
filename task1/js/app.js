const statistics = {
    'total': 0,
    'strong': 0,
    'mad': 0,
    'small': 0,
    'dead': 0
};

for (let i = 0; i < zombiesData.length; i++) {
    if (zombiesData[i] !== undefined) {
        if (zombiesData[i] < 1 || +zombiesData[i] !== zombiesData[i]) {
            statistics.dead ++;
        } else if (zombiesData[i] >= 1 && zombiesData[i] < 11) {
            statistics.small ++;
        } else if (zombiesData[i] >= 11 && zombiesData[i] < 21) {
            statistics.mad ++;
        } else if (zombiesData[i] >= 21) {
            statistics.strong ++;
        }

        statistics.total ++;
    }
}

const totalElement = document.querySelector('.total-zombies');
const deadElement = document.querySelector('.dead-zombies');
const smallElement = document.querySelector('.small-zombies');
const madElement = document.querySelector('.mad-zombies');
const strongElement = document.querySelector('.strong-zombies');

console.log(totalElement.innerText, statistics.total);
console.log(deadElement.innerText, statistics.dead);
console.log(smallElement.innerText, statistics.small);
console.log(madElement.innerText, statistics.mad);
console.log(strongElement.innerText, statistics.strong);

totalElement.append(statistics.total);
deadElement.append(statistics.dead);
smallElement.append(statistics.small);
madElement.append(statistics.mad);
strongElement.append(statistics.strong);
