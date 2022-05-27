const h2 = document.querySelector('h2');
const color1_div = document.getElementById('color1');
const color2_div = document.getElementById('color2');
const color3_div = document.getElementById('color3');
const color4_div = document.getElementById('color4');
const color5_div = document.getElementById('color5');

const colorYellow = '#FFD02F';
const colorRed = '#F45B58';
const colorGreen = '#70C172';
const colorBlue = '#4BAEF4';
const colorGrey = '#C3C3C3';

color1_div.addEventListener('click', colorChangeYellow);

color2_div.addEventListener('click', colorChangeRed);

color3_div.addEventListener('click', colorChangeGreen);

color4_div.addEventListener('click', colorChangeBlue);

color5_div.addEventListener('click', colorChangeGrey);

function colorChangeYellow() {
	document.body.style.backgroundColor = colorYellow;
	h2.style.color = colorYellow;
}

function colorChangeRed() {
	document.body.style.backgroundColor = colorRed;
	h2.style.color = colorRed;
}

function colorChangeGreen() {
	document.body.style.backgroundColor = colorGreen;
	h2.style.color = colorGreen;
}

function colorChangeBlue() {
	document.body.style.backgroundColor = colorBlue;
	h2.style.color = colorBlue;
}

function colorChangeGrey() {
	document.body.style.backgroundColor = colorGrey;
	h2.style.color = colorGrey;
}
