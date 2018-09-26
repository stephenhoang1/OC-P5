//Arrays containing words for quotes
var positive_adjective = ["adaptable","adventurous","affectionate","agreeable","ambitious","amicable","amusing","brave","bright","broad-minded","calm","careful","charming","conservationist","compassionate","considerate","courageous","courteous","creative","decisive","determined","diligent","diplomatic","dynamic","easygoing","emotional","energetic","enthusiastic","extroverted","fair-minded","faithful","fearless","forceful","frank","friendly","funny","generous","gentle","good","hard-working","helpful","humorous","imaginative","impartial","independent","intellectual","intelligent","kind","loving","loyal","modest","neat","nice","optimistic","passionate","patient","persistent","philosophical","polite","powerful","practical","pro-active","quick-witted","quiet","rational","reliable","reserved","resourceful","romantic","self-confident","self-disciplined","sensible","sensitive","shy","sincere","sociable","straightforward","sympathetic","thoughtful","tidy","tough","unassuming","understanding","Tactful","versatile","warmhearted","willing","witty"]
var negative_adjective = ["aggressive","arrogant","boring","bossy","careless","changeable","compulsive","cruel","cunning","detached","dishonest","dogmatic","domineering","flirtatious","foolish","fussy","greedy","harsh","impatient","impolite","inconsistent","indecisive","inflexible","interfering","intolerant","introverted","irresponsible","jealous","lazy","materialistic","mean","miserly","moody","narrow-minded","nasty","naughty","nervous","obsessive","over-emotional","pessimistic","possessive","rude","ruthless","sarcastic","secretive","selfish","short tempered","silly","stubborn","stupid","superficial","Superstitious","Tactless","timid","touchy","thoughtless","unkind","unpredictable","unreliable","untidy","untrustworthy"]
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
var positive_adverb = [
"abidingly", "ably", "absolutely", "abundantly", "accommodatingly", "accordingly", "accurately", "actively", "actually", "acutely", "adeptly", "admirably", "admiringly", "adorably", "adoringly", "adroitly", "aesthetically", "affably", "affectingly", "affectionately", "affirmatively", "affluently", "agelessly", "agilely", "agreeably", "alertly", "altruistically", "always", "amazingly", "ambitiously", "amenably", "amiably", "amply", "amusingly", "anew", "angelically", "appetizingly", "appreciably", "appreciatively", "appropriately", "approvingly", "aptly", "ardently", "arrestingly", "articulately", "artistically", "assertively", "assiduously", "assuredly", "astonishingly", "astoundingly", "astutely", "attentively", "attractively", "atypically", "augustly", "auspiciously", "authentically", "authoritatively", "autonomously", "avidly", "awesomely", "beauteously", "beautifully", "believably", "beneficently", "beneficially", "benevolently", "benignly", "best", "blazingly", "blessedly", "blissfully", "blithely", "boisterously", "boldly", "bounteously", "bountifully", "bravely", "brightly", "brilliantly", "briskly", "brotherly", "buoyantly", "busily", "calmly", "candidly", "cannily", "capably", "captivatingly", "carefully", "caringly", "casually", "causatively", "celestially", "cerebrally", "certainly", "charitably", "charmingly", "cheerfully", "chicly", "chivalrously", "civilly", "clairvoyantly", "cleanly", "clearly", "clemently", "cleverly", "cogently", "coherently", "colourfully", "comfortably", "comfortingly", "comically", "commandingly", "commendably", "commiseratively", "communicatively", "companionably", "compassionately", "compatibly", "compellingly", "competently", "completely", "concisely", "conclusively", "confidently", "confirmingly", "congenially", "congruously", "conscientiously", "consciously", "considerately", "consistently", "consonantly", "constructively", "contemplatively", "contently", "conveniently", "conversantly", "convincingly", "convivially", "coolly", "cooperatively", "cordially", "correctly", "cosily", "cosmically", "courageously", "courteously", "creatively", "credibly", "creditably", "cunningly", "cutely", "dapperly", "daringly", "dashingly", "dazzlingly", "dearly", "debonairly", "decently", "decisively", "decorously", "deeply", "defiantly", "definitely", "deftly", "delectably", "deliberately", "delicately", "delightedly", "delightfully", "dependably", "deservingly", "desirably", "determinedly", "devotedly", "devoutly", "dexterously", "differently", "diligently", "diplomatically", "directly", "disarmingly", "discerningly", "discretely", "discriminatingly", "distinctively", "diversely", "divinely", "dreamily", "durably", "dynamically", "eagerly", "earnestly", "easily", "ebulliently", "economically", "ecstatically", "edifyingly", "educationally", "effectively", "effectually", "effervescently", "efficiently", "effortlessly", "elaborately", "elatedly", "electrically", "elegantly", "eloquently", "eminently", "empathetically", "emphatically", "enchantingly", "encouragingly", "endearingly", "enduringly", "energetically", "engagingly", "engrossingly", "enjoyably", "enlighteningly", "enliveningly", "enrichingly", "enterprisingly", "enthrallingly", "enthusiastically", "enticingly", "entirely", "entrancingly", "equally", "equitably", "eruditely", "especially", "essentially", "ethically", "euphorically", "even-handedly", "evenly", "evocatively", "exactly", "exceedingly", "excellently", "exceptionally", "excitingly", "executively", "exhaustive", "exhilaratingly", "exotically", "expansively", "expectantly", "expeditiously", "expensively", "expertly", "explicitly", "expressively", "exquisitely", "extensively", "extraordinarily", "extravagantly", "exuberantly", "exultantly", "exultingly", "fabulously", "facilely", "fain", "fair", "fairly", "faithfully", "famously", "fantastically", "fascinatingly", "fashionably", "favorably", "fearlessly", "felicitously", "fertilely", "fervently", "festively", "fetchingly", "finely", "firm", "first", "first-rate", "fitly", "fittingly", "flamboyantly", "flat out", "flavorfully", "fleetly", "flexibly", "flourishingly", "fluently", "fondly", "forcefully", "foremost", "forever", "forgivingly", "formally", "forthrightly", "fortuitously", "fortunately", "forward", "frankly", "fraternally", "free", "freshly", "frolicsomely", "fruitfully", "full", "fully", "funnily", "futuristically", "gaily", "gainfully", "gallantly", "gamesomely", "generously", "genially", "gently", "genuinely", "gladly", "gleefully", "gloriously", "glowingly", "good-humoredly", "good-naturedly", "good-heartedly", "goodly", "gorgeously", "gracefully", "graciously", "gradely", "graithly", "grandly", "gratefully", "gratifyingly", "greatly", "guidingly", "gymnastically", "handily", "handsomely", "happily", "hardily", "harmlessly", "harmoniously", "healthily", "heartily", "helpfully", "heroically", "high-spiritedly", "highly", "hilariously", "hiply", "honestly", "honorably", "hopefully", "hospitably", "hotly", "humanely", "humbly", "humorously", "hygienically", "hypnotically", "idealistically", "ideally", "illuminatingly", "illustriously", "imaginatively", "immaculately", "immeasurably", "immediately", "impartially", "impassionedly", "impeccably", "importantly", "impressively", "incisively", "incredibly", "indefatigably", "independently", "indestructibly", "indispensably", "individualistically", "indomitably", "industriously", "infinitely", "jauntily", "jazzily", "jestingly", "jocosely", "jocularly", "jointly", "jokingly", "jovially", "joyfully", "joyously", "jubilantly", "judiciously", "justly", "laudably", "laughingly", "lavishly", "lawfully", "learnedly", "legitimately", "leniently", "level-headedly", "liberally", "liberatingly", "light-heartedly", "likely", "limberly", "literately", "lithely", "lordly", "lovably", "lovingly", "loyally", "lucidly", "luckily", "lucratively", "luminously", "lusciously", "lushly", "lustily", "lustrously", "luxuriantly", "luxuriously", "magically", "magnanimously", "magnetically", "magnificently", "main", "majestically", "majorly", "malleably", "managerially", "manly", "mannerly", "markedly", "marvelously", "masterfully", "masterly", "maternally", "meaningfully", "measurably", "meditatively", "mellowly", "melodiously", "mercifully", "meritoriously", "merrily", "mesmerizingly", "metaphysically", "meteorically", "methodically", "meticulously", "mightily", "mindfully", "miraculously", "mirthfully", "modestly", "morally", "most fortunately", "munificently", "muscularly", "musically", "mutually", "naturally", "neatly", "neighborly", "newly", "nicely", "niftily", "nimbly", "no end", "nobly", "notably", "noticeably", "objectively", "obligingly", "observantly", "once", "open-handedly", "open-heartedly", "open-mindedly", "openly", "opportunely", "optimally", "optimistically", "opulently", "originally", "outstandingly", "parentally", "particularly", "passionately", "paternally", "patiently", "peaceably", "peacefully", "perceptively", "perfectly", "permissively", "perseveringly", "persistently", "personally", "perspicaciously", "perspicuously", "persuasively", "pertly", "phenomenally", "philanthropically", "philosophically", "picturesquely", "piously", "piquantly", "placidly", "playfully", "please", "pleasingly", "pleasurably", "plenty", "plum", "poetically", "poignantly", "politely", "popularly", "positively", "powerfully", "practically", "pragmatically", "praiseworthily", "prayerfully", "preciously", "precisely", "preparedly", "prestigiously", "prevalently", "princely", "pristinely", "proactively", "prodigiously", "productively", "professionally", "proficiently", "profitably", "profoundly", "progressively", "prolifically", "prominently", "promisingly", "promptly", "proper", "properly", "prophetically", "propitiously", "prosperously", "protectively", "proudly", "provocatively", "prudently", "public-spiritedly", "punctually", "purely", "purposefully", "quaintly", "qualitatively", "queenly", "quick", "quickly", "quick-wittedly", "quietly", "quintessentially", "radiantly", "rapidly", "rapturously", "rationally", "ravishingly", "readily", "really", "reasonably", "reassuringly", "receptively", "reciprocally", "reflectively", "refreshingly", "regally", "relaxingly", "reliably", "remarkably", "reputably", "resiliently", "resolutely", "resoundingly", "resourcefully", "respectably", "respectfully", "resplendently", "responsibly", "responsively", "restfully", "restoratively", "retentively", "reverently", "rewardingly", "rhapsodically", "richly", "right", "righteously", "rightfully", "rightly", "risibly", "robustly", "rollickingly", "romantically", "rosily", "rousingly", "ruggedly", "safely", "sagaciously", "saliently", "salubriously", "sanguinely", "satisfactorily", "saucily", "scintillatingly", "scrumptiously", "scrupulously", "securely", "sedulously", "seemly", "self-confidently", "selflessly", "sensationally", "sensibly", "sensitively", "sensuously", "sentimentally", "serendipitously", "serenely", "sharp", "significantly", "simply", "sincerely", "skilfully", "sleekly", "smartly", "smashingly", "smilingly", "smoothly", "snugly", "sociably", "socially", "softly", "solicitously", "solidly", "soothingly", "sophisticatedly", "soulfully", "soundly", "specially", "spectacularly", "speedily", "spellbindingly", "spiritedly", "spiritually", "splendidly", "splendiferously", "spontaneously", "sportingly", "sportively", "sprightly", "square", "stably", "stalwartly", "stately", "statuesquely", "steadily", "straightforwardly", "strongly", "studiously", "stunningly", "stupendously", "stylishly", "suavely", "sublimely", "substantially", "subtly", "successfully", "succinctly", "sufficiently", "suitably", "sumptuously", "super", "superabundantly", "superbly", "superiorly", "supplely", "supportingly", "supportively", "supremely", "sure", "surely", "surprisingly", "sweet", "sweetly", "swiftly", "sympathetically", "synergistically", "tactfully", "tastefully", "tenderly", "terrifically", "therapeutically"]
var negative_adverb = ["angrily", "anxiously", "awkwardly", "badly", "blindly", "carelessly", "cruelly", "foolishly", "frantically", "greedily", "hastily", "hungrily", "inadequately", "irritably", "lazily", "loudly", "noisily", "madly", "nervously", "painfully", "poorly", "recklessly", "roughly", "rudely", "sadly", "selfishly", "shyly", "stupidly", "suspiciously", "violently", "tensely"]
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

