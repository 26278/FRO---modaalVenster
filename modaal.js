// variabele die alle content van de modale vensters heeft
const modaalContent = document.querySelectorAll('.modaalContent');

// Alle modaal content verwijderen uit het DOM
for (let i = 0; i < modaalContent.length; i++) {
	let modaalNode = modaalContent[i];
	modaalNode.parentNode.removeChild(modaalNode);
}