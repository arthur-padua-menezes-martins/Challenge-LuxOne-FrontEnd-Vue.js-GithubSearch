"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("@/main/config/app");
var Search_vue_1 = require("@/presentation/pages/Search/Search.vue");
var Perfil_vue_1 = require("@/presentation/pages/Perfil/Perfil.vue");
var InitialTransition_vue_1 = require("@/presentation/components/Transition/Initial/InitialTransition.vue");
var ChangeTransition_vue_1 = require("@/presentation/components/Transition/Change/ChangeTransition.vue");
var SearchBar_vue_1 = require("@/presentation/components/SearchBar/SearchBar.vue");
var definitions = {
    PageSearch: Search_vue_1.default,
    PagePerfil: Perfil_vue_1.default,
    ComponentInitialTransition: InitialTransition_vue_1.default,
    ComponentChangeTransition: ChangeTransition_vue_1.default,
    ComponentSearchBar: SearchBar_vue_1.default
};
Object.keys(definitions).forEach(function (i) { return app_1.default.component("" + i, definitions[i]); });
exports.default = app_1.default;
//# sourceMappingURL=global.js.map