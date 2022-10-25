const { createApp } = Vue;

createApp({
    data() {
        return {
           message: "Hello classe 73!",
           userName: "Alberto",
           userAge: 25,  
           fruit: "arancia",
           titleClass: "green bg-yellow"  
        }
    },
    methods: {
        greet: function(name) {
            alert("Ciao " + name);
        }
    }
}).mount("#app");