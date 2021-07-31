/* Redondear a 2 decimal solo si es necesario  */
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
/* Ejercicio 1 */
function ejer1(){
    let horaE1=document.getElementById('horaE1').value;
    let seg;
    let resulE1=document.getElementById('resulE1');
    if(horaE1.length==0){
        resulE1.innerHTML='';
    }else{
        /* substr no se debe usar pero no se me ocurrio otra cosa :´v */
        seg=parseInt(horaE1.substr(6,7))+1
        if(seg<10){
            resulE1.innerHTML=horaE1.substr(0,5)+":0"+seg;
        }else{
            resulE1.innerHTML=horaE1.substr(0,5)+":"+seg;
        }
    }
}
/* Ejercicio 2 */
function ejer2(){
    let ladoE2=document.getElementById('ladoE2').value;
    let resulE2=document.getElementById('resulE2');
    if(ladoE2.length==0){
        resulE2.innerHTML='';
    }else{
        resulE2.innerHTML=roundToTwo(Math.pow(parseFloat(ladoE2),2));
    }
}
/* ejercicio 3 */
function ejer3(){
    let altoE3=document.getElementById('altoE3').value;
    let anchoE3=document.getElementById('anchoE3').value;
    let resulE3=document.getElementById('resulE3');
    if(altoE3.length==0|| anchoE3.length==0){
        resulE3.innerHTML='';
    }else{
        resulE3.innerHTML=roundToTwo(parseFloat(altoE3)*parseFloat(anchoE3));
    }
}
/* Ejercicio 4 */
function ejer4(){
    let baseE4=document.getElementById('baseE4').value;
    let altoE4=document.getElementById('altoE4').value;
    let resulE4=document.getElementById('resulE4');
    if(baseE4.length==0|| altoE4.length==0){
        resulE4.innerHTML='';
    }else{
        resulE4.innerHTML=roundToTwo((parseFloat(baseE4)*parseFloat(altoE4))/2);
    }
}
/* Ejercicio 5 */
function ejer5(){
    let mayorE5=document.getElementById('mayorE5').value;
    let menorE5=document.getElementById('menorE5').value;
    let resulE5=document.getElementById('resulE5');
    if(mayorE5.length==0|| menorE5.length==0){
        resulE5.innerHTML='';
    }else{
        resulE5.innerHTML=roundToTwo((parseFloat(mayorE5)*parseFloat(menorE5))/2);
    }
}
/* Ejercicio 6 */
function ejer6(){
    let mayorE6=document.getElementById('mayorE6').value;
    let menorE6=document.getElementById('menorE6').value;
    let altoE6=document.getElementById('altoE6').value;
    let resulE6=document.getElementById('resulE6');
    if(mayorE6.length==0|| menorE6.length==0||altoE6.length==0){
        resulE6.innerHTML='';
    }else{
        resulE6.innerHTML=roundToTwo(((parseFloat(mayorE6)+parseFloat(menorE6))*parseFloat(altoE6))/2);
    }
}
/* Ejercicio 7 */
function ejer7(){
    let radioE7=document.getElementById('radioE7').value;
    let areaE7=document.getElementById('areaE7');
    let longitudE7=document.getElementById('longitudE7');
    if(radioE7.length==0){
        areaE7.innerHTML='';
        longitudE7.innerHTML='';
    }else{
        areaE7.innerHTML=roundToTwo(Math.PI*Math.pow(parseFloat(radioE7),2));
        longitudE7.innerHTML=roundToTwo(2*Math.PI*parseFloat(radioE7));
    }
}
/* Ejercicio 8 */
function ejer8(){
    let segE8=document.getElementById('segE8').value;
    let resulE8=document.getElementById('resulE8');
    let h,min,seg;
    if(segE8.length==0){
        resulE8.innerHTML='';
    }else{
        h=Math.trunc(parseInt(segE8)/3600);
        if(h<1){
            min=Math.trunc(parseInt(segE8)/60);
            seg=parseInt(segE8)%60;
        }else{
            min=Math.trunc((parseInt(segE8)-h*3600)/60);
            seg=(parseInt(segE8)-h*3600)%60;
        }
        /* Aumentar 0 por si solo hay un numero */
        if(min<10 && seg<10){
            resulE8.innerHTML=h+"h : 0" +min+"min: 0"+seg+"seg";
        }
        else if(min<10){
            resulE8.innerHTML=h+"h : 0" +min+"min: "+seg+"seg";
        }
        else if(seg<10){
            resulE8.innerHTML=h+"h :" +min+"min: 0"+seg+"seg";
        }else{
            resulE8.innerHTML=h+"h :" +min+"min: "+seg+"seg";
        }
    }
}
/* ejercicio 9 */
function ejer9(){
    let dolarE9=document.getElementById('dolarE9').value;
    let resulE9=document.getElementById('resulE9');
    if(dolarE9.length==0){
        resulE9.innerHTML='';
    }else{
        resulE9.innerHTML=parseFloat(dolarE9)*3.95;
    }
}
/* Ejercicio 10 */
function ejer10(){
    let compraE10=document.getElementById('compraE10').value;
    let resulE10=document.getElementById('resulE10');
    if(compraE10.length==0){
        resulE10.innerHTML='';
    }else{
        resulE10.innerHTML=parseFloat(compraE10)+(parseFloat(compraE10)*0.15);
    }
}
