webpackHotUpdate("main",{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/presentation/components/AccountInformations/AccountInformations.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/presentation/components/AccountInformations/AccountInformations.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar app_1 = __webpack_require__(/*! @/main/config/app */ \"./src/main/config/app.ts\");\r\nvar PerfilBox_vue_1 = __webpack_require__(/*! ./PerfilBox/PerfilBox.vue */ \"./src/presentation/components/AccountInformations/PerfilBox/PerfilBox.vue\");\r\nvar RepositoriesBox_vue_1 = __webpack_require__(/*! ./RepositoriesBox/RepositoriesBox.vue */ \"./src/presentation/components/AccountInformations/RepositoriesBox/RepositoriesBox.vue\");\r\nvar AccountInformations = app_1.default.component('AccountInformations', {\r\n    el: '#component-account-informations',\r\n    watch: {\r\n        searchs: function () {\r\n        }\r\n    },\r\n    components: {\r\n        ComponentPerfilBox: PerfilBox_vue_1.default,\r\n        ComponentRepositoriesBox: RepositoriesBox_vue_1.default\r\n    },\r\n    methods: {\r\n        emitClick: function (searchs) {\r\n            this.$emit('emit-searching', searchs);\r\n            this.searchs = searchs;\r\n        }\r\n    },\r\n    props: ['body']\r\n});\r\nexports.default = AccountInformations;\r\n\n\n//# sourceURL=webpack:///./src/presentation/components/AccountInformations/AccountInformations.vue?./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})