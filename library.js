//Add new clothes here.
const clothing = [
    {
      name: "Navy Wife Beater",
      colour: "navy",
      cssColour: "navy",
      tags: ["Casual","Singlet"],
      tempEffect: -2,
      bodyPart: "torsoShirt",
      picItem : "SINGLET"
    },
    {
      name: "Black Wife Beater",
      colour: "black",
      cssColour: "black",
      tags: ["Casual","Singlet"],
      tempEffect: -2,
      bodyPart: "torsoShirt",
      picItem : "SINGLET"
    },
    {
      name: "White Wife Beater",
      colour: "white",
      cssColour: "white",
      tags: ["Casual","Singlet"],
      tempEffect: -2,
      bodyPart: "torsoShirt",
      picItem : "SINGLET"
    },
    {
      name: "White T-Shirt",
      colour: "white",
      cssColour: "white",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "TSHIRT"
    },
    {
      name: "White Striped T-Shirt",
      colour: "white",
      cssColour: "white",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "TSHIRT"
    },
    {
      name: "Blue T-Shirt w Palm Trees",
      colour: "blue",
      cssColour: "blue",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "TSHIRT"
    },
    {
      name: "Black T-Shirt",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "TSHIRT"
    },
    {
      name: "Thin Black T-Shirt",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: -2,
      bodyPart: "torsoShirt",
      picItem : "TSHIRT"
    },
    {
      name: "Green T-Shirt",
      colour: "green",
      cssColour: "green",
      tags: ["Casual", "Trendy"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "TSHIRT"
    },
    {
      name: "Orange T-Shirt",
      colour: "orange",
      cssColour: "orange",
      tags: ["Casual", "Bold", "Trendy"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "TSHIRT"
    },
    {
      name: "Maroon T-Shirt",
      colour: "maroon",
      cssColour: "maroon",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "TSHIRT"
    },
    {
      name: "Grey T-Shirt",
      colour: "gray",
      cssColour: "grey",
      tags: ["Casual"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "TSHIRT"
    },
    {
      name: "Navy Polo",
      colour: "navy",
      cssColour: "navy",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 1,
      bodyPart: "torsoShirt",
      picItem : "POLO"
    },
    {
      name: "Black Long Sleeve T-Shirt",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 2,
      bodyPart: "torsoShirt",
      picItem : "LONGSLEEVE_SHIRT"
    },
    {
      name: "Green Long Sleeve T-Shirt",
      colour: "green",
      cssColour: "olive",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 2,
      bodyPart: "torsoShirt",
      picItem : "LONGSLEEVE_SHIRT"
    },
    {
      name: "White Shirt w Red Dots",
      colour: "white",
      cssColour: "white",
      tags: ["Formal", "Neat Casual", "Trendy","Shirt"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "SHIRT"
    },
    {
      name: "White Shirt",
      colour: "white",
      cssColour: "white",
      tags: ["Formal", "Neat Casual","Shirt"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "SHIRT"
    },
    {
      name: "Blue Shirt w Navy Trim",
      colour: "blue",
      cssColour: "lightblue",
      tags: ["Formal", "Neat Casual", "Trendy","Shirt"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "SHIRT"
    },
    {
      name: "Grey Hoodie",
      colour: "gray",
      cssColour: "darkgrey",
      tags: ["Casual"],
      tempEffect: 4,
      bodyPart: "torsoJumper",
      picItem : "HOODIE"
    },
    {
      name: "Thin Grey Hoodie",
      colour: "darkgray",
      cssColour: "lightgrey",
      tags: ["Casual"],
      tempEffect: 2,
      bodyPart: "torsoJumper",
      picItem : "HOODIE"
    },
    {
      name: "Burgundy Hoodie",
      colour: "red",
      cssColour: "burgundy",
      tags: ["Casual"],
      tempEffect: 4,
      bodyPart: "torsoJumper",
      picItem : "HOODIE"
    },
    {
      name: "Maroon Sweater",
      colour: "maroon",
      cssColour: "maroon",
      tags: ["Casual"],
      tempEffect: 3,
      bodyPart: "torsoJumper",
      picItem : "SWEATER"
    },
    {
      name: "Blue Sweater",
      colour: "blue",
      cssColour: "blue",
      tags: ["Casual"],
      tempEffect: 3,
      bodyPart: "torsoJumper",
      picItem : "SWEATER"
    },
    {
      name: "Green Sweater",
      colour: "green",
      cssColour: "darkgreen",
      tags: ["Casual"],
      tempEffect: 3,
      bodyPart: "torsoJumper",
      picItem : "SWEATER"
    },
    {
      name: "Black Hooded Vest",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 3,
      bodyPart: "torsoJumper",
      picItem : "HOODIEVEST"
    },
    {
      name: "Blue Paisley Shirt",
      colour: "blue",
      cssColour: "darkblue",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 0,
      bodyPart: "torsoShirt",
      picItem : "SHIRT"
    },
    {
      name: "Light Blue Short Sleeve Shirt",
      colour: "blue",
      cssColour: "lightblue",
      tags: ["Casual", "Neat Casual"],
      tempEffect: -1,
      bodyPart: "torsoShirt",
      picItem : "POLO"
    },
    {
      name: "Grey Coat",
      colour: "gray",
      cssColour: "darkgrey",
      tags: ["Neat Casual"],
      tempEffect: 4,
      bodyPart: "torsoJacket",
      picItem : "JACKET"
    },
    {
      name: "Mustard Jacket",
      colour: "mustard",
      cssColour: "darkorange",
      tags: ["Casual","Neat Casual"],
      tempEffect: 2,
      bodyPart: "torsoJacket",
      picItem : "JACKET"
    },
    {
      name: "Black Jacket",
      colour: "black",
      cssColour: "black",
      tags: ["Casual","Neat Casual"],
      tempEffect: 2,
      bodyPart: "torsoJacket",
      picItem : "JACKET"
    },
    {
      name: "Black Leather Jacket",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Neat Casual", "Bold"],
      tempEffect: 6,
      bodyPart: "torsoJacket",
      picItem : "JACKET"
    },
    {
      name: "Stone Shorts",
      colour: "gray",
      cssColour: "slategrey",
      tags: ["Casual", "Shorts"],
      tempEffect: -4,
      bodyPart: "legs",
      picItem : "SHORTS"
    },
    {
      name: "Striped Shorts",
      colour: "lightblue",
      cssColour: "paleblue",
      tags: ["Casual", "Shorts", "Trendy"],
      tempEffect: -4,
      bodyPart: "legs",
      picItem : "SHORTS"
    },
    {
      name: "Maroon Shorts",
      colour: "maroon",
      cssColour: "maroon",
      tags: ["Casual", "Shorts"],
      tempEffect: -4,
      bodyPart: "legs",
      picItem : "SHORTS"
    },
    {
      name: "Light Blue Shorts",
      colour: "lightblue",
      cssColour: "lightblue",
      tags: ["Casual", "Shorts"],
      tempEffect: -4,
      bodyPart: "legs",
      picItem : "SHORTS"
    },
    {
      name: "Blue Shorts",
      colour: "blue",
      cssColour: "blue",
      tags: ["Casual", "Shorts"],
      tempEffect: -4,
      bodyPart: "legs",
      picItem : "SHORTS"
    },
    {
      name: "Black Chinos",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Neat Casual", "Bold", "Trendy"],
      tempEffect: 0,
      bodyPart: "legs",
      picItem : "PANTS"
    },
    {
      name: "Black Slacks",
      colour: "black",
      cssColour: "black",
      tags: ["Formal"],
      tempEffect: 0,
      bodyPart: "legs",
      picItem : "PANTS"
    },
    {
      name: "Blue Slacks",
      colour: "blue",
      cssColour: "blue",
      tags: ["Formal"],
      tempEffect: 0,
      bodyPart: "legs",
      picItem : "PANTS"
    },
    {
      name: "Blue Jeans",
      colour: "blue",
      cssColour: "blue",
      tags: ["Casual", "Trendy"],
      tempEffect: 0,
      bodyPart: "legs",
      picItem : "PANTS"
    },
    {
      name: "Blue Chinos",
      colour: "blue",
      cssColour: "darkblue",
      tags: ["Casual", "Neat Casual", "Bold", "Trendy"],
      tempEffect: 0,
      bodyPart: "legs",
      picItem : "PANTS"
    },
    {
      name: "Olive Chinos",
      colour: "olive",
      cssColour: "olive",
      tags: ["Casual", "Bold", "Trendy"],
      tempEffect: 0,
      bodyPart: "legs",
      picItem : "PANTS"
    },
    {
      name: "Tan Chinos",
      colour: "tan",
      cssColour: "tan",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 0,
      bodyPart: "legs",
      picItem : "PANTS"
    },
    {
      name: "Converse Sneakers",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Trendy", "Low Rise"],
      tempEffect: 0,
      bodyPart: "feet",
      picItem : "LOWTOPS"
    },
    {
      name: "Black Thongs",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Thongs"],
      tempEffect: -4,
      bodyPart: "feet",
      picItem : "THONGS"
    },
    {
      name: "Blue Low Rise",
      colour: "blue",
      cssColour: "lightblue",
      tags: ["Casual", "Trendy", "Low Rise"],
      tempEffect: 0,
      bodyPart: "feet",
      picItem : "LOWTOPS"
    },
    {
      name: "Black Lace Ups",
      colour: "black",
      cssColour: "black",
      tags: ["Formal"],
      tempEffect: 0,
      bodyPart: "feet",
      picItem : "LOWTOPS"
    },
    {
      name: "Brown Boots",
      colour: "brown",
      cssColour: "saddlebrown",
      tags: ["Casual", "Trendy"],
      tempEffect: 0,
      bodyPart: "feet",
      picItem : "HIGHTOPS"
    },
    {
      name: "Black Hi Rise Sneakers",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Trendy", "High Rise"],
      tempEffect: 1,
      bodyPart: "feet",
      picItem : "HIGHTOPS"
    },
    {
      name: "Converse Hi Tops",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Trendy", "High Rise"],
      tempEffect: 0,
      bodyPart: "feet",
      picItem : "HIGHTOPS"
    },
    {
      name: "Black/Grey Scarf",
      colour: "black",
      cssColour: "black",
      tags: ["Casual", "Neat Casual", "Bold", "Trendy"],
      tempEffect: 4,
      bodyPart: "neck",
      picItem : "SCARF"
    },
    {
      name: "Striped Scarf",
      colour: "maroon",
      cssColour: "maroon",
      tags: ["Casual", "Neat Casual", "Trendy"],
      tempEffect: 4,
      bodyPart: "neck",
      picItem : "SCARF"
    },
    {
      name: "Blue Tie with Balloons",
      colour: "blue",
      cssColour: "navyblue",
      tags: ["Formal", "Trendy","Tie"],
      tempEffect: 0,
      bodyPart: "neck",
      picItem : "TIE"
    },
    {
      name: "Ray Bans",
      cssColour: "black",
      colour: "black",
      tags: ["Casual", "Formal", "Neat Casual", "Bold", "Trendy"],
      tempEffect: 0,
      bodyPart: "head",
      picItem : "GLASSES"
    },
    {
      name: "Orange Beanie",
      colour: "orange",
      cssColour: "orange",
      tags: ["Casual", "Bold", "Trendy"],
      tempEffect: 5,
      bodyPart: "head",
      picItem : "BEANIE"
    },
  ];
