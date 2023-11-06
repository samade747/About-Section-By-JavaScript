const reviews = [
{ id: '01',
  section: 'history',
  detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolorum voluptates eum. Illo odio nisi esse laudantium excepturi nesciunt dolorum numquam placeat repudiandae rem non, beatae harum sint, impedit dolor.atur',
  image:  src= "./images/history.jpeg"},

{ id: '02',
  section: 'Vision',
  detail: 'ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolorum voluptates eum. Illo odio nisi esse laudantium excepturi nesciunt dolorum numquam placeat repudiandae rem non, beatae harum sint, impedit dolor.atur',
  image: src="./images/1697265904430.jpeg"
},

{ id: '03',
  section: 'Goals',
  detail: 'dolor sit amet consectetur, adipisicing elit. Omnis dolorum voluptates eum. Illo odio nisi esse laudantium excepturi nesciunt dolorum numquam placeat repudiandae rem non, beatae harum sint, impedit dolor.atur',
  image: src="./images/Capture321.PNG"
}

]

let currIndex = 0;

let imageArea = document.getElementById('ImageArea');
let boxtext = document.getElementById('boxtext');

imageArea.src = reviews[currIndex].image;
boxtext.textContent = reviews[currIndex].detail;
