document.getElementById("element").textContent = "Каждый элемент ";

function randChoice(){
    let value = document.getElementById("area").value;
    let list = value.split('\n');
    document.getElementById("element").textContent = list[Math.floor(Math.random() * (list.length - 0) + 0)];
}

document.querySelector("#generate").onclick = randChoice
