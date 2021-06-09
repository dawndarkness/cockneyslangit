const cockney = {
  "advice": "lump of ice",
  "baby": "basin of gravy",
  "bank": "rattle and clank",
  "bar": "near and far",
  "bike": "clever Mike",
  "broke": "coals and coke",
  "cake": "give and take",
  "chair": "lion's lair",
  "policeofficer": "bottle and stopper",
  "egg": "borrow and beg",
  "flowers": "early hours",
  "free": "yet to be",
  "hide": "duck and dive",
  "kid": "dustbin lid",
  "kids": "dustbin lids",
  "married": "cut and carried",
  "milk": "satin and silk",
  "money": "bees and honey",
  "morning": "day's a-dawning",
  "noise": "box of toys",
  "pissed": "scotch mist",
  "poor": "on the floor",
  "soup": "loop the loop",
  "rain": "pleasure and pain",
  "stairs": "apples and pears",
  "treadmill": "can't keep still",
  "water": "fisherman's daughter",
}

function cockneySlangIt(string) {
  let punctuationCheck = false;
  const symbols = '/(?!\n|\r\n)[^a-zA-Z0-9]+/.'
  for (let symbol of symbols) {
    if (string[string.length-1].endsWith(symbol)){
      punctuationCheck = true;
    }
  }
  if (typeof string !== "string") {
    throw new Error(
      "Invalid input. Please input a string."
    );
  } else {
    const wordArray = string.split(" ");
    let temp = [];
    let result;
    for (let element of wordArray) {
    temp.push(findWord(element));
    }
    result = temp.join(' ');
    if (punctuationCheck === true) {
      result += string[string.length-1];
    }
    return result;
  }
}

function findWord(word) {
  let lowerCaseWord = removeSymbols(word).toLowerCase();
  if (cockney.hasOwnProperty(lowerCaseWord)) {
    word = lowerCaseWord.replace(lowerCaseWord, cockney[lowerCaseWord]);
    return word;
  }
  return word;
}

function removeSymbols(word) {
  return word.replace(/(?!\n|\r\n)[^a-zA-Z0-9]+/, '');
}

module.exports = { cockneySlangIt };