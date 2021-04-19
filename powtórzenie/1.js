//Tworzenie obiektów
const obj1 = Object();
obj1.b = 17;
const obj2 = {
    a: 5
}

//Odnoszenie się do atrykbutów obiektów
console.log(obj2["a"]);
console.log(obj2.a);

//Funcje
function fun1(a, b){
    let wynik = a + b;
    return wynik;
}
const fun2 = function (a, b){
    let wynik = a + b;
    return wynik;
}
const fun3 = (a, b) => {
    let wynik = a + b;
    return wynik;
}

//Chwytanie elemntów HTML
const selektor = ".nazwa-klasy"
const elemt = document.querySelector(selektor); //pierwszy element spełniający selektor
const listaElemntów = document.querySelectorAll(selektor); //lista elemetów spełniających selektor

//Zdarzenia
const handler = function (e){
    //instrukcje które wynkonają sie po zdarzeniu
}
addEventListener('click', handler);