console.clear();
let allStars = document.querySelectorAll(`.star`);
let submit = document.querySelector(`.submit`);
let rateNo = document.querySelector(`.rating`);
let page1 = document.querySelector(`.page1`);
let page2 = document.querySelector(`.page2`);
rating = 0;
for (let i = 0; i < allStars.length; i++) {
	allStars[i].addEventListener("click", function (params) {
		for (let i = 0; i < allStars.length; i++) {
			allStars[i].classList.remove("bg-Orange");
			allStars[i].classList.add("text-mGrey");
			allStars[i].classList.add("hover:bg-lGrey");
		}
		allStars[i].classList.remove("hover:text-white");
		allStars[i].classList.add("text-white");
		allStars[i].classList.remove("text-mGrey");
		allStars[i].classList.add("bg-Orange");
		allStars[i].classList.remove("hover:bg-lGrey");
		rating = i + 1;
	});
}

function submitted() {
	rateNo.textContent = rating;
	page1.classList.add("hidden");
	page2.classList.remove("hidden");
}
submit.addEventListener("click", submitted);
