class CountdownTimer {
  intervalId = null;
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timer() {
    if (this.targetDate > Date.now()) {
      this.intervalId = setInterval(() => {
        if (this.targetDate - 1001 < Date.now()) {
          clearInterval(intervalId);
        }
        const time = this.targetDate - Date.now();
        this.updateClockFace(time);
      }, 1000);
    }
  }
  updateClockFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    const refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const newCountDownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('March 15, 2021'),
});

newCountDownTimer.timer();
