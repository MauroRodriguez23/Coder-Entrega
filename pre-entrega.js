let ingreseNombre = prompt("Por favor ingrese nombre");

function ingreso() {
    alert("¡Bienvenido a 'Big Coffe' " + " " + ingreseNombre + "!") ;
}

ingreso();



let preguntasPrimeras = ("Por favor de las siguientes opciones elegir lo que desea hacer")
alert(preguntasPrimeras);

            // OBJETOS DE CAFETERIA //

const objCafeteria = {
    cafe: "Café c/s leche doble $120 \n" ,
    precioCafe: 120,

    matecocido: "Matecocido o té, $100 \n",
    precioMatecocido: 100,

    capuccino:  "Capuccino $140 \n",
    precioCapuccino: 140,
    
    medialunas: "Medialunas dulces/saladas $80 c/u \n",
    precioMedialunas: 80,
    
    tostado:     "Tostado $300 \n",
    precioTostado: 300,

    carlitoComun: "Carlito común $350 \n",
    precioCarlitoComun: 350,

    carlitoEspecial: "Carlito especial $450 \n",
    precioCarlitoEspecial: 450,
                
    atras: "Volver atrás."            
}

        // OBJETOS DE PROMOS //

  const objPromos = {
            prom0:  "Café con leche + 2 medialunas $220 \n",
            precioProm0: 220,
        
            prom1:  "Café con leche + tostadas de campo $300 \n",
            precioProm1: 300,
        
            prom2: "Café con leche + tostado + jugo de naranja $390 \n",
            precioProm2: 390,
        
            atras:  "Volver atrás."      
             
        }




const opcionesCafeteria = [
    "0) Café c/s leche doble $120 \n" +
    "1) Matecocido o té, $100 \n" +
    "2) Capuccino $140 \n" +
    "3) Medialunas dulces/saladas $80 c/u \n" +
    "4) Tostado $300 \n" +
    "5) Carlito común $350 \n" +
    "6) Carlito especial $450 \n" +
    "7) Volver atrás."
]





const promosOpciones = [
    "0) Café con leche + 2 medialunas $220 \n" +
    "1) Café con leche + tostadas de campo $300 \n" +
    "2) Café con leche + tostado + jugo de naranja $390 \n" +
    "3) Volver atrás."
];   



    // MENU //

const arrayMenu = [ "1) Ver carta \n" +
                    "2) Ver promos \n" +
                    "3) Carrito"]

const resultadoPedidos = [];

        // FUNTION PRINCIPAL //

function verInicio() {
                
    let usuarioValor = Number(prompt(arrayMenu));
    if (usuarioValor === 1) {
        eligioCafeteria = Number(prompt(opcionesCafeteria));
       
            if(eligioCafeteria === 0) {
                resultadoPedidos.push(objCafeteria.precioCafe); 
            
            alert("Podes seguir comprando tranquilamente")
                return verInicio();
            }

            if(eligioCafeteria === 1) {
                resultadoPedidos.push(objCafeteria.precioMatecocido);
        
            alert("Podes seguir comprando tranquilamente")
                return verInicio();
            }

            if(eligioCafeteria === 2) {
                resultadoPedidos.push(objCafeteria.precioCapuccino);
            alert("Podes seguir comprando tranquilamente")
                return verInicio();
            }

            if(eligioCafeteria === 3) {
                resultadoPedidos.push(objCafeteria.precioMedialunas);
            alert("Podes seguir comprando tranquilamente")
                return verInicio();
            }

            if(eligioCafeteria === 4) {
                resultadoPedidos.push(objCafeteria.precioTostado);
            alert("Podes seguir comprando tranquilamente")
                return verInicio();
            }

            if(eligioCafeteria === 5) {
                resultadoPedidos.push(objCafeteria.precioCarlitoComun);
            alert("Podes seguir comprando tranquilamente")
                return verInicio();
            }

            if(eligioCafeteria === 6) {
                resultadoPedidos.push(objCafeteria.precioCarlitoEspecial);
            alert("Podes seguir comprando tranquilamente")
                return verInicio();
            }

            if(eligioCafeteria === 7) {
                return verInicio();
            }
        
            if(eligioCafeteria === 7){
                    return verInicio();      
            } if(eligioCafeteria > 7) {
                alert("Lo siento, opción incorrecta")
                return verInicio();
            }
    }

            // INICIO DE PROMOS
    if (usuarioValor === 2) {
        eligioProm = Number(prompt(promosOpciones));

            if (eligioProm === 0) {
                resultadoPedidos.push(objPromos.precioProm0);
                alert("Pods seguir comprando tranquilamente")
                return verInicio();
            }

            if (eligioProm === 1) {
                resultadoPedidos.push(objPromos.precioProm1);
                alert("Podes seguir comprando tranquilamente")
                return verInicio();
            }

            if (eligioProm === 2) {
                resultadoPedidos.push(objPromos.precioProm2);
                alert("Podes seguir comprando tranquilamente")
                return verInicio();
            }

            if (eligioProm === 3) {
                return verInicio();
            }

    }

    if (usuarioValor === 3) {
        //CARRITO
        alert(resultado());
        
    }
    }
    

    verInicio();

    function resultado () {
        return resultadoPedidos.reduce((acc, prod) => acc +prod, 0)
    }
    
   





