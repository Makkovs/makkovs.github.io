function addtxt (numb){
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
document.querySelector("#toch").onclick = function(){addtxt(',')};
document.querySelector("#mnoz").onclick = function(){addtxt('*')};
document.querySelector("#dil").onclick = function(){addtxt('÷')};
document.querySelector("#rav").onclick = function(){
    alert('Пока не работает')
};