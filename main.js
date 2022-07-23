let letters = 'abcdefghijklmnopqrstuvwxyz';

lettersArray = Array.from(letters);

let letterContainer = document.querySelector('.letters');

lettersArray.forEach(letter => {
    
    let span = document.createElement('span'),
        theLetter = document.createTextNode(letter);
    
    span.appendChild(theLetter);

    letterContainer.appendChild(span);

    span.className = 'letter-box';

});
/*
creat My Object
*/

const word = {
    
    programming: ['PHP', 'Javascript', 'go', 'scala', 'fortran', 'r', 'mysql', 'Python'],
    movies: ['Prestige', 'Inception', 'Parasite', 'Interstellar', 'whiplash', 'Moment', 'Coco', 'Up'],
    people: ['Albert Einstein', 'Hitchcock', 'Alexander', 'Cleopatra', 'Mahatma Ghandi'],
    countries: ['Syrian', 'Palestine', 'Yemen', 'Egypt', 'Bahrain', 'Qatar']
};


// let allKeys = Object.keys(word),

//     randomKeyNum = Math.floor(Math.random() * allKeys.length),
//     randomKeyName = allKeys[randomKeyNum],
//     randomValueNum = Math.floor(Math.random() *word[randomKeyName].length),
//     randomValueName = word[randomKeyName][randomValueNum];

// console.log(randomKeyName);
// console.log(word[randomKeyName]);
// console.log(randomValueName)

let allKeys = Object.keys(word),
    randPropNum = Math.floor(Math.random() * allKeys.length),
    randomPropName = allKeys[randPropNum],
    randomValueNum = Math.floor(Math.random() * word[randomPropName].length),
    randomValueName = word[randomPropName][randomValueNum];


document.querySelector('.category span').innerHTML = randomPropName + " " + randomValueName;

let letterGuessContainer = document.querySelector('.letters-guess'),
    lettersAndSpace = Array.from(randomValueName);

lettersAndSpace.forEach(letter => {
    
    let emptySpans = document.createElement('span');

    
    if (letter === ' ') {
        
        emptySpans.className = 'with-space';
        
    }
    
    letterGuessContainer.appendChild(emptySpans);
});

let spansGuess = document.querySelectorAll('.letters-guess span'),
    wrongAttempts = 0,
    mistake = 0;

document.addEventListener('click', (e) => {

    let theStatus = false;
    
    if (e.target.className === 'letter-box') {
        
            e.target.classList.add('clicked');

            
            let chosenWord = Array.from(randomValueName.toLowerCase());
            let clickedLetter = e.target.innerHTML.toLowerCase();

            chosenWord.forEach((wordLetter, wordIndex) => {

                if (clickedLetter == wordLetter) {
                    
                theStatus = true;
                
                spansGuess.forEach((span, spanIndex) => {
                    
                    if (spanIndex === wordIndex) {

                        span.innerHTML = clickedLetter;

                    }
                })
                
            }
            
        })
        let theDraw = document.querySelector('.hangman-draw');
        
        if (theStatus !== true) {
            
            wrongAttempts++
            
            theDraw.classList.add(`wrong-${wrongAttempts}`);
            
            if (wrongAttempts === 9) {
                
                gameOver();

                letterContainer.classList.add('finished');
                
            }

            mistake++

            let wrong = document.createElement('span'),
                mistakeNum = document.createTextNode(mistake);
            wrong.appendChild(mistakeNum);
            document.body.appendChild(wrong);
            wrong.className = 'wrong';
            wrong.innerHTML = ''
            
        } else {
            

        }

        if (letterGuessContainer.textContent === randomValueName.toLowerCase()) {
            
            success();

            letterContainer.classList.add('finished');

        }

        
    };
    
})

function gameOver() {
    let div = document.createElement('div');

        div.innerHTML =`Game Over, The Word Is: <span>${randomValueName}</span>`;
    
    document.body.appendChild(div);
    div.className = 'popup';
}

let level;

function success() {
    if (wrongAttempts < 1) {

        level = 'Excellent';

    } else if (wrongAttempts < 2) {

        level = 'VeryGood';

    } else if (wrongAttempts < 5) {

        level = 'Good'

    } else if (wrongAttempts < 8) {

        level = 'Bad'

    } else {

        level = 'Just Good Luck';

    }
    let successDiv = document.createElement('div');

    successDiv.innerHTML = `Congratulation You Won And Your Mistake Is: ${wrongAttempts}<div>${level}</div>`;

    document.body.appendChild(successDiv);
    successDiv.className = 'Succ';
}



