function addtxt (numb){
    if (numb == '+' || numb == '*' || numb == '/'){
        if (document.getElementById("#inp").value == ""){
            return;
        }
    }
    if (numb == '-' || numb == '+' || numb == '*' || numb == '/'){
        if (document.getElementById("#inp").value.includes("=")){
            let res = document.getElementById("#inp").value.split("=");
            document.getElementById("#inp").value = res[res.length - 1];
        }
        let lastSymb = document.getElementById("#inp").value.slice(-1);
        if (lastSymb == '-' || lastSymb == '+' || lastSymb == '*' || lastSymb == '/'){
            return;
        }
    }
    if (document.getElementById("#inp").value.includes("=")){
        document.getElementById("#inp").value = '';
    }
    document.getElementById("#inp").value += numb;
};

function binToDec (bin){
    let fractNumb = 0;
    if (!(Number.isInteger(Number(bin)))){
        let fract = bin.split('.')
        fract = fract[fract.length-1].split("");
        for (let i = 0; i < fract.length; i++){
            fractNumb = (fractNumb + fract[i])/2;
        }
    }
    let splitedBin; 
    if (Number.isInteger(bin)) {
        splitedBin = bin.split('');
    }else{
        splitedBin = bin.split('.');
        splitedBin = splitedBin[0].split('');
    }
    let numb = 0;
    for (let i = 0; i < splitedBin.length; i++){
        numb += Number(splitedBin[i])*(2**(splitedBin.length - (i+1)));
    };
    return numb + fractNumb;
}

function decToBin(results){
    let fractNumb = '';
    results = results.toString()
    if (!(Number.isInteger(results))){
        let fract = results.toString().split('.');
        for (let i = 0; i < fract.length; i++){
            fract = (fract*0.1)*2;
            if (fract >= 1){
                fract -= 1;
                fractNumb += '1'; 
            }else{
                fractNumb += '0';
            }
        }
        console.log(fractNumb);
    }
    let splitedBin; 
    if (Number.isInteger(results)) {
        splitedBin = results.split('');
    }else{
        splitedBin = results.split('.');
        splitedBin = splitedBin[0].split('');
    }
    let resultBin = '';
    for (let dec = results; dec >= 1; ){
        dec = Math.floor(dec)/2;
        if (Number.isInteger(dec)){
            resultBin += '0';
        }else{
            resultBin += '1';
        };
    };
    return Number(resultBin) + fractNumb;
}

document.querySelector("#one").onclick = function(){addtxt('1')};
document.querySelector("#zero").onclick = function(){addtxt('0')};
document.querySelector("#plus").onclick = function(){addtxt('+')};
document.querySelector("#minus").onclick = function(){addtxt('-')};
document.querySelector("#mnoz").onclick = function(){addtxt('*')};
document.querySelector("#dil").onclick = function(){addtxt('/')};
document.querySelector("#toch").onclick = function(){addtxt('.')};

document.querySelector("#equal").onclick = function(){
    let bins = document.getElementById('#inp').value.split(/\*|\+|\-|\//);
    let numbs = document.getElementById('#inp').value;
    for (let i = 0; i < bins.length; i++){
        numbs = numbs.replace(new RegExp(String(bins[i]), 'g'), binToDec(bins[i]));
    }
    let result = eval(numbs);
    document.getElementById("#ninp").value = result; //Дроби пока не учитываю 
    let resultBin = decToBin(result);
    document.getElementById("#inp").value += `=${resultBin.split('').reverse().join('')}`;
};

document.querySelector('#clear').onclick = function(){
    document.getElementById("#inp").value = "";
};

document.querySelector('#delete').onclick = function(){
    let val = document.getElementById("#inp")
    let newVal = val.value.slice(0, -1);
    document.getElementById("#inp").value = newVal;
    
};