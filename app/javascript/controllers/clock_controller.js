import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "time" ];

  connect() {
    this.startClock();
    console.log("clock_controller.js is loaded");
  }

  startClock() {
    this.updateTime();
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const now = new Date();
    const hours = this.pad(now.getHours());
    const minutes = this.pad(now.getMinutes());
    const seconds = this.pad(now.getSeconds());
    this.timeTarget.textContent = `${hours}:${minutes}:${seconds}`;
  }

  pad(time) {
    return time < 10 ? `0${time}` : time;
  }

  disconnect() {
    clearInterval(this.interval);
  }
}
