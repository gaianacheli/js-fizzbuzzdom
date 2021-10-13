/*esegua un ciclo da 1 a 100 
e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice
per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.*/

const list = document.querySelector ('.list')

for (let i= 1; i <= 100; i++){
    let boxContent = i
    let className = ""
    if (i % 3 == 0 && i % 5 == 0){
        boxContent = 'FrizzBuzz'
        className = 'red'
    }else if (i % 5 == 0){
        boxContent = 'Buzz'
        className = 'yellow'
    }else if  ( i % 3 == 0) {
        boxContent = 'Frizz'
        className = 'green'
    }
    const numberBox = `<li class="box ${className}"> ${boxContent} </li>`
    list.insertAdjacentHTML('beforeend', numberBox)    
}




