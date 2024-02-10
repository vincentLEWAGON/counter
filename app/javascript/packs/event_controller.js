import $ from 'jquery';

$(document).ready(function() {
  updateDecrementButton();

  // Mettez à jour le bouton chaque fois que l'audience est modifiée
  $('#audience').on('change', function() {
    updateDecrementButton();
  });

  function updateDecrementButton() {
    // Récupère la valeur de l'audience et le bouton de décrémentation
    var audience = parseInt($('#audience').text(), 10);
    // Remplace '#decrement-button' par le sélecteur réel de votre bouton de décrémentation
    var $decrementButton = $('#decrement-button');

    if (audience <= 0) {
      // Désactive le bouton si l'audience est inférieure ou égale à 0
      $decrementButton.hide();
    } else {
      // Active le bouton si l'audience est supérieure à 0
      $decrementButton.show();
    }
  }

  let audienceCount = document.getElementById('audience-count');
  let jaugeMax;

  // Fonction pour récupérer les détails de l'événement
  async function getEventDetails(eventId) {
    const response = await fetch(`/event/${eventId}`);
    const event = await response.json();
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

  // Exécutez la fonction checkAudienceCount chaque fois que la valeur de audienceCount change
  audienceCount.addEventListener('change', checkAudienceCount);

  // Récupérez les détails de l'événement et exécutez checkAudienceCount au chargement de la page
  window.addEventListener('load', async () => {
    await getEventDetails('your-event-id'); // Remplacez 'your-event-id' par l'ID réel de votre événement
    checkAudienceCount();
  });
});
