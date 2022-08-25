const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 
'the', 'lazy', 'dog']

const checkNumber = (nums) => (nums >= 0)
nums.every(checkNumber)
console.log(checkNumber(nums));
const checkWords = (word) => word.length < 8
panagram.every(checkWords)
console.log(checkWords(panagram));

const filterArray = (nums) => nums < 4
const filterArrayNum = nums.filter(filterArrayNum)
console.log(filterArrayNum);
const filterWord = (words) => (words.length % 2 === 0)
const filterArrayWord = panagram.filter(filterWord)
console.log(filterArrayWord);

const dividebyFive = nums.find(nums => nums % 5 === 0)
console.log(dividebyFive);
const wordFive = (words) => (words.length > 5)
console.log(wordFive); 
const indexFirst = (nums) => (nums % 3 === 0);
console.log(nums.findIndex(indexFirst));
const indexWord = (words) => (words.length < 2)
console.log(words.findIndex(indexWord)); 

const newArray = nums.map(nums => nums * 100)
console.log(newArray);
const newArrayWords = panagram.map(words => words.toUpperCase());
console.log(newArrayWords);

const divideSeven = (nums) => nums % 7 === 0
console.log(nums.some(divideSeven)); 
const findLetter = (words) => words.includes("a")
console.log(panagram.some(findLetter)); 

const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]
  
    