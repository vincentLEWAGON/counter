console.log("event_controller.js is loaded");
// importe le package jQuery
import $ from 'jquery';
$(document).ready(function() {
  // Stocke les éléments dans des variables
  var $audience = $('#audience');
  var $decrementButton = $('#decrement-button');
  let audienceCount = document.getElementById('audience-count');

  // appelle la fonction pour mettre à jour le bouton de décrémentation lorsque la page est chargée
  updateDecrementButton();

  // appelle la fonction pour mettre à jour le bouton chaque fois que l'audience est modifiée
  $audience.on('change', function() {
    updateDecrementButton();
  });

  // Fonction pour mettre à jour le bouton de décrémentation
  function updateDecrementButton() {
    // Récupère la valeur de l'audience
    var audience = parseInt($audience.text(), 10);
    // Condition pour cacher ou afficher le bouton de décrémentation
    if (audience <= 0) {
      // Désactive le bouton si l'audience est inférieure ou égale à 0
      $decrementButton.hide();
    } else {
      // Active le bouton si l'audience est supérieure à 0
      $decrementButton.show();
    }
  }

  let jaugeMax;

  // Fonction pour récupérer les détails de l'événement
  async function getEventDetails(eventId) {
    // Récupère les détails de l'événement à partir de l'API
    const response = await fetch(`/event/${eventId}`);
    // Stocke les détails de l'événement dans la variable event
    const event = await response.json();
    // Stocke la valeur de jaugeMax dans la variable jaugeMax
    jaugeMax = event.jaugeMax;
  }

  // Fonction pour vérifier la valeur de audienceCount et changer la couleur du body si nécessaire
  function checkAudienceCount() {
    if (parseInt(audienceCount.innerText, 10) > jaugeMax) {
      document.body.style.backgroundColor = 'red';
    } else {
      document.body.style.backgroundColor = ''; // Remettez la couleur du body à sa valeur par défaut lorsque audienceCount est inférieur ou égal à jaugeMax
    }
  }

  // Exécute la fonction checkAudienceCount chaque fois que la valeur de audienceCount change
  audienceCount.addEventListener('change', checkAudienceCount);

  // Récupére les détails de l'événement et exécutez checkAudienceCount au chargement de la page
  window.addEventListener('load', async () => {
    await getEventDetails('your-event-id'); // Remplace 'your-event-id' par l'ID réel de votre événement
    checkAudienceCount();
  });
});

export { eventController };
