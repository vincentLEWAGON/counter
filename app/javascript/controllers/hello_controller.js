
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    'helloParagraph',
  ]

  connect() {
    this.helloParagraphTarget.textContent = "Hello World! + Stimuli";
    console.log("hello_controller.js is loaded");
  }
}
