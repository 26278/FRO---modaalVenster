// variabele die alle content van de modale vensters heeft
const content = document.querySelectorAll('.content');



// Alle modaal content verwijderen uit het DOM
for (let i = 0; i < content.length; i++) {
	let modaalNode = content[i];
	modaalNode.parentNode.removeChild(modaalNode);
}

//nodelist van alle modale knoppen die inhoud moeten oproepen
const modaalButtons = document.querySelectorAll('.button');
const modaalButtonsArray = [];
// toekomstige node-elementen aanmaken in variabelen

let background		= document.createElement('div');
background.className = 'modaalBackground';
let modaal					= document.createElement('div');
modaal.className 			= 'modaal';
let closeButton				= document.createElement('closeButton');
closeButton.className			= 'closeButton';
closeButton.innerHTML			= '&#x00D7;';

// Modale content aan DOM toevoegen

const voegInhoudToe = (event) => {
	const teller = modaalButtonsArray.indexOf(event.target);
	console.log(teller);
	modaal.appendChild(closeButton);
	modaal.appendChild(content[teller]);
	background.appendChild(modaal);
	document.body.appendChild(background);
}

//sluit het modale venster(Uit het DOM halen)
const sluitModaal = () => {
	modaal.innerHTML = '';
	background.innerHTML = '';
	document.body.removeChild(background);
}

//closeButton event sluiten geven
closeButton.addEventListener('click', sluitModaal);

// Alle modaalButtons in een array plaatsen en eventlistener toevoegen

for(let i=0; i < modaalButtons .length; i++) {
	//toevoegen aan de array
	modaalButtonsArray.push(modaalButtons[i]);
//Klik-event toevoegen
modaalButtons[i].addEventListener('click', voegInhoudToe);
}
