import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//DOM elements
const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate = null;
let cutdownTimer = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0]

        if(selectedDate <= Date.now()) {
            iziToast.error({
                message: 'Please choose a date in the future',
                position: 'topRight',
            });
            startBtn.disabled = true;
        } else {
            userSelectedDate = selectedDate;
            startBtn.disabled = false;
        }
    },
  };

  flatpickr(refs.input, options);