//FUNCTIONS FOR QUOTE MACHINES:

//Choose a random element in an array.
function randomiser(arr) {
  var myMin =  1;
  var myMax = arr.length - 1;
  x = Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
  return arr[x];
}

//Choose randomly between one of two arrays.
function random_array(arr1, arr2) {
  var i = Math.floor(Math.random() * 2) + 1;

  if (i === 1) {
    return randomiser(arr1);
  };

  if (i == 2) {
    return randomiser(arr2);
  };

}

//QUOTE MACHINES:

//create a random quote.
function random_quote(num) {
  var quotes = [];

  for (var x = 0; x < num; x++) {
    const sentence =
  "The " +
  random_array(positive_adjective, negative_adjective) + " " + randomiser(color) + " " + randomiser(noun) + " " + randomiser(verb) + " " + random_array(positive_adverb, negative_adverb) + " " + randomiser(preposition) + " " + "the" + " " + random_array(positive_adjective, negative_adjective) + " " + randomiser(noun) + ".";

    const sentence2 =`The ${random_array(positive_adjective, negative_adjective)} ${randomiser(color)} ${randomiser(noun)} ${randomiser(verb)} ${random_array(positive_adverb, negative_adverb)} ${randomiser(preposition)} the ${random_array(positive_adjective, negative_adjective)} ${randomiser(noun)}.`;


    quotes.push(sentence2);

  }
  return quotes;

};

