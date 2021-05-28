var body = document.body;
function preventBack() { window.history.forward(); }
setTimeout("preventBack()", 0);
window.onunload = function () { null };
preventBack();

var highscoreContainerEl =document.createElement("div");
highscoreContainerEl.style.display="flex";
highscoreContainerEl.style.justifyContent="center";
highscoreContainerEl.style.flexDirection="column";
// highscoreContainerEl.style.alignItems="center";
highscoreContainerEl.style.minHeight="100vh";

var highscoreHeaderEl = document.createElement("h1");
highscoreHeaderEl.textContent="HIGH SCORE";
highscoreHeaderEl.style.textAlign="flex-start";

highscoreContainerEl.appendChild(highscoreHeaderEl);

body.appendChild(highscoreContainerEl);


