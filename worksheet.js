const characters = [{
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
/*
console.log("START");

Here we are going to use some array functions like =>
    1.Filter => it returns an array according to the given conditions.
    2.Map => it returns an array of same size according to given conditions.
    3.Reduce => it accumulates something into a variable and returns it.
    4.Sort => it sorts according to given condition.
    5.Every => it returns a boolean value if every element fullfils the given condition.
    6.Some => it returns a boolean value if only one element fullfils the given condition.

;
***FILTER***
1. Get characters with mass greater than 100

const greater100Characters = characters.filter(character => {
    return character.mass > 100;
});
console.log(greater100Characters);


2. Get characters with height less than 200

const shorterCharacters = characters.filter((character) => character.height < 200);
console.log(shorterCharacters);

3. Get all male characters
const maleCharacters = characters.filter(character => character.gender === 'male');
console.log(maleCharacters)

4. Get all female characters
const femaleCharacters = characters.filter(character => character.gender === 'female');
console.log(femaleCharacters) 

***MAP***
1. Get array of all names
const nameCharacters = characters.map(character => character.name);
console.log(nameCharacters);

2. Get array of all heights 
const characterHeights = characters.map(character => character.height);
console.log(characterHeights);

3. Get array of objects with just name and height properties
const smallerObject = characters.map(character => ({ name: character.name, height: character.height }));
console.log(smallerObject);

4. Get array of all first names
const firstNames = characters.map(character => character.name.split(" ")[0])
console.log(firstNames);

***REDUCE***
1. Get total mass of all characters
const totalMass = characters.reduce((acc, curr) => acc + curr.mass, 0);
console.log(totalMass);
2. Get total height of all characters
const totalHeight = characters.reduce((acc, curr) => acc + curr.height, 0);
console.log(totalHeight);
3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, curr) => {
    const color = curr.eye_color;
    if (acc[color]) {
        acc[color]++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {});
console.log(charactersByEyeColor);
4. Get total number of characters in all the character names
const nameLength = characters.reduce((acc, curr) => acc + curr.name.length, 0);
console.log(nameLength);

***SORT***
1. Sort by mass
const sortedMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortedMass);
2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height);
console.log(byHeight);
3. Sort by name
const byName = characters.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    return 1;
});
console.log(byName);
4. Sort by gender
const byGender = characters.sort((a, b) => {
    if (a.gender === "female") return 1;
    return -1;
});
console.log(byGender);

***EVERY***

1. Does every character have blue eyes?
const allBlueEye = characters.every((character) => character.eye_color === 'blue');
console.log(allBlueEye);
2. Does every character have mass more than 40?
const allMoreThan40Mass = characters.every((character) => character.mass > 40);
console.log(allMoreThan40Mass)

3. Is every character shorter than 200?
const allShorterThan200 = characters.every((character) => character.height < 200);
console.log(allShorterThan200);

4. Is every character male?
const allMale = characters.every((character) => character.gender === 'male');
console.log(allMale);

***SOME***
1. Is there at least one male character?
const oneMaleCharacter = characters.some((character) => character.gender === "male");
console.log(oneMaleCharacter);

2. Is there at least one character with blue eyes?
const oneBlueEye = characters.some(character => character.eye_color === "blue");
console.log(oneBlueEye);
3. Is there at least one character taller than 210?
const tallCharacter = characters.some((c) => c.height > 200);
console.log(tallCharacter);
4. Is there at least one character that has mass less than 50?
const smallCharacter = characters.some(e => e.mass < 50);
console.log(smallCharacter);
console.log("END")
*/