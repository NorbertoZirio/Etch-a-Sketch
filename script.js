//Seleccionando el contenedor de la red
const container=document.querySelector("#greedContainer")

//Tamanio inicial de la red
let greedSize=16

createGreed()

function createGreed(){
    //Limpiando el contenedor
    greedContainer.innerHTML=''
    
    let squareSize=640/greedSize
    
    //Creando los cuadrados de la red
    for (i=0;i<greedSize*greedSize;i++){
        const content=document.createElement("div")
        content.classList.add("greenSquare")
        content.style.width= `${squareSize}px`
        content.style.height= `${squareSize}px`
    

        greedContainer.appendChild(content)
    }

    //seleccionando los cuadrados
    const content=document.querySelectorAll(".greenSquare")


    //comportamiento de los cuadrados(Cambiar a rojo)
    content.forEach((greenSquare) => {
        greenSquare.addEventListener("mouseenter", function (e){
            e.target.style.background="red"
        })
    })
}





//Seleccionando el boton
const button=document.querySelector("button")

//Funcion para pedir el nuevo tamanio de la red y el comportamiento
function resetGreed(){
    
    const infoUser=prompt("De que tamanio desea la red: ")
    
    if (infoUser !=null && infoUser<=100 && infoUser>0){
        
        let infoInt=parseInt(infoUser)
        greedSize=infoInt
        //Actualizando
        createGreed()

        
    }else if (infoUser==null ){
        
        console.log("Operacion cancelada")
        

    }else alert("El limite permitido es entre 0 y 100")

}


button.addEventListener("click", resetGreed)