let array_notas = [];
let lista_notas = document.getElementById("lista_de_notas");
let user_name = prompt("Escribe tu nombre por favor!");
let num_notas = prompt("Hola " + user_name + ", ¿Cuantas notas deseas ingresar?")
document.body.onload = function(){
    num_notas;
}

function ingresar_nota(){
    let nota = +document.getElementById("nota_ingresada").value;
    if(array_notas.length < num_notas){ 
        if( nota >= 0.0 & nota <= 5.0 & array_notas.length < num_notas){
            array_notas.push(+document.getElementById("nota_ingresada").value);
            
            
        }else{
            alert("ingrese una nota valida. De 0.0 a 5.0");
        }
    }else{
        alert("Ya ingresaste " + num_notas +  " notas")
        
    }
    
}

function mostrar_lista(){
    let listado = document.getElementById("lista_de_notas");
    for(let nota of array_notas){
        let item_lista = document.createElement("li");
        item_lista.innerText = nota;
        listado.appendChild(item_lista);
    }

}

function calcular_promedio(){ 
    function suma(a,b){
        return a + b;
    }
    let sumatoria = array_notas.reduce(suma);
    let promedio = sumatoria / array_notas.length;
    //promedio = Math.round(promedio);
    let resultado = document.getElementById("texto_resultado");
    resultado.textContent = "Tu promedio es: " + promedio;
}

function ordenar_array(){
    array_notas.sort(function(a, b){return a - b});
    let array_ordenada = array_notas.reverse();
    console.log(array_notas);
}

function nota_mas_alta(){
    ordenar_array();
    let resultado = document.getElementById("texto_resultado_2");
    resultado.textContent = "Tu nota más alta es: " + array_notas[0];
}

function validar_aplazos(){
    for(nota of array_notas){
        if(nota < 3.0){
            let resultado = document.getElementById("texto_resultado_3");
            resultado.textContent = "Estas aplazado";
        }else{
            let resultado = document.getElementById("texto_resultado_3");
            resultado.textContent = "No tienes aplazamiento.";
        }
    }
}

