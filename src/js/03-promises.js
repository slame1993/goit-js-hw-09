import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firsform = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const newStep = document.querySelector('[name="step"]');
const NewAmount = document.querySelector('[name="amount"]');

firsform.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let checkAmount = NewAmount.valueAsNumber;
  let step = newStep.valueAsNumber;
  let delay = firstDelay.valueAsNumber;

  for (let position = 1; position <= checkAmount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
  }
  document.querySelector('.form').reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}