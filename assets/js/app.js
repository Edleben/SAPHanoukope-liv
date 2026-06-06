//q: Create a function that will check all the elements to see which one is causing overflow and fix it
//a:	https://stackoverflow.com/questions/143815/detecting-overflow-of-an-element

function checkOverflow() {
	var elements = document.querySelectorAll('app-root *');
	elements.forEach(function (element) {
		if (element.scrollWidth > element.clientWidth) {
			console.log('Element that is overflowing:', element);
			element.style.overflowX = 'hidden';
		}
		console.log('Element that is not overflowing:', element);
	});
}

checkOverflow();

/* Bible Verses to be displayed in the carousel */
GLOBALBIBLE.init({
	url: "https://bibles.org",
	bible: "555fef9a6cb31151-01"
})

console.log(GLOBALBIBLE);
// q: how to make the carousel auto slide
// a: add data-bs-interval="1000" to the carousel element
// q: how to make the carousel slide on hover
// a: add data-bs-pause="hover" to the carousel element
// q: how to make the carousel slide on click
// a: add data-bs-pause="false" to the carousel element

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel);

// A function to get the Bible verses from the API



