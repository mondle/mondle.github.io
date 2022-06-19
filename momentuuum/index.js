const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
	h1.classList.toggle("clicked"); // classList에 clicked가 없으면 추가, 있으면 삭제
	console.log("Done!");
}

h1.addEventListener("click", handleTitleClick);
