// Importe le module 'Application' du package '@hotwired/stimulus'
import { Application } from "@hotwired/stimulus"

// Crée une nouvelle instance de l'application Stimulus et la démarre
const application = Application.start()

// Désactive le mode de débogage de Stimulus
application.debug = false

// Expose l'application Stimulus à l'échelle globale pour pouvoir y accéder depuis la console du navigateur
window.Stimulus = application

// Exporte l'application pour pouvoir l'utiliser dans d'autres modules
export { application }
