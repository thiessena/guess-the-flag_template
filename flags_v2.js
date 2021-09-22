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

}

/**
 * Füllt den Array mit den Fragen und möglichen Antworten.
 * @param {int} questionAmount 
 */
function fillgame(questionAmount){

    //Fragen erstellen
    
        //falsche Antworten zufällig wählen

        //richtige Antwort einfügen

        //Fragen-Objekt erstellen und an den Array anhängen

}

function updateCard(){


}

function checkAnswer(answer){
    //Inhalt des Buttons mit der korrekten Antwort vergleichen
    
    //Nächste Frage anzeigen oder den Abschluss bearbeiten.

}

/**
 * Zeigt am Ende die Zusammenfassung der Fragen und der Antworten an.
 */
function showSummary(){
    
}


