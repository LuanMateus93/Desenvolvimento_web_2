const app = new Vue({
    el: '#app',
    data: {
        text: ''
    },
    methods: {
        speak() {
            if ('speechSynthesis' in window) {
                const synthesis = window.speechSynthesis;
                const utterance = new SpeechSynthesisUtterance(this.text);
                synthesis.speak(utterance);
            } else {
                alert("Seu navegador não suporta a síntese de voz.");
            }
        }
    }
});
