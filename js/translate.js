let statuss = true
document.getElementById('binnumber').disabled = true;
function edit (stat){
    if (stat){
        document.getElementById('decnumber').disabled = true;
        document.getElementById('binnumber').disabled = false;
    }else{
        document.getElementById('decnumber').disabled = false;
        document.getElementById('binnumber').disabled = true;
    }
    document.getElementById('binnumber').value = '';
    document.getElementById('decnumber').value = '';
    statuss = !stat
}

function binToDec (bin){
    let splitedBin = bin.split('');
    let numb = 0;
    for (let i = 0; i < splitedBin.length; i++){
        numb += Number(splitedBin[i])*(2**(splitedBin.length - (i+1)));
    };
    return numb;
}

function decToBin (dec){
    let resultBin = '';
    for (let decn = dec; decn >= 1; ){
        decn = Math.floor(decn)/2;
        console.log(decn);
        if (Number.isInteger(decn)){
            resultBin += '0';
        }else{
            resultBin += '1';
        };
    };
    return resultBin;
}

document.querySelector("#edit").onclick = function(){edit(statuss)};
document.querySelector("#translate").onclick = function(){
    let binnumb = document.getElementById('binnumber').value;
    let decnumb = document.getElementById('decnumber').value;
    if (statuss){
        if (decnumb.length > 0){
            let bin = decToBin(decnumb);
            document.getElementById('binnumber').value = bin.split('').reverse().join('');
        };
    }else{
        if (binnumb.length > 0){   
            let dec = binToDec(binnumb);
            document.getElementById('decnumber').value = dec;
        };
    };
};
