/* Ejercicio 1 */
let nombre =document.getElementById('nombreE1');
let mensaje =document.getElementById('mensajeE1');
function mostrarNombre(){
    if(nombre.value.length == 0){
        mensaje.innerHTML='';
    }else{
        mensaje.innerHTML='Buenos días '+nombre.value;
    }
}
/* Ejercicio 2 */
let Pnum=document.getElementById('primerNumeroE2');
let Snum=document.getElementById('segundoNumeroE2');
let resultado=document.getElementById('resultadoE2');
function calcular(){
    if(Pnum.value.length == 0 || Snum.value.length == 0){
        resultado.innerHTML='';
    }else{
        resultado.innerHTML=parseInt(Pnum.value)+parseInt(Snum.value);
    }
}
/* Ejercicio 3 */
let numE3=document.getElementById('numeroE3');
let resulE3=document.getElementById('resultadoE3');
function ejer3(){
    if(numE3.value.length==0){
        resulE3.innerHTML='';
    }else{
        let numnuevo=numE3.value;
        let descom;
        var sumaE3=0;
        for(let i=0;i<numE3.value.length;i++){
            descom=numnuevo%10;
            numnuevo=Math.trunc(numnuevo/10);
            sumaE3=sumaE3+descom;
        }
        resulE3.innerHTML=sumaE3;
    }
}
/* Ejercicio 4 */
let PnumE4=document.getElementById('PnumeroE4');
let SnumE4=document.getElementById('SnumeroE4');
let resulE4=document.getElementById('resultadoE4');
function sumarE4(){
    if(PnumE4.value.length==0 || SnumE4.value.length==0 ){
        resulE4.innerHTML='';
    }else{
        let sumaE4=parseInt(PnumE4.value)+parseInt(SnumE4.value);
        resulE4.innerHTML=sumaE4;
    }
}
function restarE4(){
    if(PnumE4.value.length==0 || SnumE4.value.length==0 ){
        resulE4.innerHTML='';
    }else{
        let restaE4=parseInt(PnumE4.value)-parseInt(SnumE4.value);
        resulE4.innerHTML=restaE4;
    }
}
function multiE4(){
    if(PnumE4.value.length==0 || SnumE4.value.length==0 ){
        resulE4.innerHTML='';
    }else{
        let mulE4=parseInt(PnumE4.value)*parseInt(SnumE4.value);
        resulE4.innerHTML=mulE4;
    }
}
function dividirE4(){
    if(PnumE4.value.length==0 || SnumE4.value.length==0 ){
        resulE4.innerHTML='';
    }else{
        let diviE4=parseInt(PnumE4.value)/parseInt(SnumE4.value);
        resulE4.innerHTML=diviE4;
    }
}
/* Ejercicio 5 */
let numE5=document.getElementById('numeroE5');
let dobleE5=document.getElementById('dobleE5');
let tripleE5=document.getElementById('tripleE5');
function ejer5(){
    if(numE5.value.length==0){
        dobleE5.innerHTML='';
        tripleE5.innerHTML='';
    }else{
        dobleE5.innerHTML=parseInt(numE5.value*2);
        tripleE5.innerHTML=parseInt(numE5.value*3);
    }
}
/* Ejercicio 6 */
function ejer6(){
    let variable1E6=document.getElementById('variable1E6');
    let variable2E6=document.getElementById('variable2E6');
    let resul1E6=document.getElementById('resul1E6');
    let resul2E6=document.getElementById('resul2E6');
    let auxiliar=variable1E6.value;
    variable1E6=variable2E6.value;
    variable2E6=auxiliar;
    
    resul1E6.innerHTML=variable1E6;
    resul2E6.innerHTML=variable2E6;
}
/* Ejercicio 7 */
let minE7=document.getElementById('minE7');
let maxE7=document.getElementById('maxE7');
let resulE7=document.getElementById('resulE7');
let random;
function ejer7(){
    if(minE7.value.length==0||maxE7.value.length==0||minE7.value.length>maxE7.value.length){
        resulE7.innerHTML='';
    }else{
        random=Math.trunc(Math.random()*((parseInt(maxE7.value)+1)-parseInt(minE7.value))+parseInt(minE7.value));
        resulE7.innerHTML=random;
    }
}
/* Ejercicios 8 */
let PnumE8=document.getElementById('PnumE8');
let SnumE8=document.getElementById('SnumE8');
let resulE8=document.getElementById('resulE8');
let residuoE8=document.getElementById('residuoE8');
function ejer8(){
    if(PnumE8.value.length==0||SnumE8.value.length==0){
        resulE8.innerHTML='';
        residuoE8.innerHTML='';
    }else{
        resulE8.innerHTML=Math.trunc(parseInt(PnumE8.value)/parseInt(SnumE8.value));
        residuoE8.innerHTML=parseInt(PnumE8.value)%parseInt(SnumE8.value);
    }
}
/* Ejercicio 9*/
let sueldoE9=document.getElementById('sueldoE9');
let resulE9=document.getElementById('resulE9');
let aumento;
function ejer9(){
    if(sueldoE9.value.length==0){
        resulE9.innerHTML='';
    }else{
        aumento=parseInt(sueldoE9.value)*0.1;
        resulE9.innerHTML=parseInt(sueldoE9.value)+aumento;
    }
}
/* Ejercicio 10 */
let centigE10=document.getElementById('centigE10');
let resulE10=document.getElementById('resulE10');
function ejer10(){
    if(centigE10.value.length==0){
        resulE10.innerHTML='';
    }else{
        resulE10.innerHTML=32+(parseInt(centigE10.value)*9/5);
    }
}
/* Ejercicio 11 */
let precioE11=document.getElementById('precioE11');
let cantidadE11=document.getElementById('cantidadE11');
let resulE11=document.getElementById('resulE11');
function changeE11(){
    let productoE11=document.getElementById('productoE11');
    if(productoE11.value=='Selecciona'){
        precioE11.innerHTML='';
    }else if(productoE11.value=='Azucar'){
        precioE11.innerHTML=2.8;
    }else if(productoE11.value=='Arroz'){
        precioE11.innerHTML=3.5;
    }else if(productoE11.value=='Galleta'){
        precioE11.innerHTML=0.8;
    }
}
function ejer11(){
    if(precioE11.innerHTML==''||cantidadE11.value.length==0){
        resulE11.innerHTML='';
    }else{
        resulE11.innerHTML=parseFloat(precioE11.innerHTML)*parseInt(cantidadE11.value);
    }
}
/* Ejercicio 12 */
let numE12=document.getElementById('numE12');
let resulE12=document.getElementById('resulE12');
function ejer12(){
    if(numE12.value.length==0){
        resulE12.innerHTML='';
    }else{
        resulE12.innerHTML=parseFloat(numE12.value)*3.6;
    }
}
/* Ejercicio 13 */
function ejer13(){
    let baseE13=document.getElementById('baseE13').value;
    let altoE13=document.getElementById('altoE13').value;
    let resulE13=document.getElementById('resulE13');
    if(baseE13.length==0 ||altoE13.length==0){
        resulE13.innerHTML='';
    }else{
        resulE13.innerHTML=(parseFloat(baseE13)*parseFloat(altoE13))/2;
    }
}
/* Ejercicio 14 */
function ejer14(){
    let kmE14=document.getElementById('kmE14').value;
    let minE14=document.getElementById('minE14').value;
    let resulE14=document.getElementById('resulE14');
    let kmMin;
    if(kmE14.length==0||minE14.length==0){
        resulE14.innerHTML='';
    }else{
        kmMin=kmE14/minE14;
        resulE14.innerHTML=(kmMin*1000).toFixed(2);
    }
}
/* ejercicio 15 */
function ejer15(){
    let aE15=parseFloat(document.getElementById('valoraE15').value);
    let bE15=parseFloat(document.getElementById('valorbE15').value);
    let cE15=parseFloat(document.getElementById('valorcE15').value);
    let resulE15=document.getElementById('resulE15');
    if(aE15.length==0||bE15.length==0||cE15.length==0){
        resulE15.innerHTML='';
    }else{
        resulE15.innerHTML=(aE15 + 7 * cE15) / (bE15 + 2 - aE15) + 2 * bE15;
    }
}
/* ejercicio 16 */
function ejer16(){
    let aE16=parseFloat(document.getElementById('valoraE16').value);
    let bE16=parseFloat(document.getElementById('valorbE16').value);
    let resulE16=document.getElementById('resulE16');
    if(aE16.length==0||bE16.length==0){
        resulE16.innerHTML='';
    }else{
        resulE16.innerHTML=(aE16 + 5) * 3 / 2 * bE16 - bE16;
    }
}
/* ejercicio 17 */
function ejer17(){
    let aE17=parseFloat(document.getElementById('valoraE17').value);
    let bE17=parseFloat(document.getElementById('valorbE17').value);
    let cE17=parseFloat(document.getElementById('valorcE17').value);
    let resulE17=document.getElementById('resulE17');
    if(aE17.length==0||bE17.length==0){
        resulE17.innerHTML='';
    }else{
        resulE17.innerHTML=-bE17 + Math.sqrt(2*bE17 * aE17 * cE17) / aE17;
    }
}
/* Ejercicio 18 */
function ejer18(){
    let alumE18=document.getElementById('alumE18').value;
    let resulhE18=document.getElementById('resulhE18');
    let resulmE18=document.getElementById('resulmE18');
    let hombres;
    if(alumE18.length==0){
        resulhE18.innerHTML='';
        resulmE18.innerHTML='';
    }else{
        hombres=Math.trunc(Math.random()*((parseInt(alumE18))-1)+1);
        resulhE18.innerHTML=hombres;
        resulmE18.innerHTML=alumE18-hombres;
    }
}
/* ejercicio 19 */
function ejer19(){
    let segundosE19=document.getElementById('segundosE19').value;
    let resulE19=document.getElementById('resulE19');
    let min,seg;
    if(segundosE19.length==0){
        resulE19.innerHTML='';
    }else{
        min=Math.floor(parseInt(segundosE19)/60);
        seg=parseInt(segundosE19)%60
        resulE19.innerHTML=min+' : '+seg;
    }
}
/* Ejercicio 20 */
function ejer20(){
    let valoraE20=parseFloat(document.getElementById('valoraE20').value);
    let valorbE20=parseFloat(document.getElementById('valorbE20').value);
    let valorcE20=parseFloat(document.getElementById('valorcE20').value);
    let resulE20=document.getElementById('resulE20');
    if(valoraE20.length==0|| valorbE20.length==0||valorcE20.length==0){
        resulE20.innerHTML='';
    }else{
        resulE20.innerHTML=(valoraE20+valorbE20)-5*(valorcE20-valoraE20)*Math.pow(valoraE20,4)-6;
    }
}
/* Ejercicio 21 */
function ejer21(){
    let romboE21=document.getElementById('romboE21');
    let lineasE21=parseInt(document.getElementById('lineasE21').value);
    let halfNumber = lineasE21/2;
    for(let i=1;i<lineasE21;i++){
        /* Parte superior */
        if(i<halfNumber){
            for(let j=0;j<lineasE21;j++){
                if (j < halfNumber+i && j > halfNumber - i) {
                    romboE21.innerHTML+="*";
                } else {
                    romboE21.innerHTML+='&nbsp;';
                }
            }
        }else{
            /* mitad para abajo */
            for (let k = lineasE21; k > 0; k--) {
                let t = lineasE21 - i -1;
                if (k < halfNumber + t && k > halfNumber - t) {
                    romboE21.innerHTML+="*";
                } else {
                    romboE21.innerHTML+='&nbsp;';
                }
            }
        }
        romboE21.innerHTML+='<br>';
    }
}