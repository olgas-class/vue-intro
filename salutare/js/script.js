const {createApp} = Vue;

// Predisporre un'input per il nome dell'utente
// al click sul bottone salutare l'utente perima con alert e dopo con un messaggio in html

createApp({
    data() {
        return {
            userName: "",
            greetingMessage: ""
        }
    },
    methods: {
        greet: function() {
            // alert("ciao " + this.userName + "!");
            this.greetingMessage = `Ciao ${this.userName}!`
        }
    }

}).mount("#app");