let todayTemp = 0;
let defaultTemperature = 22; //Adjust this temperature if the recommended clothing doesn't suit the weather well
let tempOffset = 0;
const neutrals = ["black", "gray", "white", "blue"];
let colourCombinations = [//well coordinated colors
  ["blue", "white"],
  ["gray", "black"],
  ["brown", "white"],
  ["brown", "maroon"],
  ["gray", "pink"],
  ["black", "white"],
  ["darkblue", "brown"],
  ["lightblue", "mustard"],
  ["gray", "beige", "lightblue"],
  ["green", "brown"],
  ["blue", "brown", "beige"],
  ["lightgray", "red"],
  ["blue", "brown", "maroon"],
  ["red", "blue", "mustard"],
  ["mustard", "brown", "blue"],
  ["red", "brown"],
  ["mustard", "blue", "rust"],
  ["purple", "blue", "mustard"],
  ['blue','green'],
  ['green','tan'],
  ['orange','grey'],
  ['orange','black']
];
let badCombinations = [
  ['red','green'],
  ['red','orange'],
  ['green','orange'],
  ['brown','black'],
  ['purple','yellow']
]
let wearing = {//the outfit object
  head: null,
  neck: null,
  torsoShirt: null,
  torsoJacket: null,
  torsoJumper: null,
  legs: null,
  feet: null,
  bodyTemperature: 0,
  setTemperature: function (temp) {
    this.bodyTemperature = temp;
  },
  removeItem: function (item) {
    if (this[item] != null) document.getElementById(this[item].picItem).style.display = "none";
    if (this[item] != null) document.getElementById(item).innerHTML = '';
    if (this[item] != null) document.getElementById(item + 'Col').style.display = "none";
    this[item] = null;
  },
  loadItems: function(user_data) {
    this.bodyTemperature = user_data.bodyTemperature;
    let loopItems = ['head','neck','torsoShirt','torsoJacket','torsoJumper','legs','feet']
    for (i in loopItems) {
      this[loopItems[i]]=user_data[loopItems[i]];
      if (this[loopItems[i]] != null) {
        document.getElementById(this[loopItems[i]].picItem).style.display = "block";
        document.getElementById(loopItems[i] + 'Col').style.display = "block";
        document.getElementById(this[loopItems[i]].picItem).style.fill = this[loopItems[i]].cssColour;
        document.getElementById(loopItems[i]).innerHTML = this[[loopItems[i]]].name;
      }
    }
 
  },
  resetAll: function() {
    this.setTemperature(todayTemp)
    let parts = document.getElementsByClassName("bodyPart");
    parts = Array.from(parts)
    parts.map((element) => { element.innerHTML=''})
    let loopItems = ['head','neck','torsoShirt','torsoJacket','torsoJumper','legs','feet']
    for (i in loopItems) {
      if (this[loopItems[i]] != null) {
        document.getElementById(this[loopItems[i]].picItem).style.display = "none";
        document.getElementById(loopItems[i] + 'Col').style.display = "none";
      }
      this[loopItems[i]]=null;
    }
  },
  fashionRules: function(tempItem) {
    let mood = document.getElementById("mood").value
    if ((!tempItem.tags.includes(mood)) || 
    (tempItem.tags.includes("Singlet") && todayTemp < 38) || 
    (tempItem.tags.includes("Thongs") && todayTemp < 30) || 
    (tempItem.tags.includes("Shorts") && todayTemp < 28) || 
    (this.torsoShirt != null && tempItem.tags.includes("Tie") && !this.torsoShirt.tags.includes("Shirt")) || 
    (this.legs != null && tempItem.tags.includes("Thongs") && !this.legs.tags.includes("Shorts"))) {
      return true
    } else {
      return false
    }
  },
  createNeutralBase: function () {
    let iterator = 0;
    console.log(this.bodyTemperature - defaultTemperature)
    while (
      iterator < 100 &&
      (this.torsoShirt == null ||
        this.legs == null ||
        this.feet == null ||
        this.bodyTemperature - defaultTemperature > 6 ||
        this.bodyTemperature - defaultTemperature < -8)
    ) {
      let selectedItem = null;
      while (selectedItem == null) {
        let tempItem =clothing[Math.floor(Math.random(clothing.length) * clothing.length)];
        if (this.fashionRules(tempItem)) {
          tempItem = null;
        }
        
        if (tempItem != null) {
        if (this.bodyTemperature <= defaultTemperature) {//cold
          if (tempItem.tempEffect >= 0 && tempItem.tempEffect <= ((defaultTemperature-this.bodyTemperature))) {
            if (neutrals.includes(tempItem.colour)) {
              selectedItem = tempItem;
            }
          }
        } else {//hot
          if (tempItem.tempEffect <= 0 && tempItem.tempEffect >= ((defaultTemperature-this.bodyTemperature))) {
              if (neutrals.includes(tempItem.colour)) {
                selectedItem = tempItem;
              }       
          }
          }
        }
      }
      if (this[selectedItem.bodyPart] != null) {
        this.setTemperature(this.bodyTemperature -= this[selectedItem.bodyPart].tempEffect);
        if (this[selectedItem.bodyPart].hasOwnProperty("picItem")) {
          document.getElementById(this[selectedItem.bodyPart].picItem).style.display = "none";
          document.getElementById(selectedItem.bodyPart + 'Col').style.display = "none";
        }
      }
      this[selectedItem.bodyPart] = selectedItem;
      if (selectedItem.hasOwnProperty("picItem")) {
        document.getElementById(selectedItem.picItem).style.display = "block";
        document.getElementById(selectedItem.bodyPart + 'Col').style.display = "block";
        document.getElementById(selectedItem.picItem).style.fill = selectedItem.cssColour;
      }
      this.updateGUI(selectedItem.bodyPart,selectedItem.name)
      this.setTemperature(this.bodyTemperature + selectedItem.tempEffect);
      iterator++;
    }
    document.getElementById('tempOutfit').innerHTML = 'Outfit Temperature: ' + this.bodyTemperature + '\u00B0c';
  },
  addColour: function (compareItem, replaceItem) {
    let iterator = 0;
    let selectedItem = null;
    while (selectedItem == null) {
      let tempItem =
        clothing[Math.floor(Math.random(clothing.length) * clothing.length)];
        if (this.fashionRules(tempItem)) {
          tempItem = null;
        }
      if (this.bodyTemperature <= defaultTemperature) {//cold
        if (tempItem != null) {
          if (this[tempItem.bodyPart] != null) {
            if (tempItem.tempEffect == this[tempItem.bodyPart].tempEffect) {
              if (compareItem == null) {
                if (replaceItem == null) {
                selectedItem = tempItem;
                } else {
                  if (tempItem.bodyPart == replaceItem && tempItem.colour != this[replaceItem].colour) {
                    selectedItem = tempItem;
                  }
                }
              } else {
          if (!neutrals.includes(tempItem.colour)) {
            if (compareItem == null) {
              if (replaceItem == null) {
                selectedItem = tempItem;
                } else {
                  if (tempItem.bodyPart == replaceItem && tempItem.colour != this[replaceItem].colour) {
                    selectedItem = tempItem;
                  }
                }
            } else {
              for (let i = 0; i < colourCombinations.length; i++) {
                if (
                  colourCombinations[i].includes(compareItem.colour) == true &&
                  colourCombinations[i].includes(tempItem.colour) &&
                  tempItem.colour != compareItem.colour
                ) {
                  if (replaceItem == null) {
                    selectedItem = tempItem;
                    } else {
                      if (tempItem.bodyPart == replaceItem && tempItem.colour != this[replaceItem].colour) {
                        selectedItem = tempItem;
                      }
                    }
                  break;
                }
              }
            }
          }
        }
            }
          }
        }
      } else {//hot
        if (tempItem != null) {
          if (this[tempItem.bodyPart] != null) {
            if (tempItem.tempEffect == this[tempItem.bodyPart].tempEffect) {
            if (!neutrals.includes(tempItem.colour)) {
              if (compareItem == null) {
                if (replaceItem == null) {
                  selectedItem = tempItem;
                  } else {
                    if (tempItem.bodyPart == replaceItem && tempItem.colour != this[replaceItem].colour) {
                      selectedItem = tempItem;
                    }
                  }
              } else {
                for (let i = 0; i < colourCombinations.length; i++) {
                  if (
                    colourCombinations[i].includes(compareItem.colour) ==
                      true &&
                    colourCombinations[i].includes(tempItem.colour)
                  ) {
                    for (let j = 0; j < badCombinations.length; j++) {
                      if (
                        badCombinations[j].includes(compareItem.colour) ==
                        false &&
                        !badCombinations[j].includes(tempItem.colour)
                      ) {
                        if (replaceItem == null) {
                          selectedItem = tempItem;
                          } else {
                            if (tempItem.bodyPart == replaceItem && tempItem.colour != this[replaceItem].colour) {
                              selectedItem = tempItem;
                            }
                          }
                        break;
                      }
                    }
                  }
                }
              }
            }       
            }
          }
        }
      }
      iterator++;
      if (iterator > 100) {
        break;
      }
    }
    if (selectedItem!= null) {
      if (this[selectedItem.bodyPart] != null) {
      if (this[selectedItem.bodyPart].hasOwnProperty("picItem")) {
        document.getElementById(this[selectedItem.bodyPart].picItem).style.display = "none";
        document.getElementById(selectedItem.bodyPart + 'Col').style.display = "none";
      }
    }
    this[selectedItem.bodyPart] = selectedItem;
    if (selectedItem.hasOwnProperty("picItem")) {
      document.getElementById(selectedItem.picItem).style.display = "block";
      document.getElementById(selectedItem.bodyPart + 'Col').style.display = "block";
      document.getElementById(selectedItem.picItem).style.fill = selectedItem.cssColour;
    }
    this.updateGUI(selectedItem.bodyPart,selectedItem.name)
    this.setTemperature(this.bodyTemperature + selectedItem.tempEffect);
    return selectedItem;
  }},
  updateGUI : function (bodyPart,clothing) {
    document.getElementById(bodyPart).innerHTML = clothing;
    document.getElementById(bodyPart).style.display = "block";
    var user = {
      head: wearing.head,
      neck: wearing.neck,
      torsoShirt: wearing.torsoShirt,
      torsoJacket: wearing.torsoJacket,
      torsoJumper: wearing.torsoJumper,
      legs: wearing.legs,
      feet: wearing.feet,
      bodyTemperature: wearing.bodyTemperature,
    };
    window.localStorage.setItem('user_data', JSON.stringify(user));
  }
};

