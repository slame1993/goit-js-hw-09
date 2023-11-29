function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const startButton = document.querySelector('button[data-start]');
  const bodyBackgr = document.body;
  let timerId;
  startButton.addEventListener('click', () => {
    startButton.setAttribute('disabled', '');
    stopButton.removeAttribute('disabled', '');
    timerId = setInterval(() => {
      bodyBackgr.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
  });
  
  const stopButton = document.querySelector('button[data-stop]');
  stopButton.setAttribute('disabled', '');
  stopButton.addEventListener('click', () => {
    clearInterval(timerId);
    startButton.removeAttribute('disabled', '');
    stopButton.setAttribute('disabled', '');
  });
