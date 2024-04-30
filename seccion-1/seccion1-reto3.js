//verificacion de correos electronicos
const arrobapunto = (Elemento) => { 

    let simbolo = ["@","."];
    
    return Elemento.includes(simbolo)

};

while(true){

    let correo = prompt("Ingresa tu coreo electronico");
    let email = correo.split("");

    console.log(email);

    if(arrobapunto(email)==false){
        alert("El correo debe contener un @ y un . vuelve a intentarlo")
        continue;
    };

    let posicionsimbolos = email.indexOf("@")

    if(email[posicionsimbolos + 1] == "." || email[posicionsimbolos - 1] == "."){
        alert("El punto no puede ir al lado del @");
        continue;
    };

    if(email.includes(" ")){
        alert("El correo no puede contener espacios vacios.")
        continue;
    };

    alert("Correo electrónico válido");

    let validar = confirm("desea crear un nuevo correo")
    if(validar == false){
        break;
    };

};