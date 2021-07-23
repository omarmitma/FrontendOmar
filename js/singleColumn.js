var email=document.getElementById('email');
var error=document.getElementById('message');
function validarCorreo(){
    var validar;
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esvalido=expReg.test(email.value);
    if(esvalido==true){
        validar=true;
    }else{
        email.style.border='1px solid #ff5263';
        error.innerHTML='Please provide a valid email addres';
        validar=false;
    }
    return validar;
}