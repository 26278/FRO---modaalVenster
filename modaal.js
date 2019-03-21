// variabele die alle content van de modale vensters heeft
const modaalContent = document.querySelectorAll('.modaalContent');



// Alle modaal content verwijderen uit het DOM
for (let i = 0; i < modaalContent.length; i++) {
	let modaalNode = modaalContent[i];
	modaalNode.parentNode.removeChild(modaalNode);
}

//nodelist van alle modale knoppen die inhoud moeten oproepen
const modaalKnoppen = document.querySelectorAll('.modaalKnop');
const modaalKnoppenArray = [];
// toekomstige node-elementen aanmaken in variabelen

let modaalAchtergrond		= document.createElement('div');
modaalAchtergrond.className = 'modaal-achtergrond';
let modaal					= document.createElement('div');
modaal.className 			= 'modaal';
let sluitknop				= document.createElement('button');
sluitknop.className			= 'sluitknop';
sluitknop.innerHTML			= '&#x00D7;';

// Modale content aan DOM toevoegen

const voegInhoudToe = (event) => {
	const teller = modaalKnoppenArray.indexOf(event.target);
	console.log(teller);
	modaal.appendChild(sluitknop);
	modaal.appendChild(modaalContent[teller]);
	modaalAchtergrond.appendChild(modaal);
	document.body.appendChild(modaalAchtergrond);
}

//sluit het modale venster(Uit het DOM halen)
const sluitModaal = () => {
	modaal.innerHTML = '';
	modaalAchtergrond.innerHTML = '';
	document.body.removeChild(modaalAchtergrond);
}

//Sluitknop event sluiten geven
sluitknop.addEventListener('click', sluitModaal);

// Alle modaalknoppen in een array plaatsen en eventlistener toevoegen

for(let i=0; i < modaalKnoppen .length; i++) {
	//toevoegen aan de array
	modaalKnoppenArray.push(modaalKnoppen[i]);
//Klik-event toevoegen
modaalKnoppen[i].addEventListener('click', voegInhoudToe);
}
