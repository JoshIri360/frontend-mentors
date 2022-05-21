let image = document.querySelector(".equi");
let eye = document.querySelector(".eye");
eye.addEventListener("mouseleave", () => {
	if (!eye.classList.contains("hide")) eye.classList.add("hide");
});
eye.addEventListener("mouseover", () => {
	if (eye.classList.contains("hide")) eye.classList.remove("hide");
	console.log("over");
});
image.addEventListener("mouseleave", () => {
	if (!eye.classList.contains("hide")) eye.classList.add("hide");
});
image.addEventListener("mouseover", () => {
	if (eye.classList.contains("hide")) eye.classList.remove("hide");
});