const getTemp = async () => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-35.066666&longitude=138.8500&daily=temperature_2m_max&timezone=Australia%2FAdelaide"
  );
  const tempMax = await response.json(); //extract JSON from the http response
  const response2 = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-35.066666&longitude=138.8500&daily=temperature_2m_min&timezone=Australia%2FAdelaide"
  );
  const tempMin = await response2.json(); //extract JSON from the http response
  const month = new Date().getMonth();
  switch (month) {//if summer then use temp high, if winter use temp low else use average
    case (0):
      case(1):
      case(2):
      case(11):
    todayTemp = tempMax.daily.temperature_2m_max[1]+tempOffset
    break;
      case(5):
      case(6):
      case(7):
      todayTemp = tempMin.daily.temperature_2m_min[1]+tempOffset
    break;
    default:
    todayTemp = Math.round(
      (tempMax.daily.temperature_2m_max[1] + tempMin.daily.temperature_2m_min[1]) / 2
    )+tempOffset;
    break;
  }
  //todayTemp=31
  document.getElementById(
    "temp"
  ).innerHTML = `Today's Temperature: ${todayTemp}\u00B0c`;
  document.getElementById(
    "targetTemp"
  ).innerHTML = `Offset: ${tempOffset}\u00B0c`;
  wearing.setTemperature(todayTemp);

  let user = JSON.parse(window.localStorage.getItem('user_data'));
    if (user != null) {
      wearing.loadItems(user);
    } else {
  wearing.createNeutralBase();
  wearing.addColour(wearing.addColour());
    }
};
function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

getTemp();

function swapItem(item) {
  wearing.addColour(null,item)
}

function tooHot() {
  todayTemp += 1;
  tempOffset += 1;
  document.getElementById(
    "targetTemp"
  ).innerHTML = `Offset: ${tempOffset}\u00B0c`;
  wearing.setTemperature(todayTemp);
  console.log(todayTemp)
}

function tooCold() {
  todayTemp -= 1;
  tempOffset -= 1;
  document.getElementById(
    "targetTemp"
  ).innerHTML = `Offset: ${tempOffset}\u00B0c`;
  wearing.setTemperature(todayTemp);
  console.log(todayTemp)
}

function removeItem(item) {
  wearing.removeItem(item)
}

function generateOutfit() {
  wearing.resetAll();
  wearing.createNeutralBase();
  wearing.addColour(wearing.addColour());
};

function addSpice() {
  wearing.addColour(wearing.addColour());
};

