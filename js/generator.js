function randChoice(list){
    let element = list[Math.floor(Math.random() * list.length)];
    return element;
}
function symbols (){
    let numbs = document.getElementById('usenumbs');
    let letters = document.getElementById('useletter');
    let symbs = document.getElementById('usespec');
    let bigLetter = document.getElementById('usebig');
    let symbols = [];
    if (numbs.checked){
        symbols.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    }
    if (letters.checked){
        symbols.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    }
    if (bigLetter.checked){
        symbols.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    }
    if (symbs.checked){
        symbols.push('!', '?', '/', '&', '*', '+', '-', '~', ')', '(', '#', '@', '%');
    }
    if (symbols.length < 1){
        document.getElementById("password").value += '';
        return;
    }
    const maxLenght = document.getElementById('passlenght').value;
    let password = '';
    for (let i = 0; i < maxLenght; i++){
        let element = randChoice(symbols);
        password += element;
    }
    document.getElementById("password").value = '';
    document.getElementById("password").value += password;
}



document.querySelector("#generate").onclick = symbols;