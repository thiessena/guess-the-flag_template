//Datenrepresentation
let countries = [];
//wird in startQuiz initialisiert
let questions; 
//Aktuelle Punktzahl und Frage
let score;
let question; 


getData();

function getData(){
    fetch("http://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data)=>{
        countries = data;
        console.log(countries);
    })
}

function startQuiz(){
    console.log("start Quiz");
    score = 0; 
    question = 0;
    questions = [];
    playerAnswers = [];
    fillgame(3);
    const card = document.querySelector("#quizcard");
    console.log("Game is filled");
    card.style.display = "block"; 
    document.querySelector("#infotext").style.display = "none";
    document.querySelector("#summary").style.display="none";
    updateCard();
}

/**
 * Füllt den Array mit den Fragen und möglichen Antworten.
 * @param {int} questionAmount 
 */
function fillgame(questionAmount){
    score = 0;
    //Fragen erstellen
    questions = []; 
    for(let i = 0; i < questionAmount; i++){
        let countryId = Math.floor(Math.random()*countries.length);
        let country = countries[countryId];
        while(questions.some(e => e.answer == country.name )){ //Solange das Land im Array ist, weitersuchen.
            countryId = Math.floor(Math.random()*countries.length);
            country = countries[countryId];
        }
        //falsche Antworten zufällig wählen
        let answersArray = []; 
        while(answersArray.length < 5){
            let wAId = Math.floor(Math.random()*countries.length);
            if(wAId != countryId){
                answersArray.push(countries[wAId].name);
            }
        }
        //richtige Antwort einfügen
        const randomPosition = Math.random()*answersArray.length;
        answersArray.splice(randomPosition, 0, country.name);
        //Fragen-Objekt erstellen und an den Array anhängen
        questions.push({flagImage:country.flag, answer:country.name, answers: answersArray});
    }
    console.log(questions);
}

function updateCard(){
    //Alle HTML-Elemente holen
    const flagImage = document.querySelector("#flagImage");
    const flagOptions = document.querySelector("#quiz-options");
    const options = flagOptions.children;

    flagImage.setAttribute("src", questions[question].flagImage);
    console.log("Answer", questions[question].answer);
    console.log("options", options);
    for(let i = 0; i < options.length; i++){
        options[i].innerHTML = questions[question].answers[i];
    }
}

function checkAnswer(answer){
    console.log("Tried: " + answer.textContent + " for " + questions[question].answer+ " Result: " + (questions[question].answer == answer.textContent)) ;
    questions[question].playerAnswer = answer.textContent;
    questions[question].correctAnswer = questions[question].answer == answer.textContent;
    if(questions[question].correctAnswer){
        score++;
    }
    document.querySelector("#score").innerHTML = score;
    question++;
    
    //Nächste Frage anzeigen oder den Abschluss bearbeiten.
    if(question != questions.length ){ 
        updateCard();
    }else{//Ende des Spiels
        const card = document.querySelector("#quizcard");
        card.style.display = "none";
        const infotext = document.querySelector("#infotext"); 
        infotext.textContent = "Das Spiel ist zu Ende! Starte es mit dem Button neu.";
        infotext.style.display = "block";
        showSummary();
        
    }
}

/**
 * Zeigt am Ende die Zusammenfassung der Fragen und der Antworten an.
 */
function showSummary(){
    const summary = document.querySelector("#summary-content");
    summary.innerHTML="";

    //Create Answers
    for(let i = 0; i< questions.length; i++){
        const questionSummary = document.createElement("div");
        summary.appendChild(questionSummary);
        questionSummary.classList.add("question-summary");
        if(questions[i].correctAnswer){
            questionSummary.classList.add("correct");
        }else{
            questionSummary.classList.add("wrong");
        }
         
        const icon = document.createElement("img");
        questionSummary.appendChild(icon);
        icon.src = questions[i].src = questions[i].flagImage;
        icon.classList.add("flagIcon");
        
        const country = document.createElement("span");
        questionSummary.appendChild(country);
        country.classList.add("country");
        country.innerHTML = questions[i].answer; 

        const playerAnswer = document.createElement("span");
        questionSummary.appendChild(playerAnswer);
        playerAnswer.classList.add("playerAnswer");
        playerAnswer.innerHTML = questions[i].playerAnswer; 
    }
    document.querySelector("#summary").style.display="block";
}


