const items = document.querySelectorAll(".item");
let currentPlayer = 0;
console.log(items)

// //definicja funkcji
// function add2(a){
//     return a + 2;
// }
// //definicja znajduje się w zmiennej o nazwie f-cji
// console.log(add2); //defnicja
// //wywołanie funkcji
// console.log(add2(4)); //6

function addListnerToItem(item){
    item.addEventListener('click', function (e){
        if(e.target.innerText == ""){
            if(currentPlayer == 0){
                e.target.innerText = 'X';
                currentPlayer = 1;
            }
            else{
                e.target.innerText = 'O';
                currentPlayer = 0;
            }

            //Wiersze
            if(items[0].innerText == items[1].innerText && items[1].innerText == items[2].innerText){
                console.log("Wygrał gracz " + items[0].innerText)
            }
            if(items[3].innerText == items[4].innerText && items[4].innerText == items[5].innerText){
                console.log("Wygrał gracz " + items[0].innerText)
            }
            if(items[6].innerText == items[7].innerText && items[7].innerText == items[8].innerText){
                console.log("Wygrał gracz " + items[0].innerText)
            }
            //Kolumny
            if(items[0].innerText == items[3].innerText && items[3].innerText == items[6].innerText){
                console.log("Wygrał gracz " + items[0].innerText)
            }
            if(items[1].innerText == items[4].innerText && items[4].innerText == items[7].innerText){
                console.log("Wygrał gracz " + items[0].innerText)
            }
            if(items[2].innerText == items[5].innerText && items[5].innerText == items[8].innerText){
                console.log("Wygrał gracz " + items[0].innerText)
            }
            //Ukos
            if(items[0].innerText == items[4].innerText && items[4].innerText == items[8].innerText){
                console.log("Wygrał gracz " + items[0].innerText)
            }
            if(items[2].innerText == items[4].innerText && items[4].innerText == items[6].innerText){
                console.log("Wygrał gracz " + items[0].innerText)
            }

        }
    })
}

items.forEach(addListnerToItem);