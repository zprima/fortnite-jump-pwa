const namedPlaces = [
  "Junk Junction",
  "Haunted Hills",
  "Pleasant Park",
  "Lazy Links",
  "Risky Reels",
  "Wailing Woods",
  "Tomato Temple",
  "Lonely Lodge",
  "Retail Row",
  "Dusty Divot",
  "Loot Lake",
  "Tilted Towers",
  "Snoby Shores",
  "Viking Village",
  "Greasy Grove",
  "Shifty Shafts",
  "Salty Springs",
  "Fatal Fields",
  "Paradise Palms",
  "Lucky Landing",
  "Flush Factory"
];

document.getElementById("btn-jumper").addEventListener('click', function () {
  const placeToLand = namedPlaces[Math.floor(Math.random() * namedPlaces.length)];
  document.getElementById("place-to-land").textContent = placeToLand;
});

navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function (registration) {
  console.log('Excellent, registered with scope: ', registration.scope);
});
