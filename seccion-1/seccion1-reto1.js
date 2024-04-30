//creacion de usuario y correo y verificacion que no se repitan

let id = 0;
let nombreUsuario;
let dominio = "@mydominio.com";
let correo;
let divisionNombre = [];
let username;
let lastname;
let idusuario;
const user = {};




while(true){

    nombreUsuario = prompt("ingresa un nombre y un apellido");
    nombreUsuario.toLowerCase();
    divisionNombre = nombreUsuario.split(" ");
    console.log(divisionNombre);

    if(divisionNombre.length == 2 ){

        username = divisionNombre[0].slice(0,3);
        lastname = divisionNombre[1].slice(0,3);
        // console.log(username);
        // console.log(lastname);
        idusuario = username.concat(lastname);
        console.log(idusuario);
        correo = idusuario.concat(dominio);
        console.log(correo);

    }else{

        alert("!!! Dato no permitido debes ingresar un nombre y apellido ¡¡¡")
        continue;

    };

    let listaVerificacion = Object.keys(user);
    let busqueda = listaVerificacion.includes(idusuario);

    if (busqueda){

        id ++;
        lastname += 1;
        idusuario = username.concat(lastname);
        correo = idusuario.concat(dominio);
        user[idusuario] = correo;
        console.log(`Tu nombre de usuario es ${idusuario} \n Tu correo es ${correo}`);
        alert(`Tu nombre de usuario es ${idusuario} \n Tu correo es ${correo}`);

    }else{

        user[idusuario] = correo;
        console.log(`Tu nombre de usuario es ${idusuario}`);
        console.log(`Tu nombre de usuario es ${idusuario} \n Tu correo es ${correo}`);
        alert(`Tu nombre de usuario es ${idusuario} \n Tu correo es ${correo}`);

    };

    let validar = confirm("Deseas ingresar otro usuario.");
    if (validar == false){
        break;
    };

};

console.log(user);


