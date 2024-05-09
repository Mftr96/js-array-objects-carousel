//creo l'array di oggetti 
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//dichiamo il div in JS con una variabile
let slide=document.getElementById("container");

/*costruisco il ciclo per iniettare contenuto HTML
al momento le slide hanno tutte classe none */

for (let i = 0; i < images.length; i++) {
    const immagine = images[i];
    let imagePosition="";
    //creo in una variabile il codice HTML da iniettare
    let immagine_slide=`
	<div class="none">
		<img src="${immagine.image}" style="${imagePosition}" />
		<div class="caption">
			<h2>${immagine.title}</h2>
			<p>${immagine.text}</p>
		</div>
	</div>`;
    //inietto in pagina tramite div richiamato in precedenza
    slide.innerHTML+=immagine_slide;
    
}

//dichiaro il numero della prima slide selezionata 
let slide_selezionata=0
//rendo l'immagine attiva tramite aggiunta di classe 
document.querySelectorAll(".none")[slide_selezionata].classList.add("active");