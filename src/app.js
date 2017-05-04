const Vue = require("vue");

Vue.config.debug = true;

const app = new Vue({
    el: '#app',
    data: {
        message: "hello world"
    },
    created: function () {
        console.log(this.message)
    }
});
