import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["increment", "decrement", "audience"];

  connect() {
    this.incrementTarget.addEventListener('click', (e) => this.increment(e));
    this.decrementTarget.addEventListener('click', (e) => this.decrement(e));
    console.log("hide_button_controller.js is loaded");
  }

  increment(e) {
    e.preventDefault();
    this.sendRequest(this.incrementTarget.dataset.url);
  }

  decrement(e) {
    e.preventDefault();
    this.sendRequest(this.decrementTarget.dataset.url);
  }

  sendRequest(url) {
    fetch(url, {
      method: 'POST',
      headers: { 'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(data => {
      this.audienceTarget.innerText = data.audience;
      if (data.audience <= 0) {
        this.decrementTarget.style.display = 'none';
      } else {
        this.decrementTarget.style.display = 'block';
      }
    });
  }
}
