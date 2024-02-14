import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "audience_count", "decrement", "increment", "max_gauge" ];


  connect() {
    console.log("hide_button_controller.js is loaded");
  }

  increment() {
    const audienceCount = parseInt(this.audience_countTarget.textContent) + 1;
    const maxGauge = parseInt(this.max_gaugeTarget.textContent);
    this.audience_countTarget.textContent = audienceCount;
    this.decrementTarget.style.display = 'block';

    if (audienceCount > maxGauge) {
      document.body.style.backgroundColor = '#E3170A';
    }

    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  }

  decrement() {
    const audienceCount = parseInt(this.audience_countTarget.textContent) - 1;
    const maxGauge = parseInt(this.max_gaugeTarget.textContent);
    if (audienceCount == 0) {
      this.decrementTarget.style.display = 'none';
    }
    this.audience_countTarget.textContent = audienceCount;

    if (audienceCount < maxGauge) {
      document.body.style.backgroundColor = '#57D53B'; // green
    }

    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  }

};
