var inputText = document.querySelector("#txt-area");
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#txt-output");

var url = "https://api.funtranslations.com/translate/minion.json";

function getUrl(text) {
    return url + "?" + "text=" + text; 
}