const blue = document.getElementById('blue');
const pink = document.getElementById('pink');
const green = document.getElementById('green');
const img = document.querySelector('img');
const newStyle = document.head.appendChild(document.createElement("style"));

const showBlue = () => {
    img.src = './blue.png';
    newStyle.innerHTML = "#number:hover {background: #03a9f4;} #card::before {content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #03a9f4; clip-path: circle(150px at 80% 20%); transition: 0.5s ease-in-out;} #card:hover:before {clip-path: circle(300px at 80% -20%)}";
}

const showGreen = () => {
    img.src = './green.png';
    newStyle.innerHTML = "#number:hover {background: #9bdc28;} #card::before {content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #9bdc28; clip-path: circle(150px at 80% 20%); transition: 0.5s ease-in-out;} #card:hover:before {clip-path: circle(300px at 80% -20%)}";
}

const showPink = () => {
    img.src = './pink.png';
    newStyle.innerHTML = "#number:hover {background: #e91e63;} #card::before {content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #e91e63; clip-path: circle(150px at 80% 20%); transition: 0.5s ease-in-out;} #card:hover:before {clip-path: circle(300px at 80% -20%)}";
}

blue.addEventListener('click', showBlue);
green.addEventListener('click', showGreen);
pink.addEventListener('click', showPink);
