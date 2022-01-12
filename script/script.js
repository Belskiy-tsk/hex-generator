function generateColor(){
    randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = `linear-gradient(to right, #${randomColor1} ,  #${randomColor2}`;
    var outputText = document.getElementsByTagName('h2')[0]
    outputText.innerHTML = `background:linear-gradient(to right, #${randomColor1} ,  #${randomColor2})`

}