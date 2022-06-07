hamburger_o = document.querySelector(".hamburger-o");
hamburger_c = document.querySelector(".hamburger-c");
navigation = document.querySelector(".navigation-primary");
hamburger_o.addEventListener("click", () => {
	console.log(hamburger_o.classList.add("hidden"));
	console.log(hamburger_c.classList.remove("hidden"));
	console.log(navigation.classList.remove("hidden"));
});
hamburger_c.addEventListener("click", () => {
	console.log(hamburger_o.classList.remove("hidden"));
	console.log(hamburger_c.classList.add("hidden"));
	console.log(navigation.classList.add("hidden"));
});
