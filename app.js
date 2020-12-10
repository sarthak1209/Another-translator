var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");

var divOutput  = document.querySelector("#div-output");

 
var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";
 
function urlBuilder(input){
    //console.log(serverUrl + "?text="+ textInput.value);

    return serverUrl + "?text="+ input;
   
}

function errorHandeler(error){
    if(error){
        alert("Sorry We can't serve you right now! Please try again after some time", error);
    }
}


console.log("form app.js file");

function clickHandeler(){
     console.log("clickHandler executed ")
    var input = textInput.value;
    fetch(urlBuilder(input))
    .then( res => res.json())
    .then(json => 
        { 

            divOutput.innerText = json.contents.translated;
        }).catch(errorHandeler);

    //     console.log("fetch executed!!!!");
    // console.log(textInput.value)
    
   // divOutput.innerText = textInput.value;
}

btnTranslate.addEventListener("click", clickHandeler);
