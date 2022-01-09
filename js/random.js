document.getElementById("number").textContent = '0'


function randNumb(){
    let min = Math.ceil(document.getElementById("min").value);
    let max = Math.floor(document.getElementById("max").value);
    let number = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("number").textContent = number;
}

document.querySelector("#generate").onclick = randNumb;