//Create a happy quote.
function happy_quote(num) {
  var quotes = [];

  for (var x = 0; x < num; x++) {
    const sentence =
  "The " +
  randomiser(positive_adjective) + " " + randomiser(color) + " " + randomiser(noun) + " " + randomiser(verb) + " " + randomiser(positive_adverb) + " " + randomiser(preposition) + " " + "the" + " " + randomiser(positive_adjective) + " " + randomiser(noun) + ".";

    quotes.push(sentence);

  }
  return quotes;

};

//create a sad quote.
function sad_quote(num) {
  var quotes = [];

  for (var x = 0; x < num; x++) {
    const sentence =
  "The " +
  randomiser(negative_adjective) + " " + randomiser(color) + " " + randomiser(noun) + " " + randomiser(verb) + " " + randomiser(negative_adverb) + " " + randomiser(preposition) + " " + "the" + " " + randomiser(negative_adjective) + " " + randomiser(noun) + ".";

    quotes.push(sentence);

  }
  return quotes;

};

//DOM Manipulation

//Change button color when selected
$(".button").click(function() {
    $('button').removeClass('btn-clicked');
    $(this).removeClass(".btn-normal-color");
    $(this).addClass("btn-clicked");
  });

//Change icon color when selected
$("i").click(function() {
    $('i').removeClass('icon-clicked');
    $(this).removeClass(".icon-default-color");
    $(this).addClass("icon-clicked");
  });

