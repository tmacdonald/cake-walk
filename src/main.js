import "./style.css";

const winners = new Set();

document.querySelector("#app").innerHTML = `
  <div>
    <form>
      <input type="number" name="candidate" />
    </form>
    <div id="status"></div>
    <div class="buttons">
      <input type="button" value="1" />
      <input type="button" value="2" />
      <input type="button" value="3" />
      <input type="button" value="4" />
      <input type="button" value="5" />
      <input type="button" value="6" />
      <input type="button" value="7" />
      <input type="button" value="8" />
      <input type="button" value="9" />
      <input type="button" value="0" />
    </div>
  </div>
`;

const form = document.querySelector("form");
const status = document.querySelector("#status");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const candidate = form.elements.candidate.value;
  if (winners.has(candidate)) {
    status.innerHTML = "already won";
  } else {
    winners.add(candidate);
    status.innerHTML = "new winner";
  }
});

const numberButtons = document.querySelectorAll(
  '.buttons > input[type="button"]'
);
numberButtons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    const number = ev.target.value;
    const candidate = form.elements.candidate.value;
    form.elements.candidate.value = candidate + number;
  });
});
