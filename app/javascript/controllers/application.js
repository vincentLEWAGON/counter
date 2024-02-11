console.log("application.js is loaded");
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";
import { Controller } from '@hotwired/stimulus';
import "@hotwired/turbo-rails";
import "controllers";
import '@fortawesome/fontawesome-free/js/all';
import Rails from "@rails/ujs";
Rails.start();


// Crée une nouvelle instance de l'application Stimulus et la démarre
const application = Application.start()

// Importe la méthode 'definitionsFromContext' du package '@hotwired/stimulus-webpack-helpers'
// Utilise l'expression régulière de index.js pour charger uniquement les fichiers qui se terminent par _controller.js
const context = require.context("controllers", true, /\.js$/)

// Charge toutes les définitions de contrôleurs Stimulus dans le contexte actuel
application.load(definitionsFromContext(context))

// Désactive le mode de débogage de Stimulus
application.debug = false

// Expose l'application Stimulus à l'échelle globale pour pouvoir y accéder depuis la console du navigateur
window.Stimulus = application

// Exporte l'application pour pouvoir l'utiliser dans d'autres modules
export { application }

// Importe les autres modules nécessaires
import backgroundColorController from './background_color_controller';
import hideButtonController from './hide_button_controller';
import clockController from './clock_controller';
import eventController from './event_controller';