//VALIDATION: RETURN A STATEMENT IF USER DOESN'T CHOOSE A FACE:
//set a variable to false
  var icon_is_clicked = false;
  //set the same variable to true if user clicks on a face
  $('.far').on('click', function() {
    icon_is_clicked = true;
  })

//MAIN FUNCTION TO CREATE AND POST QUOTES:
$('.submit').on('click', function() {

  //if the user hasn't clicked on a face:
  //create a message telling them to do so, and stop program.
  if (icon_is_clicked == false) {
     $(".error").css("display", "inline")
    return;
  }

  //When user chooses a face, remove error message.
  $(".error").css("display", "none");

  //create an empty variable to store new quotes.
  let generatedQuotes = [];

  //1. GET INFO FROM ICONS ONCE CLICKED
  //grab the data from data-face from the icon-clicked class.
  //set that data to a variable called 'face'.
  const face = $('.icon-clicked').data('face');

  //2. GET INFO FROM QTY BUTTONS ONCE CLICKED:
  //grab text from the .btn-clicked class and convert it to integer.
  //Set that text to a 'qty' variable.
  const qty = parseInt($('.btn-clicked').text());

  //3. CLEAR PREVIOUS QUOTES:
  //...By setting #results to an empty string.
  $("#results").html("");

  //DISPLAY THE QUOTES CONTAINER
  $("#results-container").css("display", "block");

  //4. CHOOSE THE CORRECT QUOTE MACHINE:
  //... then add these quotes to the generatedQuotes array, number of quotes based on the argument.
  if(face === "happy") {
    generatedQuotes = happy_quote(qty);
  } else if(face === "sad") {
    generatedQuotes = sad_quote(qty);
  } else { //random is the default option, in case the user doesn't click an icon.
    generatedQuotes = random_quote(qty);
  };

  //5. POST A NEW SET OF QUOTES TO HTML:
  //For each quote in the 'generatedQuotes' array, append it to #results in a <li> tag.
  generatedQuotes.forEach(function(quote) {
    $('#results').append(`<li>${quote}</li>`)
  });

});

//HIDE EVERYTHING AND DISPLAY THANK YOU MESSAGE
$(".exit-button").on('click', function() {
      $(".container").toggle();
      $(".exit-message").toggle();
                     });

$(".go-back-button").on('click', function() {
      $(".container").toggle();
      $(".exit-message").toggle();
});
