//Cuando el documento este listo, ejecutara el contenido dentro de laa función 
document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
    document.getElementById("notificacionVP").style.display='none';
    document.getElementById("notificacionVF").style.display='none';
    document.getElementById("notificacionI").style.display = "none";
    document.getElementById("notificacionTI").style.display = "none";
    document.getElementById("notificacionT").style.display = "none";
});

//Calculo del Valor Presente
function calcularVP(){
    var valorFuturo, tasaInteres, tiempo, result;
    valorFuturo = document.getElementById("valorFuturo").value;
    tasaInteres = document.getElementById("tasaInteres").value / 100;
    tiempo = (document.getElementById("tiempo").value / 12 );
    interesSimplevp = valorFuturo * tasaInteres * tiempo;
    
    result = valorFuturo / (1+(tiempo*tasaInteres));//Math.round(parseFloat(valorFuturo/(1+tasaInteres*tiempo)));

    document.getElementById("alertitaVP").innerHTML = "El valor presente es de: <strong>" + new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</strong>";
    document.getElementById("notificacionVP").style.display = 'block';
}

function calcularDias(element,fechaInicial,fecha_final){
    var fecha_inicial = new Date(fechaInicial.value);
    var fecha_final = new Date(fecha_final.value);
    element.value = calcularDiasMora(fecha_inicial,fecha_final)+1;
}

function calcularDiasMora(from, to) {
    var one_day = 1000 * 60 * 60 * 24;
    var date1_ms = from.getTime();
    var date2_ms = to.getTime();
    var difference_ms = (date2_ms - date1_ms);        // Convert back to days and return   
    return Math.floor(difference_ms / one_day);
}

//Calculo del Valor Futuro
function calcularVF(){
    var valorPresente, tasaInteres, tiempo, result, interes;

    valorPresente = document.getElementById("valorPresente").value;
    tasaInteres = document.getElementById("tasaInteresVF").value / 100;
    tiempo = document.getElementById("tiempoVF").value / 12;

    interes = valorPresente * tasaInteres * tiempo;
    vf= parseInt(valorPresente) + parseInt(interes);
    result =  Math.round(parseFloat(vf));

    document.getElementById("alertitaVF").innerHTML = "El valor futuro es de: <strong>" + new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</strong>";
    document.getElementById("notificacionVF").style.display='block';
}

//Calculo de la Tasa de Interés
function calcularTI(){
    var valorPresente, valorFuturo, tiempo;

    valorPresente = document.getElementById("valorPresenteTI").value;
    valorFuturo = document.getElementById("valorFuturoTI").value;
    tiempo = document.getElementById("tiempoTI").value;

    tasaInteres = (valorFuturo- valorPresente)/ (valorPresente * (tiempo/12));
    //total = (tasaInteres / 100);
    result = (tasaInteres);
    document.getElementById("alertitaTI").innerHTML = "La tasa de interés es de: <strong>" + result + "% </strong>";
    document.getElementById("notificacionTI").style.display = "block";
}

//Calculo del Interés
function calcularI(){
    var valorPresente, tasaInteres, tiempo, result, interes, Interes_Simple_Calculado, Valor_Final_IS;

    valorPresente = document.getElementById("valorPresenteIS").value;
    tasaInteres = document.getElementById("tasaInteresIS").value / 100;
    tiempo = document.getElementById("Dias_IS").value;
    interes = valorPresente * tasaInteres * (tiempo/List_Tipo_Tasa_IS.value);
    result =  Math.round(parseFloat(interes));
    document.getElementById("Interes_Simple_Calculado").value = Math.round(parseFloat(interes));
    //document.getElementById("Valor_Final_IS").value = (valorPresente+interes).toString();
    document.getElementById("alertitaI").innerHTML = "El interés es de: <strong>" + new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</strong>";
    document.getElementById("notificacionI").style.display = "block";
}


//Calculo del Tiempo
function calcularT(){
    var valorFuturo, valorPresente, tasaInteres, result;

    valorPresente = document.getElementById("valorPresenteT").value;
    valorFuturo = document.getElementById("valorFuturoT").value;
    var InteresSimple = valorFuturo - valorPresente;
    tasaInteres = document.getElementById("tasaInteresT").value / 100;
    //interesSimpleT = document.getElementById("interesSimpleT").value;

    result =  InteresSimple / (valorPresente * tasaInteres)
    //Math.round(parseFloat(((valorFuturo/valorPresente - 1)/tasaInteres)));//interesSimpleT / (valorPresente * tasaInteres); //

    document.getElementById("alertitaT").innerHTML = "El tiempo es de: <strong>" + result + "</strong> meses";
    document.getElementById("notificacionT").style.display = "block";
}

//Funciones para verificar que el usuario haya llenado los campos en cada formulario
/*function verificarVF(){
    valorPresente = document.getElementById("valorPresente").value;
    tasaInteres = document.getElementById("tasaInteres").value;
    tiempo = document.getElementById("tiempo").value;

    if((valorPresente === "") || (tasaInteres === "") || (tiempo === "")){
        return true;
    }
}*/

/*function verificarVP(){
    valorFuturo = document.getElementById("valorFuturo").value;
    tasaInteres = document.getElementById("tasaInteres").value;
    tiempo = document.getElementById("tiempo").value;

    if((valorFuturo === "") || (tasaInteres === "") || (tiempo === "")){
        return true;
    }
}*/

//## Funcion para limpiar los campos de cada formulario##

function limpiarVP(){
    document.getElementById("valorFuturo").value = "";
    document.getElementById("tasaInteres").value = "";
    document.getElementById("tiempo").value = "";
    document.getElementById("alertitaVP").innerHTML = "";
    document.getElementById("notificacionVP").style.display = "none";
}

function limpiarVF(){
    document.getElementById("valorPresente").value = "";
    document.getElementById("tasaInteresVF").value = "";
    document.getElementById("tiempoVF").value = "";
    document.getElementById("alertitaVF").innerHTML = "";
    document.getElementById("notificacionVF").style.display = "none";
}

function limpiarI(){
    document.getElementById("valorPresenteI").value = "";
    document.getElementById("tasaInteresI").value = "";
    document.getElementById("tiempoI").value = "";
    document.getElementById("alertitaI").innerHTML = "";
    document.getElementById("notificacionI").style.display = "none";
}

function limpiarTI(){
    document.getElementById("valorPresenteTI").value = "";
    document.getElementById("valorFuturoTI").value = "";
    document.getElementById("tiempoTI").value = "";
    document.getElementById("alertitaTI").innerHTML = "";
    document.getElementById("notificacionTI").style.display = "none";
}

function limpiarT(){
    document.getElementById("valorPresenteT").value = "";
    document.getElementById("valorFuturoT").value = "";
    document.getElementById("tasaInteresT").value = "";
    document.getElementById("alertitaT").innerHTML = "";
    document.getElementById("notificacionT").style.display = "none";
    document.getElementById("interesSimpleT").style.display = "none";
}