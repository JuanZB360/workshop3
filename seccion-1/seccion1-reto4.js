// creacion de eventos 
let nombre , fecha , descripcion, id = 0, i = 0;
const listaeventos = [];


while(true){
    let menu = prompt(`Que deseas hacer:\n
                        1- Crear evento\n
                        2- Mostras eventos\n
                        3- Buscar elemento\n
                        4- Actualizar evento\n
                        5- eliminar evento\n
                        6- salir\n`);

    if (menu == 1){

        console.log("Crear elemento:")
        i++;
        id = "evento" + i;
        nombre = prompt("Ingresa el nombre del evento.").toLowerCase();
        fecha = prompt("Ingresa la fecha en que se realizara dd-mm-aa.").toLowerCase();
        descripcion = prompt("Ingresa la descripcion del evento.").toLowerCase();

        const eventos = Object.assign({},{
            id , nombre, fecha, descripcion
        })
        
        listaeventos.push(eventos);1

    }else if(menu == 2){

        console.log("Mostras elementos:")
        console.log(Object.values(listaeventos));
        for(let i of listaeventos){
            console.log(`${i.id} : ${i.nombre} - ${i.fecha} - ${i.descripcion}`);
        };

    }else if(menu == 3){

        console.log("Buscar elementos:");
        let busqueda = prompt("Ingresa el nombre del evento que buscas");
        let a = 0;
            for(let i of listaeventos){
                if(busqueda == i.id){
                    console.log(`${i.id} : ${i.nombre} - ${i.fecha} - ${i.descripcion}`);
                    a++;
                    continue;
                }else if(busqueda == i.nombre){
                    console.log(`${i.id} : ${i.nombre} - ${i.fecha} - ${i.descripcion}`);
                    a++
                    continue;
                };
            };
            if(a===0){
                alert("El evento no se encuentra registrado.");
                console.log("El evento no se encuentra registrado.");
            };

    }else if(menu == 4){

        a=0;
        console.log("actualizacion de eventos:");
    
        for(let i of listaeventos){
            console.log(`${i.id} : ${i.nombre} - ${i.fecha} - ${i.descripcion}`);
        };
        
        let editarevento = prompt("Ingresa el identificador del evento.");
        
        for(let i in listaeventos){
            if(listaeventos[i].id == editarevento){
                console.log(listaeventos[i]);
                nombre = prompt("Ingresa el nombre del evento.");
                fecha = prompt("Ingrese la fecha del evento.");
                descripcion = prompt("Ingrese la descripcion del evento");
                listaeventos[i].nombre = nombre;
                listaeventos[i].fecha = fecha;
                listaeventos[i].descripcion = descripcion;
                console.log(listaeventos[i]);
                a++;
                continue;
            }
        }
        if(a===0){
            alert("El evento no se encuentra registrado.");
            console.log("El evento no se encuentra registrado.");
        };

    }else if(menu == 5){

        alert("elemento ha eliminar:");
        console.log("elemento ha eliminar:");
        let eliminarevento = prompt("ingresa el identificador del evento que deseas eliminar.");
        let posicion = listaeventos.findIndex((evento) => {
            return evento.id == eliminarevento;
        });
        listaeventos.splice(posicion,1);
        console.log(listaeventos);   

    }else if(menu == 6){
        alert("Saliendo del programa");
        break
    };
};

