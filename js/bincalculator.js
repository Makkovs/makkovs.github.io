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
    let splitedBin = bin.split('');
    let numb = 0;
    for (let i = 0; i < splitedBin.length; i++){
        numb += Number(splitedBin[i])*(2**(splitedBin.length - (i+1)));
    };
    return numb;
}

document.querySelector("#one").onclick = function(){addtxt('1')};
document.querySelector("#zero").onclick = function(){addtxt('0')};
document.querySelector("#plus").onclick = function(){addtxt('+')};
document.querySelector("#minus").onclick = function(){addtxt('-')};
document.querySelector("#mnoz").onclick = function(){addtxt('*')};
document.querySelector("#dil").onclick = function(){addtxt('/')};

document.querySelector("#equal").onclick = function(){
    let bins = document.getElementById('#inp').value.split(/\*|\+|\-|\//);
    let numbs = document.getElementById('#inp').value;
    for (let i = 0; i < bins.length; i++){
        numbs = numbs.replace(new RegExp(String(bins[i]), 'g'), binToDec(bins[i]));
    }
    let result = eval(numbs);
    let resultBin = '';
    for (let dec = result; dec >= 1; ){
        dec = Math.floor(dec)/2;
        console.log(dec);
        if (Number.isInteger(dec)){
            resultBin += '0';
        }else{
            resultBin += '1';
        };
    };
    console.log(resultBin);
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