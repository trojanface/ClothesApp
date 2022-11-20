let torso = {
  tshirt: [
    {
      name: "White T-Shirt",
      colour: "background-color:white;",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 0,
    },
    {
      name: "Black Long Sleeve T-Shirt",
      colour: "background-color:black;",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 2,
    },
  ],
  shirt: [
    {
      name: "White Shirt w Red Dots",
      colour: "background-color:white;",
      tags: ["Formal", "Neat Casual", "Trendy"],
      tempEffect: 0,
    },
  ],
  jumper: [
    {
      name: "Grey Hoodie",
      colour: "background-color:grey;",
      tags: ["Casual"],
      tempEffect: 4,
    },
  ],
  jacket: [
    {
      name: "Black Leather Jacket",
      colour: "background-color:black;",
      tags: ["Casual", "Neat Casual", "Bold"],
      tempEffect: 6,
    },
  ],
};
let legs = {
  shorts: [
    {
      name: "Stone Shorts",
      colour: "background-color:grey;",
      tags: ["Casual"],
      tempEffect: -4,
    },
  ],
  pants: [
    {
      name: "Black Chinos",
      colour: "background-color:black;",
      tags: ["Casual", "Neat Casual", "Bold", "Trendy"],
      tempEffect: 0,
    },
  ],
};
let feet = {
  shoes: [
    {
      name: "Converse Sneakers",
      colour: "background-color:black;",
      tags: ["Casual", "Trendy"],
      tempEffect: 0,
    },
  ],
};
let neck = {
  scarves: [
    {
      name: "Black/Grey Scarf",
      colour: "background-color:black;",
      tags: ["Casual", "Neat Casual", "Bold", "Trendy"],
      tempEffect: 4,
    },
  ],
  neckties: [
    {
      name: "Blue Tie with Balloons",
      colour: "background-color:navy-blue;",
      tags: ["Formal", "Trendy"],
      tempEffect: 0,
    },
  ],
};
let head = {
  glasses: [
    {
      name: "Ray Bans",
      colour: "background-color:black;",
      tags: ["Casual", "Formal", "Neat Casual", "Bold", "Trendy"],
      tempEffect: 0,
    },
  ],
  hats: [
    {
      name: "Orange Beanie",
      colour: "background-color:orange;",
      tags: ["Casual", "Bold", "Trendy"],
      tempEffect: 5,
    },
  ],
};
const getTemp = async () => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=35.0732&longitude=138.8576&daily=temperature_2m_max&timezone=GMT"
  );
  const tempMax = await response.json(); //extract JSON from the http response
  const response2 = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=35.0732&longitude=138.8576&daily=temperature_2m_min&timezone=GMT"
  );
  const tempMin = await response2.json(); //extract JSON from the http response
  const todayTemp = Math.round(
    (getAverage(tempMax.daily.temperature_2m_max) + getAverage(tempMin.daily.temperature_2m_min)) / 2
  );
  document.getElementById("temp").innerHTML = `Today's Temperature: ${todayTemp}\u00B0c`;
};
function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

getTemp();



//pair varying shades of complimentary colours opposite on colour wheel or different shades of the same color for a BOLD look
//let patterns by the focus and keep everything else muted
//for subdued choose a cool/warm color and then other neutral colors
//analogous color are three shades that sit next to each other with a primary or secondary color in the middle

//navy+white,grey+black,green+khaki,brown+cream,brown+burgundy,grey+pink,black+white,mustard for boldness,
