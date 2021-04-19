let postac = {
    name: "Pumba",
    date: "18 listopada 1994",
    craft: "dzik",
    description: "Gdy rodzina go porzuciła z powodu jego zapachu, postanowił ruszyć w świat. Kiedy spotkał Timona razem z nim szukał 'swojego miejsca na Ziemi'. Po poznaniu Simby razem z Timonem chcieli być wiecznymi przyjaciółmi, jednak ten po pewnym czasie uświadomił sobie, że chce odzyskać Ziemię. Pumba jako wierny przyjaciel postanowił mu pomóc. W rezultacie Lwia Ziemia ocalała, a Pumba razem z Timonem zostali niańkami Kiary. Simba, jako nadopiekuńczy ojciec często wysyłał ich do pilnowania przyszłej królowej. Podczas pierwszego polowania młodej lwicy także pognali za Kiarą, ale gdy ona ich zauważyła uciekła. Gdy doszło do walki Timon użył jego mocy, aby uratować życie przed lwicami.",
    images: ["img/1.png", "img/2.jpg", "img/3.jpg"],
    skill1: function(){
        return "Nażarłem się jak świnia!"
    },
    skill2: function(){
        return "O przepraszam";
    },
    skill3: function() {
        return "Zasadniczo mogło ci się coś stać."
    },
}

const nameDiv = document.querySelector(".name");
nameDiv.innerHTML = postac.name;
const dateDiv = document.querySelector(".date");
dateDiv.innerHTML = postac.date;
const craftDiv = document.querySelector(".craft");
craftDiv.innerHTML = postac.craft;
const descriptionP = document.querySelector(".description");
descriptionP.innerHTML = postac.description;

function getPhoto(indeks){
    return `<img src="${postac.images[indeks]}" alt="profile-picture">`;
}

const imageBox = document.querySelector(".image-box");
const number = Math.floor(Math.random() * 3);
const image = getPhoto(number);
imageBox.innerHTML = image;

function onButtonClick(e){
    const displayBox = document.querySelector(".display-box");
    const listOfClasses = e.srcElement.classList;
    if(listOfClasses.contains("btn-1")){
        displayBox.innerHTML = postac.skill1();
    }
    if(listOfClasses.contains("btn-2")){
        displayBox.innerHTML = postac.skill2();
    }
    if(listOfClasses.contains("btn-3")){
        displayBox.innerHTML = postac.skill3();
    }
}

const button1 = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");
const button3 = document.querySelector(".btn-3");

button1.addEventListener("click", onButtonClick);
button2.addEventListener("click", onButtonClick);
button3.addEventListener("click", onButtonClick);