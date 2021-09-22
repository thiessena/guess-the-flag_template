# guess-the-flag_template
==[Erläuterung der Aufgabe]==
In diesem Projekt soll ein einfaches Flagen-Quiz erstellt werden. Hierbei soll eine Flagge angezeigt werden und der Spieler soll aus mehreren Optionen das richtige Land auswählen, zu dem die Flagge gehört. 

Für jede „Frage“ wird jeweils eine Flagge angezeigt, und per Zufall fünf falsche Antworten und eine richtige Antwort eingefügt. 
Es ist wichtig, dass die Antworten vermischt werden.

Die Antworten werden jeweils über einen Button angezeigt, der sobald er gedrückt wurde, eine Funktion aufruft, die die Antwort prüft. 

Die richtig geantworteten Fragen können in einer Variablen gespeichert werden. Hierzu kann noch die gegebene Antwort gespeichert werden.

Dann kann am Ende noch eine Zusammenfassung eingeblendet werden.


==[Befehle, um aus Javascript auf die HTML-Elemente zuzugreifen]==
document.querySelector
Mit dem Query-Selector kann man mit CSS-Anfragen Elemente auswählen: 
Der folgende Befehl liefert ein Element, das die CSS-Bedingung erfüllt.
document.querySelector("#quizcard");

Der Datentyp der Rückgabe ist ein HTML-Node und kann deshalb auch mit der Punktschreibweise angesprochen werden: 
document.querySelector("#infotext").style.display = "none";

Auch Bilder können mit dieser Methode verändert werden:
    const flagImage = document.querySelector("#flagImage");
    flagImage.setAttribute("src", questions[question].flagImage);

Selbst der Inhalt zwischen dem Start- und Endtage kann direkt editiert werden: 
options[i].innerHTML

HTML-Elemente in Javascript erzeugen: 
Mit dem Befehl createElement können beliebige HTML-Tags erzeugt werden: 
const questionSummary = document.createElement("div");
const icon = document.createElement("img");

Der Befehl appendChild ermöglicht es HTML-Objekte in einem HTML-Objekt einzufügen:
questionSummary.appendChild(icon);

==[Einbinden der Flaggen]==
Für die Flaggen kein eine kostenlose API verwendet werden, um die Länderdaten als Array zu laden.
//Datenrepresentation
let countries = [];
getData();

function getData(){
    fetch("http://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data)=>{
        countries = data;
        console.log(countries);
    })
}

