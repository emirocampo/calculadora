var operandoa;
var operandob;
var operacion;

function inicio() {
    //alert("entraste a operar!");
    //variables
    var resultado=document.getElementById("resultado");
    var nueve=document.getElementById("btn9");
    var ocho=document.getElementById("btn8");
    var siete=document.getElementById("btn7");
    var seis=document.getElementById("btn6");
    var cinco=document.getElementById("btn5");
    var cuatro=document.getElementById("btn4");
    var tres=document.getElementById("btn3");
    var dos=document.getElementById("btn2");
    var uno=document.getElementById("btn1");
    var cero=document.getElementById("btn0");
    var division= document.getElementById("btnDiv");
    var multiplicacion=document.getElementById("btnMul");
    var resta=document.getElementById("btnRes");
    var suma =document.getElementById("btnSum");
    var limpiar=document.getElementById("btnCe");
    var igual=document.getElementById("btnIgu");
    //eventos
    btn1.onclick = function (e) {
        resultado.textContent=resultado.textContent+"1";
    }
    btn2.onclick = function (e) {
        resultado.textContent=resultado.textContent+"2";
    }
    btn3.onclick = function (e) {
        resultado.textContent=resultado.textContent+"3";
    }
    btn4.onclick = function (e) {
        resultado.textContent=resultado.textContent+"4";
    }
    btn5.onclick = function (e) {
        resultado.textContent=resultado.textContent+"5";
    }
    btn6.onclick = function (e) {
        resultado.textContent=resultado.textContent+"6";
    }
    btn7.onclick = function (e) {
        resultado.textContent=resultado.textContent+"7";
    }
    btn8.onclick = function (e) {
        resultado.textContent=resultado.textContent+"8";
    }
    btn9.onclick = function (e) {
        resultado.textContent=resultado.textContent+"9";
    }
    btn0.onclick = function (e) {
        resultado.textContent=resultado.textContent+"0";
    }
    btnCe.onclick=function(e){
        resetear();
    }
    btnSum.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="+";
        limpiarP();
    }
    btnRes.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="-";
        limpiarP();
    }
    btnMul.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="*";
        limpiarP();
    }
    btnDiv.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="/";
        limpiarP();
    }
    btnIgu.onclick=function(e){
        operandob=resultado.textContent;
        resolver();
    }
}
function limpiarP() {
    resultado.textContent="";
}
function resetear() {
    resultado.textContent="";
    operandoa=0;
    operandob=0;
    operacion="";
}
function resolver(params) {
    var res=0;
    switch (operacion) {
        case "+":
            res=parseFloat(operandoa)+parseFloat(operandob);
            break;
        case "-":
            res=parseFloat(operandoa)-parseFloat(operandob);
            break;
        case "*":
            res=parseFloat(operandoa)*parseFloat(operandob);
            break;
        case "/":
            res=parseFloat(operandoa)/parseFloat(operandob);
            break;
        default:
            break;
    }
    resetear();
    resultado.textContent=res;
}