// verificacion de la contraseña y validacion que cumpla con las condiciones dadas
const tamañoContraseña = (posicion) => { return posicion.length >= 8};

const verificacionNumero = elento => {

    let numero = ["1","2","3","4","5","6","7","8","9","0"];
    return elento.some(posicion => numero.includes(posicion));

};

const verificacionLetra = elento => {

    let letras = ["a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"]
    
    return elento.some(posicion =>  letras.includes(posicion));
};

const verificacioncaracteresesp = elemento => {
    let caracterespecial = ['!', ' ', '@', ' ', '#', ' ', '$', ' ', '%',' ', '^', ' ', '&', ' ', '*', ' ', '(', ' ', ')', ' ', '+', ' ', '=', ' ', '_', ' ', '-',' ', '{', ' ', '}', ' ', '[', ' ', ']', ' ', ':', ' ', ';', ' ', '"', ' ', "'", ' ', '?', ' ', '<', ' ', '>', ' ', ',', ' ', '.', ' ', '|', ' ', '/', ' ', '\\', ' ', '~', ' ', '`'
    ];

    return elemento.some(posicion => caracterespecial.includes(posicion));
}


while(true){

    let contraseña = prompt(`Ingresa contraseña que cumpla con las siguientes condiciones:\n
                            -Debe tener como minimo 8 caracteres\n
                            .Debe contener al menos un numero\n
                            -Debe contener al menos una letra\n
                            -Debe contener al menos un caracter especial:\n`)

    let contra = contraseña.split("");
    console.log(contra)
    console.log(tamañoContraseña(contra))
    console.log(verificacionNumero(contra))
    console.log(verificacionLetra(contra))
    console.log(verificacioncaracteresesp(contra))
    if (tamañoContraseña(contra) == true && verificacionNumero(contra) == true && verificacionLetra(contra) == true && verificacioncaracteresesp(contra) == true){
        alert("contraseña segura")
        continue;
    }else{
        alert("contraseña insegura");
    };

    let validar = confirm("Desea ingresar una nueva contraseña")
    if(validar == false){
        break;
    }

}
