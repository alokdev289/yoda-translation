var button = document.querySelector('#translatebtn')
var input = document.querySelector('#input-ctn')
var output = document.querySelector('#output-ctn')

var apiUrl = "https://api.funtranslations.com/translate/yoda.json"

function errorHandler(err){
    console.log("failed due to: ", err)
    alert("try again later")
}

function translate(){
    var intxt = input.value 
    if(intxt ==""){
        alert("please enter text")
        return
    }

    const url=`${apiUrl}?text=${intxt}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        var outText = data.contents.translated 
        output.innerText=outText
    })
    .catch(errorHandler)
}

button.addEventListener('click', translate)