const reviews = [
{ id: '01',
  section: 'history',
  detail: "History is the record of humanity's past, documenting events, societies, and individuals that shaped our world. It provides valuable insights into our roots, cultures, and progress. Studying history helps us understand the present and make informed decisions for the future, ensuring that we learn from our collective experiences.",
  image:  src= "./images/history.jpeg"},

{ id: '02',
  section: 'Vision',
  detail: "Vision is the ability to perceive and interpret our surroundings, crucial for navigating the world. It extends beyond physical sight, encompassing aspirations and goals. A clear vision guides us, providing purpose and direction. It empowers individuals and organizations to strive for a better future, driving innovation and growth.",
  image: src="./images/1697265904430.jpeg"
},

{ id: '03',
  section: 'Goals',
  detail: "Goals are the targets we set, reflecting our aspirations and desires. They provide direction and purpose, motivating us to take action and achieve our dreams. Whether personal or professional, well-defined goals serve as a roadmap, helping us measure progress and celebrate achievements along the way.",
  image: src="./images/Capture321.PNG"
}

]

let currIndex = 0;

let imageArea = document.getElementById('ImageArea');
let boxtext = document.getElementById('boxtext');

imageArea.src = reviews[currIndex].image;
boxtext.textContent = reviews[currIndex].detail;


function History(){
    currIndex = 0;
    let imageArea = document.getElementById('ImageArea');
    let boxtext = document.getElementById('boxtext');

    imageArea.src = reviews[currIndex].image;
    boxtext.textContent = reviews[currIndex].detail;
}


function Vision(){
    currIndex = 1;
    let imageArea = document.getElementById('ImageArea');
    let boxtext = document.getElementById('boxtext');

    imageArea.src = reviews[currIndex].image;
    boxtext.textContent = reviews[currIndex].detail;
}

function Goals(){
    currIndex = 2;
    let imageArea = document.getElementById('ImageArea');
    let boxtext = document.getElementById('boxtext');

    imageArea.src = reviews[currIndex].image;
    boxtext.textContent = reviews[currIndex].detail;
}