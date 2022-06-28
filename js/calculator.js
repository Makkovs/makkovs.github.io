const test = {
    'sin(' : 'Math.sin(', 'sinh(' : 'Math.sinh(',
    'tan(' : 'Math.tan(', 'tanh(' : 'Math.tanh(',
    'cosh(' : 'Math.cosh(', 'cos(' : 'Math.cos(', 
    'csc(' : '1/Math.sin(', 'sec(' : '1/Math.cos(', 
    '^' : '**'
}

function addtxt (numb){
    if (numb == '+' || numb == '*' || numb == '/' || numb == '.' || numb == '^' || numb == '!'){
        if (document.getElementById("#inp").value == ""){
            return;
        }
    }
    if (numb == '-' || numb == '+' || numb == '*' || numb == '/' || numb == '.' || numb == '^' || numb == '!'){
        if (document.getElementById("#inp").value.includes("=")){
            let res = document.getElementById("#inp").value.split("=");
            document.getElementById("#inp").value = res[res.length - 1];
        }
        let lastSymb = document.getElementById("#inp").value.slice(-1);
        if (lastSymb == '-' || lastSymb == '+' || lastSymb == '*' || lastSymb == '/' || lastSymb == '.' || lastSymb == '^'){
            return;
        }
        if (lastSymb == '!' && numb == '!'){
            return;
        }
    }
    if (document.getElementById("#inp").value.includes("=")){
        document.getElementById("#inp").value = '';
    }
    document.getElementById("#inp").value += numb;
};

document.querySelector("#sev").onclick = function(){addtxt('7')};
document.querySelector("#eig").onclick = function(){addtxt('8')};
document.querySelector("#nine").onclick = function(){addtxt('9')};
document.querySelector("#six").onclick = function(){addtxt('6')};
document.querySelector("#five").onclick = function(){addtxt('5')};
document.querySelector("#four").onclick = function(){addtxt('4')};
document.querySelector("#thr").onclick = function(){addtxt('3')};
document.querySelector("#two").onclick = function(){addtxt('2')};
document.querySelector("#one").onclick = function(){addtxt('1')};
document.querySelector("#zero").onclick = function(){addtxt('0')};
document.querySelector("#plus").onclick = function(){addtxt('+')};
document.querySelector("#minus").onclick = function(){addtxt('-')};
document.querySelector("#toch").onclick = function(){addtxt('.')};
document.querySelector("#mnoz").onclick = function(){addtxt('*')};
document.querySelector("#dil").onclick = function(){addtxt('/')};
document.querySelector("#pi").onclick = function(){addtxt('3.1415926535')};
document.querySelector("#bracket1").onclick = function(){addtxt('(')};
document.querySelector("#bracket2").onclick = function(){addtxt(')')};
document.querySelector("#sin").onclick = function(){addtxt('sin(')};
document.querySelector('#sinh').onclick = function(){addtxt('sinh(')};
document.querySelector('#tan').onclick = function(){addtxt('tan(')};
document.querySelector('#tanh').onclick = function(){addtxt('tanh(')};
document.querySelector('#cos').onclick = function(){addtxt('cos(')};
document.querySelector('#cosh').onclick = function(){addtxt('cosh(')};
document.querySelector('#csc').onclick = function(){addtxt('csc(')};
document.querySelector('#sec').onclick = function(){addtxt('sec(')};
document.querySelector('#percent').onclick = function(){addtxt('%')};
document.querySelector('#stepen').onclick = function(){addtxt('^')};
document.querySelector("#equal").onclick = function(){
    let replaced = document.getElementById("#inp").value.replaceAll(/sin\(|sinh\(|tan\(|tanh\(|cos\(|cosh\(|csc\(|sec\(|\^/g, (x) => test[x]);
    addtxt(`=${eval(replaced)}`);
};
document.querySelector('#clear').onclick = function(){
    document.getElementById("#inp").value = "";
};
document.querySelector('#delete').onclick = function(){
    let val = document.getElementById("#inp")
    let newVal = val.value.slice(0, -1);
    document.getElementById("#inp").value = newVal;
    
};