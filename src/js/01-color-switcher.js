const body = document.querySelector( 'body' );

const buttonStart = document.querySelector('button[data-start');
const buttonStop = document.querySelector( 'button[data-stop' );


let interval = 0;

buttonStop.disabled = true;

buttonStart.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  if ((buttonStart.disabled = true)) {
    buttonStop.disabled = false;
  }
});

buttonStop.addEventListener('click', () => {
  clearInterval(interval);
  if ((buttonStop.disabled = true)) {
    buttonStart.disabled = false;
  }
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
