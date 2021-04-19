const photoBox = document.querySelector(".photo-box");
const thumbnailsBox = document.querySelector(".thumbnails-box");

const photos = [
  'https://cdn.glitch.com/da211808-0048-4a54-91f6-5cd04e74c951%2Fz-s-nqVDLh2WLus-unsplash.jpg?v=1614005635353',
  'https://cdn.glitch.com/da211808-0048-4a54-91f6-5cd04e74c951%2Fstephen-pedersen-3amCorLRlPk-unsplash.jpg?v=1614005641777',
  'https://cdn.glitch.com/da211808-0048-4a54-91f6-5cd04e74c951%2Fjake-colling-EoKkeiV5qds-unsplash.jpg?v=1614005638856',
  'https://cdn.glitch.com/da211808-0048-4a54-91f6-5cd04e74c951%2Ftaylor-durrer-t2XKo0kn8as-unsplash.jpg?v=1614005638416',
  'https://cdn.glitch.com/da211808-0048-4a54-91f6-5cd04e74c951%2Fclaudel-rheault-ZVbv1akA-l4-unsplash.jpg?v=1614005637504'
];

let currentPhoto = 0;

photoBox.innerHTML = `<img src="${photos[currentPhoto]}" alt="mountains"/>`;

thumbnailsBox.innerHTML = `
  <img src="${photos[0]}" alt="mountains" class="img img0"/>
  <img src="${photos[1]}" alt="mountains" class="img img1"/>
  <img src="${photos[2]}" alt="mountains" class="img img2"/>
  <img src="${photos[3]}" alt="mountains" class="img img3"/>
  <img src="${photos[4]}" alt="mountains" class="img img4"/>
`
const rightArrow = document.querySelector(".arrow.right");
const leftArrow = document.querySelector(".arrow.left");

console.log(rightArrow);
console.log(leftArrow);

function handleLeftClick(){
  if(currentPhoto == 0){
    currentPhoto = 4
  }
  else{
    --currentPhoto;
  }
  photoBox.innerHTML = `<img src="${photos[currentPhoto]}" alt="mountains"/>`;
}

function handleRightClick(){
  if(currentPhoto == 4){
    currentPhoto = 0;
  }
  else{
    ++currentPhoto;
  }
  photoBox.innerHTML = `<img src="${photos[currentPhoto]}" alt="mountains"/>`;
}

rightArrow.addEventListener('click', handleRightClick);
leftArrow.addEventListener('click', handleLeftClick)

const images = document.querySelectorAll(".img");
function addClickFunctionality(img, i){
  const handler = function(e){
    currentPhoto = i;
    photoBox.innerHTML = `<img src="${photos[currentPhoto]}" alt="mountains"/>`;
  }
  img.addEventListener('click', handler)
}
images.forEach(addClickFunctionality)