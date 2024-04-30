//sistema de gestion de inventario

let id = 0,nombre, precio, cantidad, descripcion, inventario = [], listmalaspala = [];

while(true){
    let menu = prompt(`Menu:\n
                1- Agregar productor.\n
                2- Duplicar producto.\n
                3- visualizar y buscar.\n
                4- actualizacion de productos.\n
                5- Eliminar producto.\n
                6- Verificacion de exixtencia.\n
                7- Venta de productos.\n
                8- compra de producto\n
                9- Calculo de inventario\n
                10- ordenar productos.\n
                11- Censurar malas palabras en los productos\n
                12- Reporte General de productos`);

    if(menu == 1){

        console.log("Agregar producto.");

        id ++;
        nombre = prompt("Ingresa nombre del producto: ");
        precio = Number(prompt("Ingresa el precio del producto: "));
        cantidad = Number(prompt("Ingresa la cantidad: "));
        descripcion = prompt("Ingresa descripcion del producto: ");

        const producto = Object.assign({},{
            id,
            nombre,
            precio,
            cantidad,
            descripcion
        });

        console.log(producto);
        inventario.push(producto);

    }else if(menu == 2){

        console.log("Duplicar producto.");


        for (let i in inventario){
            console.log(`Id:  ${inventario[i].id} -- nombre: ${inventario[i].nombre} -- precio: ${inventario[i].precio}\n cantidad: ${inventario[i].cantidad} -- descripcion: ${inventario[i].descripcion}`);
        };

        let idduplicar = prompt("Ingresa el codigo del producto que deseas duplicar: ");

        let prodduplicar = inventario[idduplicar - 1];
        console.log(prodduplicar);

        let dupli = 0;

        for(let i in inventario){

            if(inventario[i].nombre.startsWith(prodduplicar.nombre)){
                dupli++ ;
            };

        };
        
        const duplicadodeproducto = Object.assign({},{
            id: ++id,
            nombre: prodduplicar.nombre + "copy" + dupli,
            precio: prodduplicar.precio,
            cantidad: prodduplicar.cantidad,
            descripcion: prodduplicar.descripcion,
        });

        inventario.push(duplicadodeproducto);
        console.log(inventario);

    }else if(menu == 3){

        console.log("visualizacion y busqueda de productos.");

        for (let i in inventario){
            console.log(`Id:  ${inventario[i].id} -- nombre: ${inventario[i].nombre} -- precio: ${inventario[i].precio}\n cantidad: ${inventario[i].cantidad} -- descripcion: ${inventario[i].descripcion}`);
        };

        let busqueda = prompt(`Menu:\n
                                1- Buscar un producto por nombre.\n
                                2- Buscar lista de productos por precio.\n`);
        
        
        if(busqueda == 2){
            let busproduc = Number(prompt("Ingresa el precio que estas buscando"));
            let resultados = [];
            inventario.forEach(element => {
                if(element.precio == busproduc){
                    resultados.push(element);
                };
            });
            console.log(resultados);
        }else if(busqueda == 1){
            let busproduc = prompt("Ingresa el nombre del producto que estas buscando")
            let resultados = [];
            inventario.forEach(element => {
                if (element.nombre.startsWith(busproduc)){
                    resultados.push(element);
                }
            });
            console.log(resultados);
        }

    }else if(menu == 4){

        console.log("Modificacion de productos.");
        let prodActualizar = Number(prompt("Ingresa el id del producto que deseas modificar."));

        inventario.forEach(element => {
            if(element.id === prodActualizar){
                console.log(element);

                while(true){
                    let menu = prompt(`Que deseas modificar:\n
                                        1- Nombre.
                                        2- Precio.
                                        3- Cantidad.
                                        4- Descripcion.
                                        5- Salir.\n`);
                    if(menu == 1){
                        nombre = prompt("Nuevo nombre del producto:");
                        element.nombre = nombre;
                    }else if(menu == 2){
                        precio = Number(prompt("nuevo precio:"));
                        element.precio = precio;
                    }else if(menu == 3){
                        cantidad = Number(prompt("Nueva cantidad"));
                        element.cantidad = cantidad;
                    }else if(menu == 4){
                        descripcion = prompt("Nueva descripcion:");
                        element.descripcion = descripcion;
                    }else if(menu == 5){
                        break;
                    } 
                
                
                }
                console.log(element);
            };
        });
        
    }else if (menu == 5){

        console.log("Eliminar producto");

        for (let i in inventario){
            console.log(`Id:  ${inventario[i].id} -- nombre: ${inventario[i].nombre} -- precio: ${inventario[i].precio}\n cantidad: ${inventario[i].cantidad} -- descripcion: ${inventario[i].descripcion}`);
        };

        let productoeliminar = Number(prompt("ingresa el id del producto que deseas eliminar."))

        inventario = inventario.filter(element => element.id !== productoeliminar);
        console.log(inventario);
        console.log("Se ha eliminado el producto.")

    }else if (menu == 6){

        console.log("verificacion de existencia del producto.");
        
        let verificacionprod = prompt("ingresa nombre del producto");
        let verificarcantidad = Number(prompt("Que cantidad deseas:"));

        for(let i in inventario){
            if(inventario[i].nombre == verificacionprod){

                if(inventario[i].cantidad >= verificarcantidad){
                    alert(`Hay ${inventario[i].cantidad} unidades de ${inventario[i].nombre}`);
                    console.log(`Hay ${inventario[i].cantidad} unidades de ${inventario[i].nombre}`);
                }else{
                    alert(`Hay ${inventario[i].cantidad} unidades de ${inventario[i].nombre} no hay la cantidad que pide el clienta`);
                    console.log(`Hay ${inventario[i].cantidad} unidades de ${inventario[i].nombre} no hay la cantidad que pide el clienta`);
                };
                console.log(inventario[i]);
            };
        };        

    }else if(menu == 7){

        console.log("venta de productos");
        let compra = prompt("Ingresa el nombre del producto que deseas.")
        let cantidadcompra = Number(prompt("Cuantos deseas comprar."))
        
        for(let i in inventario){
            if(inventario[i].nombre == compra){
                if(inventario[i].cantidad >= cantidadcompra){                    
                    inventario[i].cantidad -= cantidadcompra;
                    console.log("Compra realizada exitosamente.");
                    console.log(inventario[i]);
                    alert("Compra realizada exitosamente.");
                }else{
                    console.log("No hay unidades.");
                    alert("No hay unidades.");
                }
            };
        };
        
    }else if(menu ==8){

        console.log("Compra de productos.");
        let compra = prompt("Ingresa el nombre del producto que vas a comprar.");
        let cantidad = Number(prompt("Que cantidad vas a comprar."));
        for(let i in inventario){
            if(inventario[i].nombre == compra){
                if(inventario[i].cantidad > 0){                    
                    inventario[i].cantidad +=cantidad;
                    console.log("Compra realizada exitosamente.");
                    console.log(inventario[i]);
                    alert("Compra realizada exitosamente.");
                };
            };
        };

    }else if(menu == 9){

        console.log("Valor total del inventario.");

        let acumulador = 0;

        inventario.forEach(element => {
            let dineroproduc = 0;
            for(let i=1;i<=element.cantidad;i++){
                dineroproduc+=element.precio;
            };
            acumulador += dineroproduc;
        })
        console.log(`En el inventario hay $${acumulador}.`)

    }else if(menu == 10){

        console.log("ordenas los productos de manera ascendente o descendente segun desee el usuario.")

        let ordenar = prompt(`Desea ordenar los productos por:\n
                                1- Nombre\n 
                                2- Precio.\n
                                3- Cantidad.\n
                                4- Desacripcion`);
        if(ordenar == 2){

            let ascendescen = prompt(`deseas ordenarlo:\n
                                        1- Ascendente\n
                                        2- Descendente\n`);

            if(ascendescen == 1){
                inventario.sort((a,b) => {
                    if(a.precio < b.precio){return -1;};
                    if(a.precio > b.precio){return 1;};
                    return 0;
                });
                console.log(inventario);
            }else if(ascendescen == 2){
                inventario.sort((a,b) => {
                    if(a.precio < b.precio){return 1;};
                    if(a.precio > b.precio){return -1;};
                    return 0;
                });
                console.log(inventario);
            }

        }else if(ordenar ==3){

            let ascendescen = prompt(`deseas ordenarlo:\n
                                        1- Ascendente\n
                                        2- Descendente\n`);

            if(ascendescen == 1){
                inventario.sort((a,b) => {
                    if(a.cantidad < b.cantidad){return -1;};
                    if(a.cantidad > b.cantidad){return 1;};
                    return 0;
                });
                console.log(inventario);
            }else if(ascendescen == 2){
                inventario.sort((a,b) => {
                    if(a.cantidad < b.cantidad){return 1;};
                    if(a.cantidad > b.cantidad){return -1;};
                    return 0;
                });
                console.log(inventario);
            }

        }else if(ordenar ==1){

            let ascendescen = prompt(`deseas ordenarlo:\n
                                        1- Ascendente\n
                                        2- Descendente\n`);

            if(ascendescen == 1){
                inventario.sort((a,b) => {
                    if(a.nombre < b.nombre){return -1;};
                    if(a.nombre > b.nombre){return 1;};
                    return 0;
                });
                console.log(inventario);
            }else if(ascendescen == 2){
                inventario.sort((a,b) => {
                    if(a.nombre < b.nombre){return 1;};
                    if(a.nombre > b.nombre){return -1;};
                    return 0;
                });
                console.log(inventario);
            }

        }else if(ordenar ==4){

            let ascendescen = prompt(`deseas ordenarlo:\n
                                        1- Ascendente\n
                                        2- Descendente\n`);

            if(ascendescen == 1){
                inventario.sort((a,b) => {
                    if(a.descripcion < b.descripcion){return -1;};
                    if(a.cantidad > b.descripcion){return 1;};
                    return 0;
                });
                console.log(inventario);
            }else if(ascendescen == 2){
                inventario.sort((a,b) => {
                    if(a.descripcion < b.descripcion){return 1;};
                    if(a.descripcion > b.descripcion){return -1;};
                    return 0;
                });
                console.log(inventario);
            }

        }
        

    }else if(menu == 11){

        console.log("Censurar malas palabras en los productos.");
        let palabrasprohibidas = [];
        while(true){
            let palabra = prompt("ingresa palabra que consideres inadecuada: ");
            palabrasprohibidas.push(palabra);
            let validar = confirm("Deseas ingresar otra palabra.");
            if(validar == false){break};
        };

        let descrimodifi=[];
        let acum = 0;

        for(let i in inventario){
            descrimodifi = inventario[i].descripcion.split(" ");
            for(let j in descrimodifi){
                for(let a in palabrasprohibidas){
                    if(descrimodifi[j] == palabrasprohibidas[a]){
                        let blacklistedproducts = Object.assign({}, inventario[i])
                        listmalaspala.push(blacklistedproducts);
                        descrimodifi[j] = "******";
                    }
                }
            };

            inventario[i].descripcion = descrimodifi.join(" ");
            console.log(inventario[i]);
            
        }
        console.log("Lista de malas palabras: ");
        console.log(listmalaspala);
            

    }else if(menu == 12){
        console.log("Reposte General.");

        console.log(`cantidad de productos: ${inventario.length}`);

        let acumulador = 0;

        inventario.forEach(element => {
            let dineroproduc = 0;
            for(let i=1;i<=element.cantidad;i++){
                dineroproduc+=element.precio;
            };
            acumulador += dineroproduc;
        })
        console.log(`En el inventario hay $${acumulador}.`)


        inventario.sort((a,b) => {
            if(a.precio < b.precio){return -1;};
            if(a.precio > b.precio){return 1;};
            return 0;
        });
        console.log(inventario);
        let barato = [];
        let caro = [];

        for(let i=0; i <= 2; i++){
            barato.push(inventario[i]);
        };

        inventario.sort((a,b) => {
            if(a.precio < b.precio){return 1;};
            if(a.precio > b.precio){return -1;};
            return 0;
        });

        for(let i = 0; i <= 2; i++){
            caro.push(inventario[i]);
        };

        console.log(`La cantidad de productos mas caros es de ${caro.length}`)
        console.log(caro);
        console.log(`La cantidad de productos mas baratos es de ${barato.length}`)
        console.log(barato);

        inventario.sort((a,b) => {
            if(a.cantidad < b.cantidad){return -1;};
            if(a.cantidad > b.cantidad){return 1;};
            return 0;
        });
        console.log(inventario);

        let mayorcan = [];
        let menorcan = [];
        for(let i=0; i <= 2; i++){
            menorcan.push(inventario[i]);
        };

        inventario.sort((a,b) => {
            if(a.cantidad < b.cantidad){return -1;};
            if(a.cantidad > b.cantidad){return 1;};
            return 0;
        });

        for(let i = 0; i <= 2; i++){
            mayorcan.push(inventario[inventario.length-i]);
        };

        console.log(`La cantidad de productos mayor cantida es de ${mayorcan.length}`)
        console.log(caro);
        console.log(`La cantidad de productos con menor cantidad es de ${menorcan.length}`)
        console.log(barato);

        console.log(`Los productos con malas palabras son ${listmalaspala.length}`);
        console.log(listmalaspala)

        
    }else if(menu == 13){
        break;
    }

};