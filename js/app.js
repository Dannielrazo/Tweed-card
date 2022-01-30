let button = document.getElementById("button")
let counter = document.getElementById("counter")
let contador = 0


function cambio(){
    if(contador == 0){
        button.classList.add('heart2');
        button.classList.remove('heart');
        counter.innerHTML = 251
        contador = 1
    }else{
        button.classList.add('heart');
        button.classList.remove('heart2');
        counter.innerHTML = 250
        contador = 0
    }
}

button.addEventListener('click',cambio )