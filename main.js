/* eslint-disable no-restricted-syntax */
const story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const overusedWords = ['really', 'very', 'basically'];

const unnecessaryWords = ['extremely', 'literally', 'actually'];

// count the total words in this paragraph
const storyWords = story.split(' ');
console.log(`There are ${storyWords.length} in this paragraph`);

// return a new array without the words defined in the 'unnecessaryWords' array
const betterWords = storyWords.filter(function (word) {
  return !unnecessaryWords.includes(word);
});

// count the amount of times each word found in the 'overUsedWords' is used in the paragraph
let reallyCounter = 0;
let veryCounter = 0;
let basicallyCounter = 0;

for (word of betterWords) {
  if (word === overusedWords[0]) {
    reallyCounter += 1;
  } else if (word === overusedWords[1]) {
    veryCounter += 1;
  } else if (word === overusedWords[2]) {
    basicallyCounter += 1;
  }
}
console.log(`The word "really" has been found ${reallyCounter} times`);
console.log(`The word "very" has been found ${veryCounter} times`);
console.log(`The word "basically" has been found ${basicallyCounter} times`);

// count the amount of sentences in the paragraph
const storyLetters = story.split('');
let sentences = 0;
storyLetters.forEach((item) => {
  if (item === '!' || item === '.') {
    sentences += 1;
  }
});
console.log(`There are ${sentences} in this paragraph`);

// logging the 'betterWords' array as a single string
console.log(betterWords.join(' '));
