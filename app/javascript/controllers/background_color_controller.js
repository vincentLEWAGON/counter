import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "audience_count", "max_gauge" ];

  connect() {
    this.checkValues();
    console.log("background_color_controller.js is loaded");
  }

  checkValues() {
    const audienceCount = parseInt(this.audience_countTarget.textContent);
    const maxGauge = parseInt(this.max_gaugeTarget.textContent);

    console.log("audienceCount: ", audienceCount);
    console.log("maxGauge: ", maxGauge);

    if (audienceCount >= maxGauge) {
      console.log("hello world");
      document.body.style.backgroundColor = "#E3170A";
    }
  }
}
