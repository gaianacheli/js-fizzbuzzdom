/*esegua un ciclo da 1 a 100 
e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice
per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.*/

const list = document.querySelector ('.list')

for (let i= 1; i <= 100; i++){
    if (i % 3 == 0) {
        document.write('ciao')
    }else if (i % 5 == 0){
        document.write('bello')
    }else if  ((i % 3 == 0 )&& (i % 5 == 0)){
        document.write('buono')

    }else {
        document.write(i)
    }
}
    
   
