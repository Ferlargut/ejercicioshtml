function convertirCelsius(farenheit){
    var farenheit=document.getElementById("farenheit").value;
    var resultado=((farenheit-32)*5)/9;
    document.getElementById("celsius").value =resultado;
}
function convertirFarenheit(celsius){
    var celsius=document.getElementById("celsius").value;
    var resultado=((celsius*9)/5)-2;
    document.getElementById("farenheit").value =resultado;
}