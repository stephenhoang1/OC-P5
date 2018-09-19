//Arrays containing words for quote

var adjective = [
  "able",
  "bad",
  "best",
  "better",
  "big",
  "certain",
  "clear",
  "different",
  "early",
  "easy",
  "economic",
  "federal",
  "free",
  "full",
  "good",
  "great",
  "hard",
  "high",
  "human",
  "important",
  "international",
  "large",
  "late",
  "little",
  "local",
  "long",
  "low",
  "major",
  "military",
  "national",
  "new",
  "old",
  "only",
  "other",
  "political",
  "possible",
  "public",
  "real",
  "recent",
  "right",
  "small",
  "social",
  "special",
  "strong",
  "sure",
  "true",
  "whole",
  "young"
]
var color = [
  "blue",
  "white",
  "yellow",
  "black",
  "red",
  "orange",
  "blue",
  "brown",
  "mauve",
  "pink",
  "purple",
  "green"
]
var noun = [
  'alligator','ant','bear','bee','bird','camel','cat','cheetah','chicken','chimpanzee','cow','crocodile','deer','dog','dolphin','duck','eagle','elephant','fish','fly','fox','frog','giraffe','goat','goldfish','hamster','hippopotamus','horse','kangaroo','kitten','lion','lobster','monkey','octopus','owl','panda','pig','puppy','rabbit','rat','scorpion','seal','shark','sheep','snail','snake','spider','squirrel','tiger','turtle','wolf','zebra'
]
var verb = [
  "asks",
  "begins",
  "calls",
  "comes",
  "feels",
  "finds",
  "gets",
  "gives",
  "goes",
  "hears",
  "helps",
  "keeps",
  "leaves",
  "likes",
  "lives",
  "looks",
  "makes",
  "moves",
  "plays",
  "puts",
  "runs",
  "sees",
  "shows",
  "starts",
  "takes",
  "talks",
  "thinks",
  "turns",
  "works"

]
var adverb = [
  "angrily",
  "anxiously",
  "awkwardly",
  "badly",
  "beautifully",
  "calmly",
  "carefully",
  "carelessly",
  "cautiously",
  "cheerfully",
  "clearly",
  "closely",
  "correctly",
  "deliberately",
  "eagerly",
  "easily",
  "enthusiastically",
  "fast",
  "fondly",
  "frankly",
  "frantically",
  "gently",
  "happily",
  "healthily",
  "hurriedly",
  "innocently",
  "inquisitively",
  "kindly",
  "loudly",
  "mysteriously",
  "naturally",
  "neatly",
  "nervously",
  "noisily",
  "obediently",
  "patiently",
  "perfectly",
  "politely",
  "powerfully",
  "quickly",
  "reluctantly",
  "repeatedly",
  "safely",
  "shyly",
  "silently",
  "slowly",
  "softly",
  "stupidly",
  "suspiciously",
  "well"
]
var preposition = [
  "about",
  "above",
  "across",
  "after",
  "against",
  "among",
  "around",
  "at",
  "before",
  "behind",
  "below",
  "beside",
  "between",
  "by",
  "down",
  "during",
  "for",
  "from",
  "in",
  "inside",
  "into",
  "near",
  "off",
  "on",
  "out",
  "over",
  "through",
  "to",
  "toward",
  "under",
  "up",
  "with"
]

function randomiser(arr) {
  var myMin =  1;
  var myMax = arr.length - 1;
  x = Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
  return arr[x];
}

function quote(num) {
  const sentence =
  "The " +
  randomiser(adjective) + " " + randomiser(color) + " " + randomiser(noun) + " " + randomiser(verb) + " " + randomiser(adverb) + " " + randomiser(preposition) + " " + "the" + " " + randomiser(adjective) + " " + randomiser(noun) + ".";

  var quotes = [];

  for (var x = 0; x < num; x++) {
    quotes.push(sentence);
  }
  return quotes;

};

console.log(quote(4));
