let clothing = [
  {
    name: "White T-Shirt",
    colour: "white",
    cssColour: "background-color:white;",
    tags: ["Casual", "Neat Casual", "Trendy"],
    tempEffect: 0,
    bodyPart: "torsoShirt",
  },
  {
    name: "Black Long Sleeve T-Shirt",
    colour: "black",
    cssColour: "background-color:black;",
    tags: ["Casual", "Neat Casual", "Trendy"],
    tempEffect: 2,
    bodyPart: "torsoShirt",
  },
  {
    name: "White Shirt w Red Dots",
    colour: "white",
    cssColour: "background-color:white;",
    tags: ["Formal", "Neat Casual", "Trendy"],
    tempEffect: 0,
    bodyPart: "torsoShirt",
  },
  {
    name: "Grey Hoodie",
    colour: "grey",
    cssColour: "background-color:grey;",
    tags: ["Casual"],
    tempEffect: 4,
    bodyPart: "torsoJumper",
  },
  {
    name: "Black Leather Jacket",
    colour: "black",
    cssColour: "background-color:black;",
    tags: ["Casual", "Neat Casual", "Bold"],
    tempEffect: 6,
    bodyPart: "torsoJacket",
  },
  {
    name: "Stone Shorts",
    colour: "grey",
    cssColour: "background-color:grey;",
    tags: ["Casual", "Shorts"],
    tempEffect: -4,
    bodyPart: "legs",
  },
  {
    name: "Black Chinos",
    colour: "black",
    cssColour: "background-color:black;",
    tags: ["Casual", "Neat Casual", "Bold", "Trendy"],
    tempEffect: 0,
    bodyPart: "legs",
  },
  {
    name: "Converse Sneakers",
    colour: "black",
    cssColour: "background-color:black;",
    tags: ["Casual", "Trendy", "Low Rise"],
    tempEffect: 0,
    bodyPart: "feet",
  },
  {
    name: "Black/Grey Scarf",
    colour: "black",
    cssColour: "background-color:black;",
    tags: ["Casual", "Neat Casual", "Bold", "Trendy"],
    tempEffect: 4,
    bodyPart: "neck",
  },
  {
    name: "Blue Tie with Balloons",
    colour: "blue",
    cssColour: "background-color:navy-blue;",
    tags: ["Formal", "Trendy"],
    tempEffect: 0,
    bodyPart: "neck",
  },
  {
    name: "Ray Bans",
    cssColour: "background-color:black;",
    colour: "black",
    tags: ["Casual", "Formal", "Neat Casual", "Bold", "Trendy"],
    tempEffect: 0,
    bodyPart: "head",
  },
  {
    name: "Orange Beanie",
    colour: "orange",
    cssColour: "background-color:orange;",
    tags: ["Casual", "Bold", "Trendy"],
    tempEffect: 5,
    bodyPart: "head",
  },
];
let todayTemp = 0;
let defaultTemperature = 22;
let wearing = {
  head: null,
  neck: null,
  torsoShirt: null,
  torsoJacket: null,
  torsoJumper: null,
  legs: null,
  feet: null,
  bodyTemperature : 0,
  setTemperature: function(temp) {
    this.bodyTemperature = temp
  },
  selectFirstItem: function () {
    let iterator = 0;
    while (iterator < 100 && (this.torsoShirt == null || this.legs == null || this.feet == null || (((this.bodyTemperature - defaultTemperature) > 4) || (this.bodyTemperature - defaultTemperature) < -4))){
      let selectedItem = null;
    while (selectedItem == null) {
      let tempItem =
        clothing[Math.floor(Math.random(clothing.length) * clothing.length)];
      if (this.bodyTemperature <= defaultTemperature) {
        if (tempItem.tempEffect >= 0) {
          selectedItem = tempItem;
        }
      } else {
        if (tempItem.tempEffect <= 0) {
          if (!tempItem.tags.includes("Shorts")) {
          selectedItem = tempItem;
          }
        }
      }
    }
    this[selectedItem.bodyPart] = selectedItem;
    this.setTemperature(this.bodyTemperature+selectedItem.tempEffect)
    console.log(this);
    iterator++
  } 
  
},
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
  todayTemp = Math.round(
    (getAverage(tempMax.daily.temperature_2m_max) +
      getAverage(tempMin.daily.temperature_2m_min)) /
      2
  );
  document.getElementById(
    "temp"
  ).innerHTML = `Today's Temperature: ${todayTemp}\u00B0c`;
  wearing.setTemperature(todayTemp);
  wearing.selectFirstItem();
  // let allClothing = [
  //   ...torso.tshirt,
  //   ...torso.shirt,
  //   ...torso.jacket,
  //   ...torso.jumper,
  //   ...legs.pants,
  //   ...legs.shorts,
  //   ...feet.shoes,
  //   ...neck.neckties,
  //   ...neck.scarves,
  //   ...head.glasses,
  //   head.hats,
  // ];
  //console.log(allClothing[Math.floor(Math.random(allClothing.length) * allClothing.length)].name)

  // let firstItem = null;
  //   while (firstItem == null) {
  //     let randomItem =
  //       allClothing[
  //         Math.floor(Math.random(allClothing.length) * allClothing.length)
  //       ];
  //     if (todayTemp < 18) {//cold
  //       if (randomItem.tempEffect > 0) {
  //         firstItem = randomItem;
  //       }
  //     }
  //     if (todayTemp >= 18 && todayTemp <= 24) {//comfortable
  //       if (randomItem.tempEffect == 0) {
  //         firstItem = randomItem;
  //       }
  //     }
  //     if (todayTemp > 24) {//warm
  //       if (randomItem.tempEffect < 0) {
  //         firstItem = randomItem;
  //       }
  //     }
  //   }
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

//randomly select a body part
//randomly select a clothing item
//randomly select a body part
//match clothing item to other clothing item
