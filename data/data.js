const displayAd = "Display Ad";
const displayAdColor = "#131a3f";
const miniGame = "Mini Game";
const miniGameColor = "#013811";
const pencilDrawing = "Pencil Drawing";
const pencilDrawingColor = "#252525";
const webGl = "Web GL";
const webGlColor = "#60134d";
const installationArt = "Installation Art";
const installationArtColor = "#440101";

const data = [
  {
    id: 1,
    type: displayAd,
    name: "Fitbit: Christmas 2020",
    slug: "fitbit_christmas20",
    thumb: "fitbit_christmas20.jpg",
    color: displayAdColor,
    src: "./iframes/fitbit_christmas20",
    size: {},
    text: "",
  },
  {
    id: 2,
    type: displayAd,
    name: "Fitbit: Sense",
    slug: "fitbit_sense",
    thumb: "fitbit_sense.jpg",
    color: displayAdColor,
    src: "./iframes/fitbit_sense",
    size: {},
    text: "",
  },
  {
    id: 3,
    type: displayAd,
    name: "Fitbit: Back to School",
    slug: "fitbit_backtoschool",
    thumb: "fitbit_backtoschool.jpg",
    color: displayAdColor,
    src: "./iframes/fitbit_backtoschool",
    size: {},
    text: "",
  },
  {
    id: 4,
    type: displayAd,
    name: "Oracle",
    slug: "oracle",
    thumb: "oracle.jpg",
    color: displayAdColor,
    src: "./iframes/oracle",
    size: {},
    text: "",
  },
  {
    id: 5,
    type: displayAd,
    name: "Facebook",
    slug: "facebook",
    thumb: "facebook.jpg",
    color: displayAdColor,
    src: "./iframes/facebook",
    size: {},
    text: "",
  },
  {
    id: 6,
    type: displayAd,
    name: "Fifa19",
    slug: "fifa19",
    thumb: "fifa19.jpg",
    color: displayAdColor,
    src: "./iframes/fifa19",
    size: {},
    text: "",
  },
  {
    id: 7,
    type: displayAd,
    name: "EE",
    slug: "ee",
    thumb: "ee.jpg",
    color: displayAdColor,
    src: "./iframes/ee",
    size: {},
    text: "",
  },
  {
    id: 8,
    type: displayAd,
    name: "BT Business",
    slug: "btb",
    thumb: "btb.jpg",
    color: displayAdColor,
    src: "./iframes/btb",
    size: {},
    text: "",
  },
  {
    id: 9,
    type: displayAd,
    name: "Sky Box Sets",
    slug: "sky",
    thumb: "sky.jpg",
    color: displayAdColor,
    src: "./iframes/sky",
    size: {},
    text: "",
  },
  {
    id: 10,
    type: displayAd,
    name: "British Gas",
    slug: "british_gas",
    thumb: "british_gas.jpg",
    src: "./iframes/british_gas",
    color: displayAdColor,
    size: { width: 960, height: 378 },
    text: "",
  },
  {
    id: 11,
    type: miniGame,
    name: "Tusker",
    slug: "tusker",
    thumb: "tusker.jpg",
    color: miniGameColor,
    src: "./iframes/tusker",
    size: { width: 1366, height: 911 },
    text:
      "This is game commissioned by Tusker, a car benefit company. 50 clues lie hidden in the picture, each suggests a car brand. Click and enter the answer to win.",
  },
  {
    id: 12,
    type: miniGame,
    name: "Organix",
    slug: "organix",
    thumb: "organix.jpg",
    color: miniGameColor,
    src: "./iframes/organix",
    size: { width: 1000, height: 800 },
    text:
      "Control the bag to catch the nutritious peas and corns. Avoid the evil sugar.",
  },
  {
    id: 13,
    type: miniGame,
    name: "Phantom Football",
    slug: "phantom_football",
    thumb: "phantom_football.jpg",
    color: miniGameColor,
    src: "./iframes/phantom_football",
    size: { width: 298, height: 248 },
    text:
      "A new take on the classic Pong game. Control the goal keeper with the left and right keys.",
  },
  {
    id: 14,
    type: webGl,
    name: "Spotlight Casino",
    slug: "spotlight_casino",
    thumb: "spotlight_casino.jpg",
    color: webGlColor,
    src: "./iframes/spotlight_casino",
    size: { width: 1000, height: 800 },
    text:
      "This WebGL project is part of the website for Spotlight Casino. It tells the story of Keith Taft, a professional con man and the four wearable gadgets he invented to cheat in casinos in the 1980's. Each gadget rotates in 3D and can be spun by dragging the mouse. Click on the hotspots to know more about each gadgets.",
  },
  {
    id: 15,
    type: webGl,
    name: "Snowfall",
    slug: "snowfall",
    thumb: "snowfall.jpg",
    color: webGlColor,
    src: "./iframes/snowfall",
    size: { width: 1000, height: 800 },
    text:
      "This is a particle system generated in WebGL using Three.js. The 5000 particles of snow fall freely under gravity. To make it look more natural, I have had the gravity randomised by Perlin noise, which is a combination of eight wave curves, each of which has double the frequency and half the amplitude than the previous curve.",
  },
  {
    id: 16,
    type: pencilDrawing,
    name: "Adrian the Bodybuilder",
    slug: "adrian",
    thumb: "adrian.jpg",
    color: pencilDrawingColor,
    src: "./assets/drawings/adrian.jpg",
    size: { width: 750, height: 500 },
    text:
      "I don’t only programme, I draw too! Meet my ex-colleague Adrian, a talented filmmaker and hairy bodybuilder. This is for his leaving card. It was drawn with two types of pencils, a 4B to achieve the extra dark areas and a mechanical pencil for the extra fine details.",
  },
  {
    id: 17,
    type: pencilDrawing,
    name: "Ronan the Groom",
    slug: "ronan",
    thumb: "ronan.jpg",
    color: pencilDrawingColor,
    src: "./assets/drawings/ronan.jpg",
    size: { width: 750, height: 500 },
    text:
      "My good friend Ronan is going to tie the knot. This portrait is the gift of his big day. He is an Irishman so he is supposed to be wearing an Irish kilt. However, I ran out of time before the wedding so I have only managed his face and shoulder.",
  },
  {
    id: 18,
    type: installationArt,
    name: "A Touch of Me",
    slug: "a_touch_of_me",
    thumb: "a_touch_of_me.jpg",
    color: installationArtColor,
    src:
      "https://player.vimeo.com/video/62381952?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    size: { width: 640, height: 360 },
    text:
      "This is a competition to design the bottle for L’Artisan Parfumeur’s new emotion-themed perfume. My solution to the brief is inspired by the sense of touch. It makes use of a simple but rather unexplored technology. An integrated circuit is built in in the bottle with touch sensitive ink extension to the surface of the bottle. Touching the ink will make the perfume name glow in the dark. This project has won a Notable in the Core77 Design Awards, Korea.",
  },
  {
    id: 19,
    type: installationArt,
    name: "Heartbeat in a Bottle",
    slug: "heartbeat_in_a_bottle",
    thumb: "heartbeat_in_a_bottle.jpg",
    color: installationArtColor,
    src:
      "https://player.vimeo.com/video/57176402?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    size: { width: 656, height: 360 },
    text:
      "This is another solution to L’Artisan Parfumeur’s competition to design the bottle for their new emotion-themed perfume. The graphics projected onto the bottle is a representation of my real time emotion. A pulse sensor is connected to an Arduino and an Max MSP uses the data to generate the graphics.",
  },
  {
    id: 20,
    type: displayAd,
    name: "Philadelphia",
    slug: "philadelphia",
    thumb: "philadelphia.jpg",
    color: displayAdColor,
    src: "./iframes/philadelphia",
    size: {},
    text: "",
  },
];

export default data;