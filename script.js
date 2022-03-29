var inputText = document.querySelector("#txt-area");
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#txt-output");

var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function getUrl(text) {
    return url + "?" + "text=" + text; 
}


function clickHandler() {
    var finalUrl = getUrl(inputText.value);
    fetch(finalUrl)
    .then(response => response.json())
    .then(json => {
        var msgOutput = json.contents.translated;
        outputText.innerText = msgOutput;
    }) 
}

btnTranslate.addEventListener("click", clickHandler);