const Vue = require("vue");

Vue.config.debug = true;

Vue.component("message", {
    props: [
        'message'
    ],
    'template': '<p class="text-info">{{message}}</p>'
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
