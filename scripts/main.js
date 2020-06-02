setInterval(setClock, 1000);

const secondStick = document.getElementById('sec')
const minuteStick = document.getElementById('min')
const hourStick = document.getElementById('hr')

function setClock() {
	const currentDate = new Date();
	const secondRatio = currentDate.getSeconds() / 60;
	const minuteRatio = currentDate.getMinutes() / 60;
	const hourRatio = currentDate.getHours() / 12;

	setRotation(secondStick, secondRatio);
	setRotation(minuteStick, minuteRatio);
	setRotation(hourStick, hourRatio);

	if (new Date().getSeconds() <= 15){
		document.getElementById('sec').style.backgroundColor = 'red';
	}else if ((new Date().getSeconds() > 15) && (new Date().getSeconds() <= 30)) {
		document.getElementById('sec').style.backgroundColor = 'blue';
	}else if ((new Date().getSeconds() > 30) && (new Date().getSeconds() <= 45)) {
		document.getElementById('sec').style.backgroundColor = 'green';
	}else {
		document.getElementById('sec').style.backgroundColor = 'yellow';
	};
};

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360);
};

var month = new Date().getMonth() + 1;
var day = new Date().getDate();

	if (month < 10) {
		month = '0' + month;
	}
	if (day < 10) {
		day = '0' + day;
	}

document.getElementById('monthDay').innerHTML = day + '/' + month;


document.getElementById('sunContainer').onclick = function(){
	document.body.style.backgroundColor = '#4682B4';
};

document.getElementById('moonContainer').onclick = function(){
	document.body.style.backgroundColor = '#000E54';
};

