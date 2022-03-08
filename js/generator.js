function symbols (){
    let numbs = document.getElementById('usenumbs');
    let letters = document.getElementById('useletter');
    let symbs = document.getElementById('usespec');
    let symbols = [];
    if (numbs.checked){
        symbols.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    }
    if (letters.checked){
        symbols.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    }
    if (symbs.checked){
        symbols.push('!', '?', '/', '&', '*', '+', '-');
    }
    console.log(symbols);
}

document.querySelector("#generate").onclick = symbols;