export const defaultTreasures = [
  { type: 1, img: "/firstTreasure.png", quantity: 10 },
  { type: 2, img: "/secondTreasure.png", quantity: 20 },
  { type: 3, img: "/thirdTreasure.png", quantity: 30 },
];

export const defaultCoordinates = Array.from(
  { length: 100 },
  (_, i) => i + 1
).map((item) => ({
  coordinate: item,
  typeOfTreasure: null,
}));

export const defaultTools = [
  { name: "Hugh hand", img: "/hughHand.png", selected: null },
  { name: "Lock", img: "/lock.png", selected: null },
  { name: "Key", img: "/key.png", selected: null },
  { name: "Guard", img: "/guard.png", selected: null },
  { name: "Radar", img: "/radar.png", selected: null },
  { name: "Skip", img: "/skip.png", selected: null },
  { name: "Boom", img: "/boom.png", selected: null },
  { name: "Double", img: "/double.png", selected: null },
];
