let ingreseNombre = prompt("Por favor ingrese nombre");

function ingreso() {
    alert("¡Bienvenido a 'Big Coffe' " + " " + ingreseNombre + "!") ;
}

ingreso();



let preguntasPrimeras = ("Por favor de las siguientes opciones elegir lo que desea hacer")
alert(preguntasPrimeras);




const primerasOpciones = [];
const carta = [];



function entrada() {

    const primerasOpciones = parseInt(prompt([
        "Opción 1) : Ver carta \n" +
        "Opción 2) : Ver promos \n" +
        "Opción 3) : Ver recomendaciones"   
     ]));
     
       
    switch (primerasOpciones){
        case 1:  alert("A ingresado a 'Carta', seleccione lo que desea ver.")

        const carta = parseInt(prompt(["1) Desayunos \n" +
                                        "2) Almuerzos \n" +
                                        "3) Meriendas \n" +
                                        "4) Cenas \n" +
                                        "5) Volver atrás."])); 
            switch (carta) {
                case 1:
                    alert("Desayunos tropicales")
                    break;
                
                case 2:
                    alert("Almuerzos 'quita hambre' ")
                    break;
                case 3:
                    alert("Meriendas felices")
                    break;
                    
                case 4:
                    alert("Cenas 'buen provecho'")
                    break;

                case 5:
                    return entrada();
                        
                default:
                    alert("Lo siento, número incorrecto")
                    break;
            }
            
        break;
    
        case 2: alert("A ingresado a 'Promos', seleccione lo que desea ver.")

        const promosOpciones = parseInt(prompt([
            "1) Café con leche + 2 medialunas $220 \n" +
            "2) Café con leche + tostadas de campo $300 \n" +
            "3) Café con leche + tostado + jugo de naranja $390 \n" +
            "4) Volver atrás."
        ]))    
     
            switch (promosOpciones){
                case 1:
                        alert("A seleccionado con éxito la opcion 'Café con leche + 2 medialunas $220' ")
                    break;
                
                case 2: 
                        alert("A seleccionado con éxito la opcion 'Café con leche + tostadas de campo $300' ")
                    break;
                case 3:

                        alert("A seleccionado con éxito la opcion 'Café con leche + tostado + jugo de naranja $390' ")
                        break;

                case 4:
                    return entrada();

                default:
                    alert("Lo siento, número incorrecto")
                    break;
            }
         
        break;
    
        case 3: alert("A ingresado a 'Recomendaciones'.")
                alert("Recomendamos la opción tostado, ya que viene con jugo de naranja.")
        break;
    
        default:
            alert("Lo siento, número ingresado no es correcto.")
            return entrada();
    }
}

entrada();







