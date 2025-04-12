import "./style.css";

const winnersJSON = window.localStorage.getItem("winners");
const winners = winnersJSON ? JSON.parse(winnersJSON) : [];

document.querySelector("#app").innerHTML = `
  <div>
    <form>
      <input type="number" name="candidate" />
      <input type="button" value="1" />
      <input type="button" value="2" />
      <input type="button" value="3" />
      <input type="button" value="4" />
      <input type="button" value="5" />
      <input type="button" value="6" />
      <input type="button" value="7" />
      <input type="button" value="8" />
      <input type="button" value="9" />
      <button id="undo">&lt;</button>
      <input type="button" value="0" />
      <input type="submit" value=">" />
    </form>
    <div id="status"></div>
    
  </div>
`;

const form = document.querySelector("form");
const undo = document.querySelector("#undo");
const status = document.querySelector("#status");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const candidate = form.elements.candidate.value;
  if (winners.includes(candidate)) {
    status.innerHTML = "already won";
  } else {
    winners.push(candidate);
    status.innerHTML = "new winner";
    window.localStorage.setItem("winners", JSON.stringify(winners));
  }
  form.elements.candidate.value = "";
});

undo.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (form.elements.candidate.value) {
    form.elements.candidate.value = "";
  } else {
    winners.splice(winners.length - 1);
    window.localStorage.setItem("winners", JSON.stringify(winners));
  }
});

const numberButtons = document.querySelectorAll('input[type="button"]');
numberButtons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    const number = ev.target.value;
    const candidate = form.elements.candidate.value;
    form.elements.candidate.value = candidate + number;
  });
});
