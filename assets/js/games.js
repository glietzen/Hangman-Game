//GLOBAL VARIABLES
//---------------------------------------
// Used to record how many times a letter can be pressed
var doubleWord = ['a', 'b', 'c','d', 'e', 'f',
				  'g', 'h', 'i','j', 'k', 'l',
				  'm', 'n', 'o','p', 'q', 'r',
				  's', 't', 'u','v', 'w', 'x','y', 'z'];

//Holds all the words
var wordBank = ['Topeka', 'Lincoln', 'Sacremento', 'Albany', 'Jackson', 'Austin', 'Denver', 'Madison', 'Lansing', 'Columbus', 'Charleston',];
//Holds choosenWord
var choosenWord = "";
//Holds letters in word
var lettersInWord = [];
//Holds number of blanks in word
var numBlanks = 0;
//Holds Blanks and successful guesses
var blanksAndSuccesses = [];
//Holds Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 155;
var rightGuessCounter = 0;
var letterGuessed = 0;