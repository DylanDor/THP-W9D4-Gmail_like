import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="emails"
export default class extends Controller {
  connect() {}

  showEmails(event) {
    event.preventDefault();
    document.querySelector("#col2").replaceChildren("test");

  }
}
