// Selectors
let comicImage = document.querySelector('.comic-img');
let comicTitle = document.querySelector('.comic-title');
let comicNumber = document.querySelector('.comic-num');
let url = 'https://xkcdapi.now.sh/';

function fetchInfo() {
	// Create XHR Object
	let request = new XMLHttpRequest();
	// Open Method (HTTP Method, url, async)
	request.open('GET', url, true);
	// Function when request completes
	request.onload = function() {
		if (this.status === 200) {
			let response = JSON.parse(this.responseText);
			comicImage.src = response.imgRetina;
			comicImage.alt = response.alt;
			comicTitle.innerHTML = 'Title: ' + response.title;
			comicNumber.innerHTML = 'Comic Nº: ' + response.num;
		} else if (this.status === 404) {
				console.error('Error 404');
		}
	};
	// Send request
	request.send();
};

window.onload = fetchInfo();