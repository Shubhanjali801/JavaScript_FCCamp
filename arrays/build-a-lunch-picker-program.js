// 1. create a lunches variable
const lunches = [];

// 2. create a function addLunchToEnd which take two args array and str
let addLunchToEnd = (arr, str) => {
    arr.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return arr;
}

// 3. create a function addLuchToStart which take two args array and str
let addLunchToStart = (arr, str) => {
    arr.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return arr;
}

// 4. create a function removeLastLunch which take one arg array
let removeLastLunch = (arr) => {
    if(arr.length > 0){
        let lastItem = arr.pop();
        console.log(`${lastItem} removed from the end of the lunch menu.`);
    }
    else console.log(`No lunches to remove.`);
    return arr;
}

// 5. create a function removeFirstLunch which take one arg array
let removeFirstLunch = (arr) => {
    if(arr.length > 0){
       let firstItem = arr.shift();
       console.log(`${firstItem} removed from the start of the lunch menu.`);

    } else {
        console.log(`No lunches to remove.`);
    }
    return arr;
}

// 6. create a function getRandomLunch which take one arg array
let getRandomLunch = (arr) => {
    if(arr.length > 0){
        let randomIndex = Math.floor(Math.random() * arr.length);
        console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
    } else {
        console.log(`No lunches available.`);
    }
}

// 7. create a functon showLunchMenu which take arg array
let showLunchMenu = (arr) => {
    if(arr.length > 0){
        console.log(`Menu items: ${arr.join(', ')}`);
    } else {
        console.log(`The menu is empty.`);
    }
}


addLunchToEnd(lunches, "Tacos");
addLunchToEnd(lunches, "Burger");
addLunchToStart(lunches, "Sushi");
addLunchToStart(lunches, "Pizza");
removeLastLunch(lunches);
removeFirstLunch(lunches);
showLunchMenu(lunches);
showLunchMenu(["Greens", "Corns", "Beans"]);

//https://www.freecodecamp.org/learn/javascript-v9/lab-lunch-picker-program/build-a-lunch-picker-program