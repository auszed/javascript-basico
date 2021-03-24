//Ejercicio #1
console.log("Hola mundo");

//Ejercicio #2
alert("Hola me llamo Hanns");

//Ejercicio #3
var first_name = "Hanns";
var surname = "Juarez";

console.log(first_name + surname);

//Ejercicio #4
var numero_suma_1 = 75;
var numero_suma_2 = 55;

console.log(numero_suma_1 + numero_suma_2);

//Ejercicio #5
var nota_de_examen = 4;

if (nota_de_examen >= 5) {
    console.log("Has aprobado el examen con un " + nota_de_examen);
}else{
    console.log("Has reprobado el examen con un " + nota_de_examen);
}

//Ejercicio #6
var linea_de_texto = "Tengo un coche de color azul";
console.log(linea_de_texto);

var rempazar_texto = linea_de_texto.replace("azul", "verde");
console.log(rempazar_texto);

//Ejercicio #7
var elementos_del_hogar = ["mesa", "silla", "ordenador", "libreta"];

for (i = 0; i < elementos_del_hogar.length; i++){
    console.log("El elemento " + elementos_del_hogar[i] + " esta en la posición " + i);


}


//Ejercicio calculadora

//solicitacion de valores
var operador_promp = prompt("insertar el operador, resta, suma, multiplicar");
var valor1_promp = prompt("insertar el primer valor");
var valor2_promp = prompt("insertar el segundo valor");

//resultados del comando
alert(calculadora(operador_promp, valor1_promp,valor2_promp));

function calculadora(operador, valor1, valor2){
    var retorno;

    if(operador == "-"){
        retorno = parseInt(valor1) - parseInt(valor2);

    }else if (operador == "+"){
        retorno = parseInt(valor1) + parseInt(valor2);

    }else if(operador == "*"){
        retorno = parseInt(valor1) * parseInt(valor2);

    }else{
        retorno = "simbol is not correct";
    }
    return retorno;
}

//la opearcion se ve reflejada
var result = calculadora("resta", 40,20);
console.log(result);


//Ejercicio calculadora grafica

var numeros = document.getElementById("resultados_html");

function save_value(object){

    var push_it = object.innerHTML;
    console.log(numeros);

    if (push_it == "="){
    //calculadora
    resultados_html.innerHTML = eval(resultados_html.innerHTML);

    }else if (push_it == "Cl"){
        resultados_html.innerHTML = "0";

    }else{
        if(resultados_html.innerHTML == "0"){
            resultados_html.innerHTML = push_it;

        }else{
        resultados_html.innerHTML += push_it;
        }
    }
}









