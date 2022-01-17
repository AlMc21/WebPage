const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e)=>{
setTimeout(()=>{
    splash.classList.add('display-none');
},2000);

})





const txtOutput = document.getElementById("output"); // Must have this
const btntryTheGuess = document.getElementById("tryTheGuess");
const btnresetTheNumber = document.getElementById("resetTheNumber");

const numberToTest = document.getElementById("userGuess");

//var random = Math.ceil(Math.random() * 10 + 1);
var guessCounter = 0;
var random = Math.ceil(Math.random() * 10);



btntryTheGuess.addEventListener("click", guessSystem);
btnresetTheNumber.addEventListener("click", guessReset);

function guessReset() 
{
    guessCounter == 0;
    random == 0;
}



function guessSystem() 
{

    const number = parseInt(numberToTest.value); 
    
    

    if(number == random)
    {    
        guessCounter++;
        txtOutput.innerText = `Your Guess is: ${number}

        You guessed correctly  

        Number of guesses: ${guessCounter}

        If you want to play again, then press reset`;
    
    }

    else if(number > random)
    {    

        var outBy = number - random;

        guessCounter++;

        txtOutput.innerText = `Your Guess is: ${number}

        You guessed too high, go lower next time  

        Number of guesses: ${guessCounter}
        
        Your guess was out by: ${outBy}

        Incorrect, so please enter another number above and press: "Try The Guess".
        `;
    }

    else
    {

        var outBy = random - number;

        guessCounter++;

        txtOutput.innerText = `Your Guess is: ${number} 

        You guessed too low, go higher next time  

        Number of guesses: ${guessCounter}

        Your guess was out by: ${outBy}
        
        Incorrect, so please enter another number above and press: "Try The Guess".
        `;
    }


}












const txtOutput2 = document.getElementById("output2"); // Must have this
const btntryTheGuess2 = document.getElementById("contactSend");
btntryTheGuess2.addEventListener("click", guessSystem2);
function guessSystem2() 
{
        txtOutput2.innerText = ` Thanks `;
}


