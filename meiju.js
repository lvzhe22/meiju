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
"Togetherness",
"Banshee",
"Bates Motel",
"Masters Of Sex",
"Ray Donovan",
"The Americans",
"Under The Dome",
"The Night Shift",
"Vikings",
"Marvel's Agents of S.H.I.E.L.D.",
"Daredevil",
"Da Vinci's Demons",
"Legends",
"Sleepy Hollow",
"Sense 8",
"You're The Worst"
];

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

var numbers = new Array(pool.length);
for (var i = 0; i < numbers.length; i++) {
    numbers[i] = randomIntInc(0, pool.length-1);
}

console.log(pool[numbers[randomIntInc(0, pool.length-1)]]);
