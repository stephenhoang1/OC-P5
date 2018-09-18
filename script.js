// 3 array solution


array1 = [
  "I'm going to make him an offer he can't refuse",
  "You don't understand! I coulda had class",
  "I've got a feeling we're not in Kansas anymore",
  "Here's looking at you, kid",
  "Go ahead",
  "May the Force be with you",
  "All right, Mr. DeMille, I'm ready for my close-up",
  "I love the smell of napalm",
  "E.T. phone home",
  "Mama always said life was like a box of chocolates",
  "I see dead people",
  "You had me at ‘hello",
  "Here's Johnny",
  "Hasta la vista, baby",
  "Keep The Change, Ya Filthy Animal",
  "I didn't kill my wife",
  "Houston, we have a problem",
  "I’ll be back",
  "In this country, you gotta make the money first. Then when you get the money, you get the power. Then when you get the power, then you get the woman"
]
array2 = [
  "and ",
  "yet",
  "but",
  "because",
  "so",
  "although"
]
array3 = [
  "make my day.",
"As far back as I can remember, I always wanted to be a gangster",
"I want you to paint me like one of your French girls",
"You never know what you're gonna get.",
"you're trying to seduce me. Aren't you?",
"Remember Sully when I promised to kill you last?…I lied",
"I'm king of the world!",
"You Can't Handle The Truth!",
"Life, uh, finds a way.",
"Stupid is as stupid does",
"Run, Forrest, run!",
"To Infinity... And Beyond!",
"Show Me The Money!",
"the whole damn system is out of order",
"Just Keep Swimming",
"That is so fetch!",
"I am your father.",
"I don’t give a damn",
"The first rule of Fight Club is you do not talk about Fight Club",
"I’ll have what she’s having",
"If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you."
]

var myMin =  1;
var myMax = array3.length

x = Math.floor(Math.random() * (myMax - myMin +1)) + myMin;

console.log(array3[x])
