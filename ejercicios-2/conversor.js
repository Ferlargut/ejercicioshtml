var farenheit=document.getElementById("farenheit").value;
var celsius=document.getElementById("celsius").value;

function convertirCelsius(farenheit){
    var resultado=((farenheit-32)*5)/9;
    return resultado;
}
function convertirFarenheit(celsius){
    var resultado=((celsius*9)/5)-2;
    return resultado;
}