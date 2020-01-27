//src/Data/data.js

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const TOPBAR_DATA = 'Svelte-dashboard';

const LEFTBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#dashboard", label: "Dashboard" },
  { id: 3, url: "#table", label: "Table" },
  { id: 4, url: "#charts", label: "Charts" },
  { id: 5, url: "#settings", label: "Settings" }
];

const CONTENT_TL_DATA [
  { series: 1, x: 0, value: getRandomInt(100) },
  { series: 1, x: 1, value: getRandomInt(100) },
  { series: 1, x: 2, value: getRandomInt(100) },
  { series: 1, x: 3, value: getRandomInt(100) },
  { series: 1, x: 4, value: getRandomInt(100) },
  { series: 1, x: 5, value: getRandomInt(100) },
  { series: 1, x: 6, value: getRandomInt(100) },
  { series: 1, x: 7, value: getRandomInt(100) },
  { series: 1, x: 8, value: getRandomInt(100) },
  { series: 1, x: 9, value: getRandomInt(100) }
]

const CONTENT_TR_DATA [
  { series: 2, x: 0, value: getRandomInt(100) },
  { series: 2, x: 1, value: getRandomInt(100) },
  { series: 2, x: 2, value: getRandomInt(100) },
  { series: 2, x: 3, value: getRandomInt(100) },
  { series: 2, x: 4, value: getRandomInt(100) },
  { series: 2, x: 5, value: getRandomInt(100) },
  { series: 2, x: 6, value: getRandomInt(100) },
  { series: 2, x: 7, value: getRandomInt(100) },
  { series: 2, x: 8, value: getRandomInt(100) },
  { series: 2, x: 9, value: getRandomInt(100) }
]

const CONTENT_BL_DATA [
  { series: 3, x: 0, value: getRandomInt(100) },
  { series: 3, x: 1, value: getRandomInt(100) },
  { series: 3, x: 2, value: getRandomInt(100) },
  { series: 3, x: 3, value: getRandomInt(100) },
  { series: 3, x: 4, value: getRandomInt(100) },
  { series: 3, x: 5, value: getRandomInt(100) },
  { series: 3, x: 6, value: getRandomInt(100) },
  { series: 3, x: 7, value: getRandomInt(100) },
  { series: 3, x: 8, value: getRandomInt(100) },
  { series: 3, x: 9, value: getRandomInt(100) }
]

const CONTENT_TR_DATA [
  { series: 4, x: 0, value: getRandomInt(100) },
  { series: 4, x: 1, value: getRandomInt(100) },
  { series: 4, x: 2, value: getRandomInt(100) },
  { series: 4, x: 3, value: getRandomInt(100) },
  { series: 4, x: 4, value: getRandomInt(100) },
  { series: 4, x: 5, value: getRandomInt(100) },
  { series: 4, x: 6, value: getRandomInt(100) },
  { series: 4, x: 7, value: getRandomInt(100) },
  { series: 4, x: 8, value: getRandomInt(100) },
  { series: 4, x: 9, value: getRandomInt(100) }
]
