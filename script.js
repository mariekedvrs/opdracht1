// Globale opties
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = 'white';

// Variabelen
let chart1;
let chart2;
let chart3;

// Wanneer DOM geladen is
document.addEventListener("DOMContentLoaded", function(event) {

	// to do: measure screen width and adjust graph size settings

	// selecteer element
	let statistiek1 = document.getElementById('statistiek1').getContext('2d');
	let statistiek2 = document.getElementById('statistiek2').getContext('2d');
	let statistiek3 = document.getElementById('statistiek3').getContext('2d');

	// alle charts
    chart1 = new Chart(statistiek1, data1);
    chart2 = new Chart(statistiek2, data2);
    chart3 = new Chart(statistiek3, data3);
});


// Functies waarbij informatie kan worden toegevoegd aan de grafieken
function addDataStat1(){
	const name 	 = document.getElementById('naamS1').value;
	const number = document.getElementById('numS1').value;

	chart1.data.labels.push(name);
	chart1.data.datasets[0].data.push(number);

	chart1.update();
}

function addDataStat2(){
	const selectedValue	 = document.getElementById('naamS2').value;
	const number 		 = parseInt(document.getElementById('numS2').value);

	chart2.data.datasets[0].data[selectedValue] += number;

	chart2.update();
}

function addDataStat3(){
	const name	 = document.getElementById('naamS3').value;
	const number = document.getElementById('numS3').value;

	chart3.data.labels.push(name);
	chart3.data.datasets[0].data.push(number);

	chart3.update();
}


function deleteDataStat1(){

	chart1.data.labels.pop();
	chart1.data.datasets[0].data.pop();

	chart1.update();
}

function deleteDataStat2(){

	const selectedValue	 = document.getElementById('naamS2').value;
	const number 		 = parseInt(document.getElementById('numS2').value);

	chart2.data.datasets[0].data[selectedValue] -= number;

	chart2.update();
}

function deleteDataStat3(){

	chart3.data.labels.pop();
	chart3.data.datasets[0].data.pop();

	chart3.update();
}