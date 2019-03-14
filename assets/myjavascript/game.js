//create counter variables to store the number of wins and remaining guesses
var wins = 0;
var numOfGuessRemaining = 12;
//create the correct answers and store them in an array
var animalNames = ["gorilla", "giraffe","peacock", "dolphin", "leapard"];

//create a variable to store the index in an array 
var wordIndex = 0;

//create a variable to store each animal name which is taken as the correct answer for one round of the game
var correctWord = animalNames[wordIndex]

//create a variable to store the correct letter pressed by the user and set its initail value as underscore
var originCurrentWord = "_".repeat(correctWord.length);


var currentWord = originCurrentWord;
//create a variable to store the wrong letter pressed by the user
var wrongWord = "";

//write the data into corresponding place into the html
document.getElementById("correctLetter").textContent = currentWord;

document.getElementById("wrongLetter").textContent = wrongWord;

document.getElementById("guessRemain").textContent = numOfGuessRemaining;

document.getElementById("winCount").textContent = wins;


//get user input with key press and store it in a variable for later use
document.onkeyup = function (event){
    
       
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
//use conditional statement to determin whether the letter pressed by the user is in the correctWord
//when the letter guessed by the user is of the letter in the correctWord
        if(correctWord.indexOf(letter)>=0){
//use for loop to get all the correct letters in the correctWord string
            for(var i =0; i< correctWord.length;i++){
                if(correctWord[i] == letter){
//replace the "_" in the currentWord with the correct letter guessed by the user and place it at the corresponding position
                    currentWord = currentWord.replaceAt(i, letter);
                }
            }
//write the correct letter guessed into the corresponding place into the html
            document.getElementById("correctLetter").textContent = currentWord;
        }
//when the letter guessed by user is not the letter in the correctWord, update the wrongWord with the wrong letter and decrease numOFGuessRemaining by 1
        else{
            wrongWord+= letter;
            numOfGuessRemaining--;
//write the data into html;
            document.getElementById("wrongLetter").textContent = wrongWord;

            document.getElementById("guessRemain").textContent = numOfGuessRemaining;
        }

//test final result, and determine what the game will do the next
//when the currentWord matches the correctWord, increase the wins by 1 and reset other variables
        
        if(currentWord === correctWord){
            wins++;
            document.getElementById("winCount").textContent = wins;
            document.getElementById("correctLetter").textContent = originCurrentWord;
            document.getElementById("wrongLetter").textContent = "";
            document.getElementById("guessRemain").textContent = 12;
            //when the user win once, the computer pick the next word in the animalNames array for the user to play
            wordIndex++;
            correctWord = animalNames[wordIndex];
            currentWord = originCurrentWord;
            numOfGuessRemaining=12;
            wrongWord="";
            
        }
//when the numOfGuessRemaining becomes 0, all the data is reset, and the computer pick the next word in the animalNames array for the user to play   
        else if(numOfGuessRemaining==0){
            wordIndex++;
            correctWord = animalNames[wordIndex];
            currentWord = originCurrentWord;
            numOfGuessRemaining=12;
            wrongWord="";
            document.getElementById("correctLetter").textContent = currentWord;
            document.getElementById("wrongLetter").textContent = "";
            document.getElementById("guessRemain").textContent = 12;
            
        }
        
    
} 

//define the replaceAt function (In JavaScript, strings are immutable, which means the best you can do is create a new string with the changed content, and assign the variable to point to it.)
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}



