var old = [
"",
""
];
var pool = [
"House of Cards",
"Homeland",
"True Detective",
"The Affair",
"Fargo",
"Girls",
"Orphan Black",
"The Walking Dead",
"Breaking Bad",
"12 Monkeys",
"Togetherness"
];

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

var numbers = new Array(pool.length);
for (var i = 0; i < numbers.length; i++) {
    numbers[i] = randomIntInc(0, pool.length-1);
}

console.log(pool[numbers[randomIntInc(0, pool.length-1)]]);