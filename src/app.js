const Vue = require("vue");

Vue.config.debug = true;

Vue.component("message", {
    'template': '<p class="text-info">hello hello</p>'
});

const app = new Vue({
    el: '#app',
    data: {
        text: "hello world"
    },
    created: function () {
        console.log(this.text)
    },
});
