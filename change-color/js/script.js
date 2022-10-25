// Creiamo una pagina con all’interno un titolo di colore rosso.
// Al click di un bottone il titolo diventerà blu.
// Come faccio a togglare il colore?

const { createApp } = Vue;

createApp({
  data() {
    return {
      titleClass: "red-color",
    };
  },
  methods: {
    changeColor: function () {
      // if( this.titleClass === "red-color") {
      //     this.titleClass = "blue-color";
      // } else {
      //     this.titleClass = "red-color";
      // }
      this.titleClass = (this.titleClass === "red-color") ? "blue-color" : "red-color";
    },
  },
}).mount("#app");
