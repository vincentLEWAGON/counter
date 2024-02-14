import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.audience = document.getElementById('audience');
    this.decrementButton = document.getElementById('decrement-button');
    this.audienceCount = document.getElementById('audience-count');
    console.log("event_controller.js is loaded");

    this.updateDecrementButton();

    this.audience.addEventListener('change', () => {
      this.updateDecrementButton();
    });

    this.audienceCount.addEventListener('change', this.checkAudienceCount.bind(this));

    window.addEventListener('load', async () => {
      await this.getEventDetails('your-event-id');
      this.checkAudienceCount();
    });
  }

  updateDecrementButton() {
    var audience = parseInt(this.audience.textContent, 10);
    if (audience <= 0) {
      this.decrementButton.style.display = 'none';
    } else {
      this.decrementButton.style.display = 'block';
    }
  }

  async getEventDetails(eventId) {
    const response = await fetch(`/event/${eventId}`);
    const event = await response.json();
    this.jaugeMax = event.jaugeMax;
  }

  checkAudienceCount() {
    if (parseInt(this.audienceCount.innerText, 10) > this.jaugeMax) {
      document.body.style.backgroundColor = 'red';
    } else {
      document.body.style.backgroundColor = '';
    }
  }
}
