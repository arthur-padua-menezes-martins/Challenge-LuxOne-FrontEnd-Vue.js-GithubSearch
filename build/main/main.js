"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("@/main/config/global");
var App_vue_1 = require("@/presentation/pages/App/App.vue");
new global_1.default({
    el: document.querySelector('#app'),
    components: {
        App: App_vue_1.default
    },
    render: function (create) {
        return create('App');
    }
});
//# sourceMappingURL=main.js.map