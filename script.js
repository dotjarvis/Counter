const number = document.querySelector(`.number`);
const center = document.querySelector(`.center`);

center.addEventListener(`click`, function (e) {
  let numberValue = +number.textContent;

  const btn = e.target.closest(`.btn`);
  if (!btn) return;

  if (btn.classList.contains(`decrease`)) {
    number.textContent = numberValue - 1;
    if (+number.textContent < 0) number.style.color = `red`;
  }

  if (btn.classList.contains(`increase`)) {
    number.textContent = numberValue + 1;
    if (+number.textContent > 0) number.style.color = `green`;
  }

  if (btn.classList.contains(`reset`)) {
    number.textContent = 0;
  }

  if (+number.textContent === 0) number.style.color = `black`;
});
