/* Redondear a 2 decimal solo si es necesario  */
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
/* Redondear a 3 decimal solo si es necesario  */
function roundToThree(num) {    
    return +(Math.round(num + "e+3")  + "e-3");
}
/* Ejercicio 1 */
function ejer1(){
    let galonesE1=document.getElementById('galonesE1').value;
    let litrosE1=document.getElementById('litrosE1');
    let metrocubicosE1=document.getElementById('metrocubicosE1');
    let piecubicosE1=document.getElementById('piecubicosE1');
    if(galonesE1.length==0){
        litrosE1.innerHTML='';
        metrocubicosE1.innerHTML='';
        piecubicosE1.innerHTML='';
    }else{
        litrosE1.innerHTML=roundToThree(parseFloat(galonesE1)*3.785);
        metrocubicosE1.innerHTML=roundToThree(parseFloat(galonesE1)/264);
        piecubicosE1.innerHTML=roundToThree(parseFloat(galonesE1)/7.481);
    }
}
/* Ejercicio 2 */
function ejer2(){
    let poloE2=document.getElementById('poloE2').value;
    let gorraE2=document.getElementById('gorraE2').value;
    let importeE2=document.getElementById('importeE2');
    let descE2=document.getElementById('descE2');
    let totalE2=document.getElementById('totalE2');
    let imp,desc;
    if(poloE2.length==0 || gorraE2.length==0){
        importeE2.innerHTML='';
        descE2.innerHTML='';
        totalE2.innerHTML='';
    }else{
        desc=(parseFloat(poloE2)*12)*0.15+(parseFloat(gorraE2)*14)*0.05;
        imp=(parseFloat(poloE2)*12)+(parseFloat(gorraE2)*14);
        importeE2.innerHTML=imp;
        descE2.innerHTML=desc;
        totalE2.innerHTML=imp-desc;
    }
}