'use strict';

function dom_Set(evt){
	evt.preventDefault()

	const song = new Audio('assets/sounds/song.mp3');
	song.play();

	window.removeEventListener('touchstart', dom_Set, null)
	window.removeEventListener('click', dom_Set, null)

	document.querySelector('.before').remove();
	document.querySelector('.after').style.display='block';
}

window.addEventListener('touchstart', dom_Set)
window.addEventListener('click', dom_Set)