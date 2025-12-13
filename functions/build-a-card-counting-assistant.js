let count = 0;
const cc = (card) => {
    if (card === 2 ||
        card === 3 ||
        card === 4 ||
        card === 5 ||
        card === 6) {
        count += 1;
    } else if (card === 7 ||
        card === 8 ||
        card === 9) {
        count += 0;
    } else if (card === 10 ||
        card === "J" ||
        card === "Q" ||
        card === "K" ||
        card === "A") {
        count -= 1;
    }

    if (count > 0) {
        return `${count}` + " Bet";
    } else if (count <= 0) {
        return `${count}` + " Hold";
    }
}

// https://www.freecodecamp.org/learn/javascript-v9/lab-counting-cards/lab-counting-cards