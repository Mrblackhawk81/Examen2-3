function sumaPares(){
    const numeros= parseInt(document.getElementById('numero').value)
    let sumaImpares=0
    for(let i = 1; i<=numeros; i++){
        if(i % 2 !==0){
            document.write(i+'<br>')
        }else{
            sumaImpares += i;
        }
        //document.write(sumaImpares);
    }
    document.write('la suma de los pares es:',sumaImpares);
    //document.getElementById('resultado').texContent = 'suma de numeros pares' + sumaImpares;
    
}

function sistemaCrud(){

    const Nombre = [];
    let op= 1;
    do {
        console.log("1.-Agregar");
        console.log("2.-Mostrar");
        console.log("3.-Actualizar");
        console.log("4.-Eliminar");
        op= prompt ("ingrese un numero");
        if (op==1) {
            let nom =prompt("numero de nombres");
            for(let i=0; i<nom; i++){
                let name = prompt("nombre"+nom+(i+1));
                Nombre.push(name) 
            }
        }
        if (op==2){
            for(let i=0 ; i<Nombre.length; i++)
            console.log(Nombre[i]);
        }
        if (op==3){
            let up=prompt("actualizar pocision");
            ac=Nombre[up]
            console.log(ac);
            let nu=prompt("ingrese el nombre")
            Nombre[up]=nu;
        }
        if (op==4){
            Nombre.pop();
            for (let i=0; i<Nombre.length; i++){
                console.log(Nombre);
            }
        }
    } while (Nombre !=4);
}




