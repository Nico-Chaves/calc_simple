function valorTipoSeguro(){
    var tipoSeguro = document.getElementById("tipo_seguro_id").value
    console.log(tipoSeguro)
    switch(tipoSeguro){
        case "0": document.getElementById("mensajeValorTipoSeguro").innerHTML = ""; break;
        case "1": document.getElementById("mensajeValorTipoSeguro").innerHTML = "$ 500"; break;
        case "2": document.getElementById("mensajeValorTipoSeguro").innerHTML = "$ 1000"; break;
        case "3": document.getElementById("mensajeValorTipoSeguro").innerHTML = "$ 1500"; break;
    }
}
valorTipoSeguro()