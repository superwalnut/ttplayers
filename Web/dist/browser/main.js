(self["webpackChunkultimate"] = self["webpackChunkultimate"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layouts_gym_gym_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/gym/gym.component */ 62354);
/* harmony import */ var _layouts_players_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/players/player-list/player-list.component */ 92800);
/* harmony import */ var _layouts_players_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/players/player-detail/player-detail.component */ 71731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: '',
  redirectTo: 'gym',
  pathMatch: 'full'
}, {
  path: 'gym',
  component: _layouts_gym_gym_component__WEBPACK_IMPORTED_MODULE_0__.GymComponent
}, {
  path: 'players/:keyword',
  component: _layouts_players_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_1__.PlayerListComponent
}, {
  path: 'player/:id',
  component: _layouts_players_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_2__.PlayerDetailComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 90605);



class AppComponent {
  constructor() {
    this.title = 'Unice';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/layouts.module */ 52372);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/storage */ 55574);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase), _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestoreModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__.AngularFireStorageModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.routes, {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestoreModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__.AngularFireStorageModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 83492:
/*!**************************************************************!*\
  !*** ./src/app/layouts/gym/gym-about/gym-about.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymAboutComponent": () => (/* binding */ GymAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class GymAboutComponent {
  constructor() {}
  ngOnInit() {}
}
GymAboutComponent.ɵfac = function GymAboutComponent_Factory(t) {
  return new (t || GymAboutComponent)();
};
GymAboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymAboutComponent,
  selectors: [["app-gym-about"]],
  decls: 29,
  vars: 0,
  consts: [["id", "about", 1, "gym", "format"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "text-center", "center-content"], [1, "about-img"], [1, "borders-around"], [1, "bg-black"], ["src", "assets/images/gym/about-us.jpg", "alt", "", 1, "img-fluid", "format-img"], [1, "center-text"], [1, "format-small-text"], [1, "font-primary", "borders-before"], [1, "format-head-text"], [1, "about-font-header", "gradient-text"], [1, "format-sub-text"], [1, "p-light", "about-para"], ["href", "javascript:void(0)", 1, "btn", "btn-default", "primary-btn"]],
  template: function GymAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3)(11, "div", 9)(12, "div")(13, "div", 10)(14, "h6", 11)(15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Welcome to ttPlayers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "about us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14)(21, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Welcome to ttPlayers.com.au, your go-to destination for all things table tennis! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " We are passionate about the sport and dedicated to providing a comprehensive hub for table tennis enthusiasts and players. Our mission is to aggregate and deliver updated competition data, making it easier for players to track their match history and monitor their ratings over time. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Join us in celebrating the art of table tennis and unlocking the potential for every player, no matter their level of expertise. We're here to support and empower the table tennis community on their journey to excellence.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Join Us & Discover More Features ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 82478:
/*!**********************************************************!*\
  !*** ./src/app/layouts/gym/gym-bmi/gym-bmi.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymBMIComponent": () => (/* binding */ GymBMIComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


const _c0 = function () {
  return {
    "background-image": "url(assets/images/gym/bmi-bg.jpg)"
  };
};
class GymBMIComponent {
  constructor() {}
  ngOnInit() {}
}
GymBMIComponent.ɵfac = function GymBMIComponent_Factory(t) {
  return new (t || GymBMIComponent)();
};
GymBMIComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymBMIComponent,
  selectors: [["app-gym-bmi"]],
  decls: 58,
  vars: 2,
  consts: [["id", "bmi", 1, "gym", "format", "bg-cal-bmi", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "center-text"], [1, "format-small-text"], [1, "borders-before", "text-white"], [1, "format-head-text"], [1, "text-white", "about-font-header"], [1, "format-sub-text"], [1, "p-light", "about-para", "text-white"], [1, "link-horizontal", "mb-5"], [1, ""], [1, "checkbox"], [1, "text-white", "center-text"], ["type", "checkbox", "value", ""], [1, "about-icon"], [1, "btn", "btn-default", "back-white"], [1, "col-lg-5", "offset-lg-1", "col-md-6"], [1, "calculate-bmi"]],
  template: function GymBMIComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5)(7, "h6", 6)(8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Player Insights");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Players' Data Analysis");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Based on the players' competition results and ratings, we work out their performances among their peers. There are a number of insightful data analysis generated at ttPlayers.com.au");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11)(17, "ul")(18, "li", 12)(19, "div", 13)(20, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Rating Performance Analysis");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 16)(24, "div", 13)(25, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Matches Analysis among Peers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Browse Player Insights");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18)(31, "div", 4)(32, "table", 19)(33, "tr")(34, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Activeness");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Player Rating");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr")(39, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Competition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Matches");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr")(44, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Self Tracking");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Peers Tracking");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr")(49, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Leaderboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Match History");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr")(54, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Teams");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Clubs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  styles: [".gym[_ngcontent-%COMP%]   .borders-before[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  border-top: 2px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9neW0vZ3ltLWJtaS9neW0tYm1pLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5neW0gLmJvcmRlcnMtYmVmb3JlIHNwYW46YmVmb3JlIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmZmO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 13028:
/*!**************************************************************!*\
  !*** ./src/app/layouts/gym/gym-brand/gym-brand.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymBrandComponent": () => (/* binding */ GymBrandComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);



function GymBrandComponent_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const brand_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", brand_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function GymBrandComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GymBrandComponent_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class GymBrandComponent {
  constructor() {
    this.brands = [{
      img: "assets/images/gym/brand/tt-nsw-logo.png"
    }, {
      img: "assets/images/gym/brand/tt-vic-logo.png"
    }, {
      img: "assets/images/gym/brand/tt-sa-logo.png"
    }, {
      img: "assets/images/gym/brand/tt-act-logo.png"
    }, {
      img: "assets/images/gym/brand/tt-qld-logo.png"
    }, {
      img: "assets/images/gym/brand/tt-wa-logo.png"
    }, {
      img: "assets/images/gym/brand/sndtta-logo.png"
    }];
    this.brandcarouselOptions = {
      items: 6,
      margin: 50,
      autoHeight: true,
      nav: false,
      dots: false,
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
        0: {
          items: 2,
          margin: 10
        },
        320: {
          items: 3,
          margin: 10
        },
        480: {
          items: 4,
          margin: 30
        },
        768: {
          items: 5,
          margin: 50
        },
        1200: {
          items: 6,
          margin: 50
        }
      }
    };
  }
  ngOnInit() {}
}
GymBrandComponent.ɵfac = function GymBrandComponent_Factory(t) {
  return new (t || GymBrandComponent)();
};
GymBrandComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymBrandComponent,
  selectors: [["app-gym-brand"]],
  decls: 6,
  vars: 2,
  consts: [[1, "gym", "brand-slider"], [1, "container"], [1, "row"], [1, "col-12"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], ["href", "javascript:void(0)"], ["alt", "", 1, "img-fluid", 3, "src"]],
  template: function GymBrandComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "owl-carousel-o", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GymBrandComponent_ng_container_5_Template, 2, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.brandcarouselOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brands);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 30123:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/gym/gym-copyright/gym-copyright.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymCopyrightComponent": () => (/* binding */ GymCopyrightComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class GymCopyrightComponent {
  constructor() {}
  ngOnInit() {}
}
GymCopyrightComponent.ɵfac = function GymCopyrightComponent_Factory(t) {
  return new (t || GymCopyrightComponent)();
};
GymCopyrightComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymCopyrightComponent,
  selectors: [["app-gym-copyright"]],
  decls: 18,
  vars: 0,
  consts: [[1, "gym", "copyright"], [1, "container"], [1, "row"], [1, "col-sm-6"], [1, "link-horizontal"], ["href", "#", 1, "copyright-text", "op-text"], [1, "copyright-text", "text-white", "text-right", "op-text"], ["aria-hidden", "true", 1, "fa", "fa-heart"]],
  template: function GymCopyrightComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul")(6, "li")(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li")(10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Terms & Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "div")(14, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Copyright \u00A92018 unice by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " pixelstrap");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 14519:
/*!******************************************************************!*\
  !*** ./src/app/layouts/gym/gym-counter/gym-counter.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymCounterComponent": () => (/* binding */ GymCounterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 97321);



function GymCounterComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7)(4, "div", 8)(5, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11)(8, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", data_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CountTo", data_r1.count)("from", 0)("duration", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.type);
  }
}
const _c0 = function () {
  return {
    "background-image": "url(assets/images/gym/counter/bg.jpg)"
  };
};
class GymCounterComponent {
  constructor() {
    this.counter = [{
      count: '22776+',
      img: 'assets/images/gym/counter/happy-icon.png',
      type: 'TT Players'
    }, {
      count: '18559+',
      img: 'assets/images/gym/counter/award-icon.png',
      type: 'TT Events'
    }, {
      count: '1.2m+',
      img: 'assets/images/gym/counter/project-icon.png',
      type: 'Matches Played'
    }, {
      count: '7511+',
      img: 'assets/images/gym/counter/work-icon.png',
      type: 'Active Players'
    }];
  }
  ngOnInit() {}
}
GymCounterComponent.ɵfac = function GymCounterComponent_Factory(t) {
  return new (t || GymCounterComponent)();
};
GymCounterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: GymCounterComponent,
  selectors: [["app-gym-counter"]],
  decls: 4,
  vars: 3,
  consts: [[1, "gym", "counter", "bg-img3", "bg1", 3, "ngStyle"], [1, "container"], [1, "row"], ["class", "col-sm-3 col-6 counter-container", 4, "ngFor", "ngForOf"], [1, "col-sm-3", "col-6", "counter-container"], [1, "counters"], ["alt", "", 1, "img-fluid", "counter-img", 3, "src"], [1, "counter-text"], [1, "count-number"], [1, "text-white", "counts"], [1, "counter", 3, "CountTo", "from", "duration"], [1, "count-desc"], [1, "text-white"]],
  template: function GymCounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GymCounterComponent_div_3_Template, 10, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.counter);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 82750:
/*!****************************************************************!*\
  !*** ./src/app/layouts/gym/gym-header/gym-header.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymHeaderComponent": () => (/* binding */ GymHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





const _c0 = function () {
  return {
    "background-image": "url(assets/images/gym/header2.jpg)"
  };
};
class GymHeaderComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  search() {
    this.router.navigate(['/players', this.searchTerm]);
  }
}
GymHeaderComponent.ɵfac = function GymHeaderComponent_Factory(t) {
  return new (t || GymHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
GymHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymHeaderComponent,
  selectors: [["app-gym-header"]],
  decls: 29,
  vars: 3,
  consts: [["id", "home", 1, "gym", "header"], [1, "header5-content"], [1, "gym-header", "bg", 3, "ngStyle"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-12"], [1, "center-text", "justify-content-center"], [1, "text-center"], [1, "header-text"], [1, "bold-text"], [1, "header-sub-text"], [1, "text-white", "p-light"], [1, "event", "subscribe", "subscribe-3", "set-relative", "p-t-0"], [1, "circle"], [1, "row"], [1, "col-md-8", "offset-md-2"], [1, "subscribe"], [1, "center-content"], [1, "form-group"], [1, "flex"], ["type", "text", "placeholder", "Please Enter a player's name", "id", "username", "name", "username", 1, "form-control", "text-capitalize", 3, "ngModel", "keyup.enter", "ngModelChange"], [1, "button-primary"], ["type", "button", 1, "btn", "btn-default", "primary-btn", "text-white", "text-capitalize", 3, "click"]],
  template: function GymHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h1")(10, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ttPlayers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0Statistics & Ranking");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10)(14, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A comprehensive statistics about table tennis players in Australia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "div", 19)(25, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function GymHeaderComponent_Template_input_keyup_enter_25_listener() {
        return ctx.search();
      })("ngModelChange", function GymHeaderComponent_Template_input_ngModelChange_25_listener($event) {
        return ctx.searchTerm = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21)(27, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GymHeaderComponent_Template_button_click_27_listener() {
        return ctx.search();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 52873:
/*!******************************************************************!*\
  !*** ./src/app/layouts/gym/gym-pricing/gym-pricing.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymPricingComponent": () => (/* binding */ GymPricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);



function GymPricingComponent_ng_container_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17)(8, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 19)(15, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const price_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flaticon-", price_r1.icon, " feature-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](price_r1.package);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](price_r1.feature1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](price_r1.feature2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](price_r1.feature3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](price_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](price_r1.btn);
  }
}
function GymPricingComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GymPricingComponent_ng_container_15_ng_template_1_Template, 22, 9, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class GymPricingComponent {
  constructor() {
    this.pricing = [{
      icon: "rocket-ship",
      package: "free",
      feature1: "Easy Installations",
      feature2: "Unlimited support",
      feature3: "Free Forever",
      price: "0",
      btn: "purchase"
    }, {
      icon: "diamond",
      package: "Gold Plan",
      feature1: "Easy Installations",
      feature2: "Unlimited support",
      feature3: "Free Forever",
      price: "49",
      btn: "purchase"
    }, {
      icon: "pie-chart",
      package: "Silver Plan",
      feature1: "Easy Installations",
      feature2: "Unlimited support",
      feature3: "Free Forever",
      price: "99",
      btn: "purchase"
    }];
    this.pricingcarouselOptions = {
      items: 3,
      margin: 30,
      nav: false,
      autoplay: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
          margin: 10
        },
        480: {
          items: 2,
          margin: 10
        },
        992: {
          items: 3,
          margin: 10
        }
      }
    };
  }
  ngOnInit() {}
}
GymPricingComponent.ɵfac = function GymPricingComponent_Factory(t) {
  return new (t || GymPricingComponent)();
};
GymPricingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymPricingComponent,
  selectors: [["app-gym-pricing"]],
  decls: 16,
  vars: 2,
  consts: [["id", "plan", 1, "gym", "pricing", "set-relative"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title"], [1, "text-center"], [1, "borders-before"], [1, "main-title"], [1, "col-12"], [1, "price-margin", "pricing-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], [1, "price-container", "price-margin", "hover-overlay", "shadows", "bg-white", "text-center"], [1, "price-feature-container", "set-relative"], [1, "feature-text"], [1, "feature-text-heading", "bold", "text-uppercase"], [1, "set-border"], [1, "price-features"], [1, "price-feature", "text-center"], [1, "price-value"], [1, "price", "text-center"], [1, "large"], ["href", "#", 1, "btn", "btn-default", "back-white"]],
  template: function GymPricingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "h6", 6)(8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OUR PROGRESS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "price plan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "owl-carousel-o", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GymPricingComponent_ng_container_15_Template, 2, 0, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.pricingcarouselOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pricing);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 90734:
/*!********************************************************************!*\
  !*** ./src/app/layouts/gym/gym-schedule/gym-schedule.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymScheduleComponent": () => (/* binding */ GymScheduleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);



function GymScheduleComponent_ng_container_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div")(3, "div", 14)(4, "h6", 15)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16)(8, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18)(11, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 20)(16, "li", 21)(17, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 21)(20, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 21)(23, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const schedule_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schedule_r1.tagLine1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schedule_r1.tagLine2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", schedule_r1.description1, "/p> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schedule_r1.description2);
  }
}
function GymScheduleComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GymScheduleComponent_ng_container_11_ng_template_1_Template, 27, 4, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return {
    "background-image": "url(assets/images/gym/bg.png)"
  };
};
class GymScheduleComponent {
  constructor() {
    this.schedulecarousel = [{
      tagLine1: "#1 Day Training",
      tagLine2: "Monday",
      description1: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      description2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }, {
      tagLine1: "#1 Day Training",
      tagLine2: "Monday",
      description1: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      description2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }];
    this.schedulecarouselOptions = {
      items: 1,
      margin: 0,
      dots: true,
      nav: false,
      autoplay: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true
    };
  }
  ngOnInit() {}
}
GymScheduleComponent.ɵfac = function GymScheduleComponent_Factory(t) {
  return new (t || GymScheduleComponent)();
};
GymScheduleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymScheduleComponent,
  selectors: [["app-gym-schedule"]],
  decls: 12,
  vars: 4,
  consts: [["id", "schedule", 1, "gym", "format", "bg-schedule", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title"], [1, "main-title"], [1, "text-white", "m-b-15"], ["src", "assets/images/logo/l5-title-bottom.png", "alt", "", 1, "img-fluid"], [1, "col-12"], [1, "default-dots", "gym-about-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "row"], [1, "col-lg-5", "item"], [1, "center-text"], [1, "format-small-text"], [1, "text-white", "borders-before"], [1, "format-head-text"], [1, "text-white", "about-font-header"], [1, "format-sub-text"], [1, "p-light", "about-para", "text-white"], [1, "icon-collection"], [1, "about-icon"], ["href", "#", 1, "center-content"], ["src", "assets/images/gym/icons/2.png", "alt", "", 1, "img-fluid", "icons"], ["src", "assets/images/gym/icons/1.png", "alt", "", 1, "img-fluid", "icons"], ["src", "assets/images/gym/icons/3.png", "alt", "", 1, "img-fluid", "icons"], [1, "btn", "btn-default", "back-white", "m-t-45"]],
  template: function GymScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "classes schedule");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "owl-carousel-o", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GymScheduleComponent_ng_container_11_Template, 2, 0, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.schedulecarouselOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schedulecarousel);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 94070:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/gym/gym-testimonial/gym-testimonial.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymTestimonialComponent": () => (/* binding */ GymTestimonialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);



function GymTestimonialComponent_ng_container_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15)(3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17)(6, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Alan Lakor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19)(9, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CEO OF SC.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function GymTestimonialComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GymTestimonialComponent_ng_container_15_ng_template_1_Template, 11, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = "url(assets/images/gym/testimonial/testimonial-bg.jpg)";
const _c1 = function () {
  return {
    "background-image": _c0
  };
};
class GymTestimonialComponent {
  constructor() {
    this.users = [{
      img: "assets/images/gym/testimonial/quote.png"
    }, {
      img: "assets/images/gym/testimonial/quote.png"
    }];
    this.testimonialCarouselOptions = {
      items: 1,
      margin: 0,
      dots: true,
      nav: false,
      autoplay: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true
    };
  }
  ngOnInit() {}
}
GymTestimonialComponent.ɵfac = function GymTestimonialComponent_Factory(t) {
  return new (t || GymTestimonialComponent)();
};
GymTestimonialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymTestimonialComponent,
  selectors: [["app-gym-testimonial"]],
  decls: 16,
  vars: 4,
  consts: [[1, "gym", "testimonial", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-12"], [1, "title"], [1, "text-center"], [1, "borders-before", "text-white"], [1, "main-title"], [1, "text-white"], [1, "col-lg-8", "offset-lg-2"], [1, "testimonial-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], [1, ""], ["alt", "", 1, "img-fluid", "m-auto", 3, "src"], [1, "text-center", "testimonial-info"], [1, "p-light", "testimonial-para"], [1, "testimonial-name"], [1, "text-white", "name"], [1, "testimonial-post"], [1, "text-white", "post"]],
  template: function GymTestimonialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "h6", 6)(8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OUR PROGRESS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "h2", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "what people say");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "owl-carousel-o", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GymTestimonialComponent_ng_container_15_Template, 2, 0, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.testimonialCarouselOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 99132:
/*!******************************************************************!*\
  !*** ./src/app/layouts/gym/gym-trainer/gym-trainer.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymTrainerComponent": () => (/* binding */ GymTrainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);



function GymTrainerComponent_ng_container_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12)(2, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trainer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", trainer_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trainer_r1.title);
  }
}
function GymTrainerComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GymTrainerComponent_ng_container_15_ng_template_1_Template, 4, 2, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class GymTrainerComponent {
  constructor() {
    this.trainercarousel = [{
      img: "assets/images/gym/traniers/1.jpg",
      title: "SNDTTA Open 2023"
    }, {
      img: "assets/images/gym/traniers/2.jpg",
      title: ""
    }, {
      img: "assets/images/gym/traniers/3.jpg",
      title: ""
    }, {
      img: "assets/images/gym/traniers/4.jpg",
      title: ""
    }, {
      img: "assets/images/gym/traniers/5.jpg",
      title: ""
    }, {
      img: "assets/images/gym/traniers/3.jpg",
      title: ""
    }];
    this.trainercarouselOptions = {
      center: true,
      loop: true,
      dots: true,
      margin: 0,
      responsive: {
        0: {
          items: 2,
          margin: 10
        },
        576: {
          items: 3
        },
        768: {
          items: 4
        },
        1200: {
          items: 6
        }
      }
    };
  }
  ngOnInit() {}
}
GymTrainerComponent.ɵfac = function GymTrainerComponent_Factory(t) {
  return new (t || GymTrainerComponent)();
};
GymTrainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymTrainerComponent,
  selectors: [["app-gym-trainer"]],
  decls: 16,
  vars: 2,
  consts: [[1, "gym", "trainers"], [1, "container", "overflow-hide"], [1, "row"], [1, "col-12"], [1, "title"], [1, "text-center"], [1, "borders-before"], [1, "main-title"], [1, "trainers-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "text-center", "trainers-info"], [1, "m-b-10"]],
  template: function GymTrainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "h6", 6)(8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Current & Upcoming");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Table Tennis Events");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3)(14, "owl-carousel-o", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GymTrainerComponent_ng_container_15_Template, 2, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.trainercarouselOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trainercarousel);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 68448:
/*!******************************************************************************!*\
  !*** ./src/app/layouts/gym/gym-workout-about/gym-workout-about.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymWorkoutAboutComponent": () => (/* binding */ GymWorkoutAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class GymWorkoutAboutComponent {
  constructor() {}
  ngOnInit() {}
}
GymWorkoutAboutComponent.ɵfac = function GymWorkoutAboutComponent_Factory(t) {
  return new (t || GymWorkoutAboutComponent)();
};
GymWorkoutAboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GymWorkoutAboutComponent,
  selectors: [["app-gym-workout-about"]],
  decls: 33,
  vars: 0,
  consts: [[1, "gym", "format"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "text-center", "center-content"], [1, "about-img"], [1, "borders-around"], [1, "bg-black"], ["src", "assets/images/gym/about.png", "alt", "", 1, "img-fluid", "format-img"], [1, "center-text"], [1, "format-small-text"], [1, "font-primary", "borders-before"], [1, "format-head-text"], [1, "about-font-header", "gradient-text"], [1, "format-sub-text"], [1, "sub-heading"], [1, "p-light", "about-para"], ["href", "javascript:void(0)", 1, "btn", "btn-default", "primary-btn"]],
  template: function GymWorkoutAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3)(11, "div", 9)(12, "div")(13, "div", 10)(14, "h6", 11)(15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "our progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "about us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14)(21, "div", 15)(22, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1. Trx Workout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15)(27, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2. Posture Correction");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "When an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "BOOK WORKOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 62354:
/*!**********************************************!*\
  !*** ./src/app/layouts/gym/gym.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymComponent": () => (/* binding */ GymComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _shared_components_gym_footer_gym_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/gym-footer/gym-footer.component */ 92043);
/* harmony import */ var _shared_components_gym_nav_gym_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/gym-nav/gym-nav.component */ 79577);
/* harmony import */ var _gym_about_gym_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gym-about/gym-about.component */ 83492);
/* harmony import */ var _gym_counter_gym_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gym-counter/gym-counter.component */ 14519);
/* harmony import */ var _gym_trainer_gym_trainer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gym-trainer/gym-trainer.component */ 99132);
/* harmony import */ var _gym_bmi_gym_bmi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gym-bmi/gym-bmi.component */ 82478);
/* harmony import */ var _gym_brand_gym_brand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gym-brand/gym-brand.component */ 13028);
/* harmony import */ var _gym_header_gym_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gym-header/gym-header.component */ 82750);













class GymComponent {
  constructor(route, title) {
    this.route = route;
    this.title = title;
  }
  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }
}
GymComponent.ɵfac = function GymComponent_Factory(t) {
  return new (t || GymComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.Title));
};
GymComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: GymComponent,
  selectors: [["app-gym"]],
  decls: 8,
  vars: 0,
  template: function GymComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-gym-nav")(1, "app-gym-header")(2, "app-gym-about")(3, "app-gym-counter")(4, "app-gym-trainer")(5, "app-gym-bmi")(6, "app-gym-brand")(7, "app-gym-footer");
    }
  },
  dependencies: [_shared_components_gym_footer_gym_footer_component__WEBPACK_IMPORTED_MODULE_0__.GymFooterComponent, _shared_components_gym_nav_gym_nav_component__WEBPACK_IMPORTED_MODULE_1__.GymNavComponent, _gym_about_gym_about_component__WEBPACK_IMPORTED_MODULE_2__.GymAboutComponent, _gym_counter_gym_counter_component__WEBPACK_IMPORTED_MODULE_3__.GymCounterComponent, _gym_trainer_gym_trainer_component__WEBPACK_IMPORTED_MODULE_4__.GymTrainerComponent, _gym_bmi_gym_bmi_component__WEBPACK_IMPORTED_MODULE_5__.GymBMIComponent, _gym_brand_gym_brand_component__WEBPACK_IMPORTED_MODULE_6__.GymBrandComponent, _gym_header_gym_header_component__WEBPACK_IMPORTED_MODULE_7__.GymHeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 34875:
/*!***************************************************!*\
  !*** ./src/app/layouts/layouts-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsRoutingModule": () => (/* binding */ LayoutsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _gym_gym_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gym/gym.component */ 62354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _gym_gym_component__WEBPACK_IMPORTED_MODULE_0__.GymComponent,
  data: {
    title: "ttPlayers | table tennis player statistics"
  }
}];
class LayoutsRoutingModule {}
LayoutsRoutingModule.ɵfac = function LayoutsRoutingModule_Factory(t) {
  return new (t || LayoutsRoutingModule)();
};
LayoutsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LayoutsRoutingModule
});
LayoutsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 52372:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _gym_gym_about_gym_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gym/gym-about/gym-about.component */ 83492);
/* harmony import */ var _gym_gym_bmi_gym_bmi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gym/gym-bmi/gym-bmi.component */ 82478);
/* harmony import */ var _gym_gym_brand_gym_brand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gym/gym-brand/gym-brand.component */ 13028);
/* harmony import */ var _gym_gym_copyright_gym_copyright_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gym/gym-copyright/gym-copyright.component */ 30123);
/* harmony import */ var _gym_gym_counter_gym_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gym/gym-counter/gym-counter.component */ 14519);
/* harmony import */ var _gym_gym_pricing_gym_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gym/gym-pricing/gym-pricing.component */ 52873);
/* harmony import */ var _gym_gym_schedule_gym_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gym/gym-schedule/gym-schedule.component */ 90734);
/* harmony import */ var _gym_gym_testimonial_gym_testimonial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gym/gym-testimonial/gym-testimonial.component */ 94070);
/* harmony import */ var _gym_gym_trainer_gym_trainer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gym/gym-trainer/gym-trainer.component */ 99132);
/* harmony import */ var _gym_gym_workout_about_gym_workout_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gym/gym-workout-about/gym-workout-about.component */ 68448);
/* harmony import */ var _gym_gym_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gym/gym.component */ 62354);
/* harmony import */ var _layouts_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts-routing.module */ 34875);
/* harmony import */ var _players_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./players/player-detail/player-detail.component */ 71731);
/* harmony import */ var _players_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./players/player-list/player-list.component */ 92800);
/* harmony import */ var _players_player_list_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./players/player-list/sidebar/sidebar.component */ 46265);
/* harmony import */ var _gym_gym_header_gym_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gym/gym-header/gym-header.component */ 82750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
















// Gym Layout







class LayoutsModule {}
LayoutsModule.ɵfac = function LayoutsModule_Factory(t) {
  return new (t || LayoutsModule)();
};
LayoutsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
  type: LayoutsModule
});
LayoutsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _layouts_routing_module__WEBPACK_IMPORTED_MODULE_13__.LayoutsRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbTypeaheadModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](LayoutsModule, {
    declarations: [_gym_gym_component__WEBPACK_IMPORTED_MODULE_12__.GymComponent, _gym_gym_about_gym_about_component__WEBPACK_IMPORTED_MODULE_2__.GymAboutComponent, _gym_gym_schedule_gym_schedule_component__WEBPACK_IMPORTED_MODULE_8__.GymScheduleComponent, _gym_gym_workout_about_gym_workout_about_component__WEBPACK_IMPORTED_MODULE_11__.GymWorkoutAboutComponent, _gym_gym_counter_gym_counter_component__WEBPACK_IMPORTED_MODULE_6__.GymCounterComponent, _gym_gym_trainer_gym_trainer_component__WEBPACK_IMPORTED_MODULE_10__.GymTrainerComponent, _gym_gym_testimonial_gym_testimonial_component__WEBPACK_IMPORTED_MODULE_9__.GymTestimonialComponent, _gym_gym_pricing_gym_pricing_component__WEBPACK_IMPORTED_MODULE_7__.GymPricingComponent, _gym_gym_bmi_gym_bmi_component__WEBPACK_IMPORTED_MODULE_3__.GymBMIComponent, _gym_gym_brand_gym_brand_component__WEBPACK_IMPORTED_MODULE_4__.GymBrandComponent, _gym_gym_copyright_gym_copyright_component__WEBPACK_IMPORTED_MODULE_5__.GymCopyrightComponent, _players_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_14__.PlayerDetailComponent, _players_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_15__.PlayerListComponent, _players_player_list_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__.SidebarComponent, _gym_gym_header_gym_header_component__WEBPACK_IMPORTED_MODULE_17__.GymHeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _layouts_routing_module__WEBPACK_IMPORTED_MODULE_13__.LayoutsRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbTypeaheadModule]
  });
})();

/***/ }),

/***/ 71731:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/players/player-detail/player-detail.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerDetailComponent": () => (/* binding */ PlayerDetailComponent),
/* harmony export */   "blogDetailDB": () => (/* binding */ blogDetailDB)
/* harmony export */ });
/* harmony import */ var src_app_models_player_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/player-history */ 85131);
/* harmony import */ var src_app_service_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/player.service */ 78633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_gym_footer_gym_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/gym-footer/gym-footer.component */ 92043);
/* harmony import */ var _shared_components_gym_nav_gym_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/gym-nav/gym-nav.component */ 79577);
/* harmony import */ var _player_list_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player-list/sidebar/sidebar.component */ 46265);












const _c0 = function (a0, a1) {
  return {
    "blue-text fa-male": a0,
    "red-text fa-female": a1
  };
};
function PlayerDetailComponent_section_20_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "div", 3)(2, "div", 4)(3, "div", 26)(4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 27)(7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Add To WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 31)(12, "div", 32)(13, "div", 33)(14, "div", 34)(15, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Gender :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 36)(18, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 38)(22, "div", 34)(23, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "State :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 36)(26, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 38)(29, "div", 34)(30, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Played :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 36)(33, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "3 years");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 32)(36, "div", 33)(37, "div", 34)(38, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Rating :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 36)(41, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 38)(44, "div", 34)(45, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Ranking :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 36)(48, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "105");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 38)(51, "div", 34)(52, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Win Rate :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 36)(55, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](57, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.player.FullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c0, ctx_r1.player.Gender == "M", ctx_r1.player.Gender == "F"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.player.Gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.player.State);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.toRating(ctx_r1.player));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](57, 6, ctx_r1.player.TotalWins / ctx_r1.player.TotalPlayedMatches));
  }
}
function PlayerDetailComponent_section_20_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39)(1, "div", 4)(2, "div", 40)(3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 43)(6, "div", 44)(7, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Total Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 40)(12, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 43)(15, "div", 44)(16, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Total Matches");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 40)(21, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 43)(24, "div", 44)(25, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Total Wins");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 40)(30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 43)(33, "div", 44)(34, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Total Opponents");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.player.TotalPlayedEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.player.TotalPlayedMatches);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.player.TotalWins);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_3_0 = ctx_r2.player.TotalOpponentCount) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "56");
  }
}
function PlayerDetailComponent_section_20_div_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " In last ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul", 58)(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Participated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " events.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "played ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " matches.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" months, ", ctx_r5.player.FirstName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.player.PlayedEventsLast6Mth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.player.PlayedMatchesLast6Mth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r5.player.RatingChangesLast6Mth > 0 ? "gained" : "lost", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.player.RatingChangesLast6Mth);
  }
}
function PlayerDetailComponent_section_20_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " In last ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" months, ", ctx_r6.player.FirstName, " has been very quiet. ");
  }
}
function PlayerDetailComponent_section_20_div_13_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 58)(3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "played ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " matches.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "played against ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " different players.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "won ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " matches, lost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " matches.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Since ", ctx_r7.player.StartPlayingDate, ", ", ctx_r7.player.FirstName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.player.TotalPlayedMatches);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.player.TotalOpponentCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.player.TotalWins);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.player.TotalLoses);
  }
}
function PlayerDetailComponent_section_20_div_13_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r8.player.FirstName, " has been very quiet since ", ctx_r8.player.StartPlayingDate, " ");
  }
}
function PlayerDetailComponent_section_20_div_13_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 58)(3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "winning rate of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "beat higher rating players ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " times.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "state rank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, ", national rank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r9.player.FirstName, " has achieved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, ctx_r9.player.TotalWins / ctx_r9.player.TotalPlayedMatches));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r9.player.TotalBeatHigherRatingPlayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r9.player.StateRanking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r9.player.NationalRanking);
  }
}
function PlayerDetailComponent_section_20_div_13_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r10.player.FirstName, " has no achievement yet. ");
  }
}
function PlayerDetailComponent_section_20_div_13_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 58)(3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " in Australia.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r11.player.FirstName, " has ranking of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.player.NationalRanking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.player.NationalGenderRanking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" in ", ctx_r11.player.Gender == "M" ? "Male" : "Female", " group of Australia.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.player.StateRanking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" in ", ctx_r11.player.State, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.player.StateGenderRanking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("in ", ctx_r11.player.Gender == "M" ? "Male" : "Female", " group of ", ctx_r11.player.State, ".");
  }
}
function PlayerDetailComponent_section_20_div_13_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r12.player.FirstName, " has no ranking yet. ");
  }
}
function PlayerDetailComponent_section_20_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "div", 4)(2, "div", 51)(3, "div", 52)(4, "div", 53)(5, "h4", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Recent Activities ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PlayerDetailComponent_section_20_div_13_div_8_Template, 24, 5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, PlayerDetailComponent_section_20_div_13_div_9_Template, 5, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 51)(11, "div", 52)(12, "div", 53)(13, "h4", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Experiences ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PlayerDetailComponent_section_20_div_13_div_16_Template, 24, 6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, PlayerDetailComponent_section_20_div_13_div_17_Template, 2, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 56)(19, "div", 51)(20, "div", 52)(21, "div", 53)(22, "h4", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Achievements ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, PlayerDetailComponent_section_20_div_13_div_25_Template, 25, 7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, PlayerDetailComponent_section_20_div_13_div_26_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 51)(28, "div", 52)(29, "div", 53)(30, "h4", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Ranking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, PlayerDetailComponent_section_20_div_13_div_33_Template, 23, 9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, PlayerDetailComponent_section_20_div_13_div_34_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.player.PlayedEventsLast6Mth > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.player.PlayedEventsLast6Mth <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.player.TotalPlayedMatches > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.player.TotalPlayedMatches <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.player.TotalPlayedMatches > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.player.TotalPlayedMatches <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.player.NationalRanking > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.player.NationalRanking <= 0);
  }
}
function PlayerDetailComponent_section_20_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 60)(1, "article", 4)(2, "div", 5)(3, "div", 61)(4, "div", 62)(5, "div", 63)(6, "div", 35)(7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 68)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " some text ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const history_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](history_r13.EventName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 2, history_r13.EventDate.toDate(), "dd/MM/yyyy"));
  }
}
function PlayerDetailComponent_section_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 13)(1, "div", 3)(2, "div", 4)(3, "div", 14)(4, "div", 3)(5, "div", 4)(6, "div", 15)(7, "div", 16)(8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, PlayerDetailComponent_section_20_div_11_Template, 58, 11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PlayerDetailComponent_section_20_div_12_Template, 38, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PlayerDetailComponent_section_20_div_13_Template, 35, 8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, PlayerDetailComponent_section_20_div_17_Template, 19, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.player);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.player);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.player);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.player.FirstName, "'s History");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.histories);
  }
}
const _c1 = function () {
  return {
    "background-image": "url(assets/images/gym/header3.jpg)"
  };
};
class PlayerDetailComponent {
  constructor(route, title, playerService) {
    this.route = route;
    this.title = title;
    this.playerService = playerService;
    this.blogData = blogDetailDB.Details;
  }
  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    var playerId = this.route.snapshot.params.id;
    this.keyword = this.route.snapshot.queryParams.keyword;
    this.playerService.getPlayer(playerId).subscribe(player => {
      this.player = player;
      console.log(this.player);
      this.playerService.getPlayerHistory(playerId).subscribe(history => {
        this.histories = history.History;
      });
    });
  }
  toRating(player) {
    return `${player.Rating}±${player.StDev}`;
  }
}
PlayerDetailComponent.ɵfac = function PlayerDetailComponent_Factory(t) {
  return new (t || PlayerDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService));
};
PlayerDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PlayerDetailComponent,
  selectors: [["app-player-detail"]],
  decls: 22,
  vars: 5,
  consts: [[1, "header5-content"], [1, "player-list-header", "bg", 3, "ngStyle"], [1, "breadcrumb-section-main", "inner-3"], [1, "container"], [1, "row"], [1, "col-12"], [1, "breadcrumb-contain"], ["href", "/"], [1, "fa", "fa-home"], [3, "href"], [1, "fa", "fa-angle-double-right"], [1, "breadcrumb-txt"], ["class", "agency blog-sec blog-sidebar single_blog_item pt-4", 4, "ngIf"], [1, "agency", "blog-sec", "blog-sidebar", "single_blog_item", "pt-4"], [1, "col-lg-9"], [1, "col-lg-3"], [1, "border-around", "overflow-hide", "m-auto"], [1, "set-relative", "overflow-hide"], ["src", "assets/images/gym/1.png", "alt", "", 1, "img-fluid", "team"], ["class", "portfolio-detail", 4, "ngIf"], ["class", "container counter bg-light-inner p-4 mt-4", 4, "ngIf"], ["class", "container mt-4", 4, "ngIf"], [1, "page-header-comment", "mt-5"], [1, "comment-list", "blog_comment"], ["class", "comment_sec", 4, "ngFor", "ngForOf"], [1, "portfolio-detail"], [1, "col-6", "p-0", "m-0"], [1, "col-6", "p-0", "m-0", "text-right"], [1, "btn", "btn-outline-danger", "btn-sm"], [1, "fa", "fa-heart"], [1, "title-font"], [1, "row", "mt-4"], [1, "col-6", "p-0"], [1, "detail-container", "d-flex", "p-t-0", "mt-2"], [1, "portfolio-left"], [1, "text-left"], [1, "portfolio-right"], ["id", "gender-ico", "aria-hidden", "true", 1, "fa", "m-r-10", 3, "ngClass"], [1, "detail-container", "d-flex"], [1, "container", "counter", "bg-light-inner", "p-4", "mt-4"], [1, "col-md-3", "col-6", "counter-container"], [1, "counters"], ["aria-hidden", "true", 1, "fa", "fa-calendar", "img-fluid", "counter-img"], [1, "counter-text"], [1, "count-number"], [1, "counts", "text-center"], [1, "count-desc", "text-center"], ["aria-hidden", "true", 1, "fa", "fa-gamepad", "img-fluid", "counter-img"], ["aria-hidden", "true", 1, "fa", "fa-trophy", "img-fluid", "counter-img"], ["aria-hidden", "true", 1, "fa", "fa-user", "img-fluid", "counter-img"], [1, "container", "mt-4"], [1, "col-md-6", "col-sm-6", "service-container"], [1, "chat-box"], [1, "feature-content"], [1, "service-heading"], ["class", "player-activity-summary", 4, "ngIf"], [1, "row", "mt-5"], [1, "player-activity-summary"], [1, "list-group", "list-group-flush"], ["_ngcontent-serverapp-c366", "", 1, "fa", "fa-angle-double-right", "mr-2"], [1, "comment_sec"], [1, "blog_center"], [1, "blog_user", "arrow", "left"], [1, "panel-body"], [1, "comment-user"], [1, "fa", "fa-user"], [1, "comment-date"], [1, "fa", "fa-clock-o"], [1, "comment-post"]],
  template: function PlayerDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-gym-nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "section", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "ul")(10, "li")(11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " players");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div")(18, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PlayerDetailComponent_section_20_Template, 20, 5, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "app-gym-footer");
    }
    if (rf & 2) {
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "/players/", ctx.keyword, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_2_0 = ctx.player == null ? null : ctx.player.FullName) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.player);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _shared_components_gym_footer_gym_footer_component__WEBPACK_IMPORTED_MODULE_2__.GymFooterComponent, _shared_components_gym_nav_gym_nav_component__WEBPACK_IMPORTED_MODULE_3__.GymNavComponent, _player_list_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.PercentPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [".player-list-header[_ngcontent-%COMP%] {\n  min-height: 70px;\n}\n\n.breadcrumb-section-main[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.blue-text[_ngcontent-%COMP%] {\n  color: rgb(65, 163, 255) !important;\n}\n\n.red-text[_ngcontent-%COMP%] {\n  color: #e3154f !important;\n}\n\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\n\n.border-around[_ngcontent-%COMP%] {\n  border: 13px solid #fff;\n  border-radius: 100%;\n  box-shadow: 0 0 30px #e2e2e2;\n  height: 150px;\n  width: 150px;\n}\n\n#gender-ico[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n\n.portfolio-left[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n\n.portfolio-right[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n\n.counter-img[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  color: #357fef;\n  font-weight: 500;\n}\n\n.player-activity-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: #357fef;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9wbGF5ZXJzL3BsYXllci1kZXRhaWwvcGxheWVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXllci1saXN0LWhlYWRlcntcclxuICAgIG1pbi1oZWlnaHQ6NzBweDtcclxufVxyXG5cclxuLmJyZWFkY3J1bWItc2VjdGlvbi1tYWluIHtcclxuICAgIHBhZGRpbmc6MzBweDtcclxufVxyXG5cclxuLmJsdWUtdGV4dCB7XHJcbiAgICBjb2xvcjogcmdiYSg2NSwgMTYzLCAyNTUsIDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWQtdGV4dCB7XHJcbiAgICBjb2xvcjojZTMxNTRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmgxIHNwYW57XHJcbiAgICBmb250LXNpemU6MC43ZW07XHJcbn1cclxuXHJcbi5ib3JkZXItYXJvdW5kIHtcclxuICAgIGJvcmRlcjogMTNweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDMwcHggI2UyZTJlMjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4ICNlMmUyZTI7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4jZ2VuZGVyLWljb3tcclxuICAgIGZvbnQtc2l6ZTowLjhlbTtcclxufVxyXG5cclxuLnBvcnRmb2xpby1sZWZ0IHtcclxuICAgIHdpZHRoOjUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLXJpZ2h0IHtcclxuICAgIHdpZHRoOjUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY291bnRlci1pbWcge1xyXG4gICAgZm9udC1zaXplOjEuOGVtO1xyXG4gICAgY29sb3I6IzM1N2ZlZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5wbGF5ZXItYWN0aXZpdHktc3VtbWFyeSB7XHJcbiAgICBzdHJvbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxLjFlbTtcclxuICAgICAgICBjb2xvcjojMzU3ZmVmO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
class blogDetailDB {}
blogDetailDB.Details = {
  date: 'July, 24th 2018',
  title: 'Sandford Stadium Improvements',
  detail1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  detail2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  name: 'Mark jkcno',
  like: '10',
  comment: ', 50',
  section: 'Comments :',
  commentSection: [{
    Id: 1,
    commentImg: 'assets/images/app_landing2/team/1.png',
    commentName: 'That Guy',
    commentDate: 'Dec 16,2014',
    commentDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    commentReplayTag: 'reply'
  }, {
    Id: 2,
    commentImg: 'assets/images/app_landing2/team/2.png',
    commentName: 'That Guy',
    commentDate: 'Dec 16,2014',
    commentDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    commentReplayTag: 'reply'
  }, {
    Id: 3,
    commentImg: 'assets/images/app_landing2/team/3.png',
    commentName: 'That Guy',
    commentDate: 'Dec 16,2014',
    commentDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    commentReplayTag: 'reply'
  }, {
    Id: 4,
    commentImg: 'assets/images/app_landing2/team/4.png',
    commentName: 'That Guy',
    commentDate: 'Dec 16,2014',
    commentDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    commentReplayTag: 'reply'
  }]
};

/***/ }),

/***/ 92800:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/players/player-list/player-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerListComponent": () => (/* binding */ PlayerListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_service_player_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/player.service */ 78633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_gym_footer_gym_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/gym-footer/gym-footer.component */ 92043);
/* harmony import */ var _shared_components_gym_nav_gym_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/gym-nav/gym-nav.component */ 79577);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 46265);











function PlayerListComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PlayerListComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Maximum 50 character ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PlayerListComponent_div_37_i_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 58);
  }
}
function PlayerListComponent_div_37_h6_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.toDivision(player_r3));
  }
}
const _c0 = function (a0, a1) {
  return {
    "blue-bg": a0,
    "red-bg": a1
  };
};
const _c1 = function (a0, a1) {
  return {
    "blue-text fa-male": a0,
    "red-text fa-female": a1
  };
};
const _c2 = function (a0, a1) {
  return {
    "blue-text": a0,
    "red-text": a1
  };
};
function PlayerListComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 30)(7, "div", 31)(8, "div")(9, "div", 32)(10, "div", 33)(11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, PlayerListComponent_div_37_i_22_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PlayerListComponent_div_37_h6_23_Template, 2, 1, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 43)(25, "div", 4)(26, "div", 44)(27, "h5", 45)(28, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 4)(35, "div", 49)(36, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Match Wins");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 49)(43, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Winning");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 53)(51, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Matches");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 53)(58, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Tournaments");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 56)(65, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const player_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c0, player_r3.Gender == "M", player_r3.Gender == "F"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.toInitials(player_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Last Played: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 18, player_r3.LastPlayed.toDate(), "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](player_r3.State);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](26, _c1, player_r3.Gender == "M", player_r3.Gender == "F"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](29, _c2, player_r3.Gender == "M", player_r3.Gender == "F"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](player_r3.Gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", player_r3.Division > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", player_r3.Division > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](player_r3.FullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.toRating(player_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" RC ID: ", player_r3.Id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](player_r3.TotalWins);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](47, 21, player_r3.TotalWins / player_r3.TotalPlayedMatches));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](player_r3.TotalPlayedMatches);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](player_r3.TotalPlayedEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("href", "/player/", player_r3.Id, "?keyword=", ctx_r2.keyword, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
const _c3 = function () {
  return {
    "background-image": "url(assets/images/gym/header3.jpg)"
  };
};
class PlayerListComponent {
  constructor(fb, playerService, route) {
    this.fb = fb;
    this.playerService = playerService;
    this.route = route;
    this.players = [];
    this.checkoutForm = this.fb.group({
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]]
    });
  }
  ngOnInit() {
    this.keyword = this.route.snapshot.params.keyword;
    this.playerService.searchPlayerByName(this.keyword).subscribe(players => {
      this.players = players;
      console.log(this.players);
    });
  }
  toInitials(player) {
    const firstInitial = player.FirstName.charAt(0);
    const lastInitial = player.LastName.charAt(0);
    return `${firstInitial}${lastInitial}`;
  }
  toRating(player) {
    return `${player.Rating}±${player.StDev}`;
  }
  toDivision(player) {
    switch (player.Division) {
      case 0:
        return "";
      case 1:
        return "Div 1";
      case 2:
        return "Div 2";
      case 3:
        return "Div 3";
      case 4:
        return "Div 4";
      case 5:
        return "Div 5";
      case 99:
        return "Premier";
    }
  }
}
PlayerListComponent.ɵfac = function PlayerListComponent_Factory(t) {
  return new (t || PlayerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_player_service__WEBPACK_IMPORTED_MODULE_0__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
};
PlayerListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PlayerListComponent,
  selectors: [["app-player-list"]],
  decls: 41,
  vars: 6,
  consts: [[1, "header5-content"], [1, "player-list-header", "bg", 3, "ngStyle"], [1, "breadcrumb-section-main", "inner-3"], [1, "container"], [1, "row"], [1, "col-12"], [1, "breadcrumb-contain"], ["href", "/"], [1, "fa", "fa-home"], [1, "fa", "fa-angle-double-right"], [1, "breadcrumb-txt"], [1, "search", "pt-0", "pb-0"], [1, "container", "padding-cls"], [1, "checkout-page"], [1, "checkout-form"], [1, "form-group", "col-md-12", "col-sm-12", "col-xs-12"], [1, "field-label"], ["type", "text", "name", "address", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], ["class", "text text-danger", 4, "ngIf"], [1, "agency", "blog", "blog-sec", "blog-sidebar", "blog-list", "sider", "pt-4"], [1, "row", "pl-0", "pr-0"], [1, "col-lg-9"], ["class", "col-12 blog-sec blog-list", 4, "ngFor", "ngForOf"], [1, "col-lg-3"], [1, "text", "text-danger"], [1, "col-12", "blog-sec", "blog-list"], [1, "blog-agency"], [1, "row", "blog-contain", "pl-0", "pr-0"], [1, "col-xl-2", "col-lg-3", "col-md-3", "p-0"], [1, "text-center", "init-img", 3, "ngClass"], [1, "col-xl-10", "col-lg-9", "col-md-9", "p-0"], [1, "img-container", "center-content"], [1, "blog-info"], [1, "m-b-20"], [1, "center-text"], ["aria-hidden", "true", 1, "fa", "fa-clock-o", "m-r-10"], [1, "m-r-25", "font-blog"], ["aria-hidden", "true", 1, "fa", "fa-map-marker", "m-r-10"], [1, "font-blog", "m-r-25"], ["aria-hidden", "true", 1, "fa", "m-r-10", 3, "ngClass"], [1, "font-blog", "m-r-25", 3, "ngClass"], ["class", "fa fa-list-ol m-r-10", "aria-hidden", "true", 4, "ngIf"], ["class", "font-blog m-r-25", 4, "ngIf"], [1, "container-fluid", "mt-2"], [1, "col-xl-8", "col-md-7"], [1, "blog-head", "font-600"], [1, "m-r-25"], [1, "text-muted"], [1, "col-xl-4", "col-md-5", "text-right", "align-middle", "rc-id"], [1, "col-xl-3", "col-6"], [1, "text-center"], ["aria-hidden", "true", 1, "fa", "fa-trophy", "m-r-0"], ["aria-hidden", "true", 1, "fa", "fa-bar-chart", "m-r-0"], [1, "col-xl-3", "col-6", "counter-container"], ["aria-hidden", "true", 1, "fa", "fa-list", "m-r-0"], ["aria-hidden", "true", 1, "fa", "fa-calendar-check-o", "m-r-0"], [1, "btn-bottom"], [1, "btn", "btn-default", "btn-white", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-list-ol", "m-r-10"]],
  template: function PlayerListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-gym-nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "section", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "ul")(10, "li")(11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li")(14, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " players");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div")(18, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Australian Players");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "section", 11)(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "form")(25, "div", 4)(26, "div", 15)(27, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, PlayerListComponent_div_30_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, PlayerListComponent_div_31_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "section", 19)(33, "div", 3)(34, "div", 20)(35, "div", 21)(36, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, PlayerListComponent_div_37_Template, 67, 32, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "app-sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "app-gym-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["address"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.address.touched && (ctx.checkoutForm.controls.address.errors == null ? null : ctx.checkoutForm.controls.address.errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.address.touched && (ctx.checkoutForm.controls.address.errors == null ? null : ctx.checkoutForm.controls.address.errors.maxlength));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.players);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _shared_components_gym_footer_gym_footer_component__WEBPACK_IMPORTED_MODULE_1__.GymFooterComponent, _shared_components_gym_nav_gym_nav_component__WEBPACK_IMPORTED_MODULE_2__.GymNavComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.PercentPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: [".player-list-header[_ngcontent-%COMP%] {\n  min-height: 70px;\n}\n\n.breadcrumb-section-main[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.init-img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  font-weight: 400;\n  font-size: 80px;\n  display: flex;\n  align-items: center; \n  justify-content: center; \n}\n\n.blue-text[_ngcontent-%COMP%] {\n  color: rgb(65, 163, 255) !important;\n}\n\n.red-text[_ngcontent-%COMP%] {\n  color: #e3154f !important;\n}\n\n.blue-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, rgba(65, 163, 255, 0.6), rgba(57, 159, 255, 0.6));\n}\n\n.red-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, rgba(227, 21, 79, 0.6), rgba(228, 18, 77, 0.6));\n}\n\n.blog-head[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.rating[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.rating[_ngcontent-%COMP%]   .rating-number[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: 200;\n}\n\n.btn-bottom[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n\n.m-r-0[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n}\n\n@media only screen and (max-width: 991px) {\n  .init-img[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 60px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .player-list-header[_ngcontent-%COMP%] {\n    min-height: 60px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .init-img[_ngcontent-%COMP%] {\n    height: 60px;\n    font-weight: 400;\n    font-size: 40px;\n  }\n  .rc-id[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9wbGF5ZXJzL3BsYXllci1saXN0L3BsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBLEVBQUEsdUJBQUE7RUFDQSx1QkFBQSxFQUFBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQ0FBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLHdGQUFBO0FBQUo7O0FBR0E7RUFDSSxzRkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUtJLGdCQUFBO0FBSko7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFUjs7QUFHQTtFQUNJLDJCQUFBO0FBQUo7O0FBR0E7RUFDSSwwQkFBQTtBQUFKOztBQWtDQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0VBL0JOO0FBQ0Y7QUEyQ0E7RUFDSTtJQUNJLGdCQUFBO0VBekNOO0FBQ0Y7QUE2Q0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUEzQ047RUE4Q0U7SUFDSSw2QkFBQTtFQTVDTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXllci1saXN0LWhlYWRlcntcclxuICAgIG1pbi1oZWlnaHQ6NzBweDtcclxufVxyXG5cclxuLmJyZWFkY3J1bWItc2VjdGlvbi1tYWluIHtcclxuICAgIHBhZGRpbmc6MzBweDtcclxufVxyXG5cclxuLmluaXQtaW1nIHtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6ODBweDsgICAgXHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIFZlcnRpY2FsIGNlbnRlcmluZyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIEhvcml6b250YWwgY2VudGVyaW5nICovXHJcbn1cclxuXHJcbi5ibHVlLXRleHQge1xyXG4gICAgY29sb3I6IHJnYmEoNjUsIDE2MywgMjU1LCAxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVkLXRleHQge1xyXG4gICAgY29sb3I6I2UzMTU0ZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmx1ZS1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDY1LCAxNjMsIDI1NSwgMC42KSwgcmdiYSg1NywgMTU5LCAyNTUsIDAuNikpO1xyXG59XHJcblxyXG4ucmVkLWJnIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjI3LCAyMSwgNzksIDAuNiksIHJnYmEoMjI4LCAxOCwgNzcsIDAuNikpO1xyXG59XHJcblxyXG4uYmxvZy1oZWFkIHtcclxuICAgIGZvbnQtc2l6ZToxLjVlbTtcclxufVxyXG5cclxuLnJhdGluZ3tcclxuICAgIC5yYXRpbmctbnVtYmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgfVxyXG4gICAgZm9udC1zaXplOjEuNWVtO1xyXG59XHJcblxyXG4uYnRuLWJvdHRvbXtcclxuICAgIG1hcmdpbi10b3A6NTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1yLTAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCkge1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSAgIHtcclxuICAgIC5pbml0LWltZ3tcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTo2MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5wbGF5ZXItbGlzdC1oZWFkZXJ7XHJcbiAgICAgICAgbWluLWhlaWdodDo2MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5pbml0LWltZ3tcclxuICAgICAgICBoZWlnaHQ6NjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAucmMtaWR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 46265:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/players/player-list/sidebar/sidebar.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SidebarComponent {
  constructor() {}
  ngOnInit() {}
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)();
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["app-sidebar"]],
  decls: 78,
  vars: 0,
  consts: [[1, "blog-side"], [1, "blog-title"], [1, "sidebar-container", "borders"], [1, "sidebar-list"], [1, "d-flex"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-angle-right", "m-r-15"], [1, "sidebar-container"], [1, "post-container", "d-flex"], [1, "w-35", "m-r-25"], ["src", "assets/images/inner-page/side-img/1.jpg", "alt", "", 1, "img-fluid"], [1, "badge"], [1, "post-head"], [1, "date"], ["src", "assets/images/inner-page/side-img/2.jpg", "alt", "", 1, "img-fluid"], [1, "badge", "badge-red"], ["src", "assets/images/inner-page/side-img/3.jpg", "alt", "", 1, "img-fluid"], [1, "badge", "badge-yellow"], ["src", "assets/images/inner-page/side-img/4.jpg", "alt", "", 1, "img-fluid"], [1, "badge", "badge-blue"], [1, "newsletter", "text-center", "form"], [1, "form-group"], ["type", "text", "placeholder", "enter email", 1, "form-control"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "States");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "ul", 3)(6, "li", 4)(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem Ipsum Is Simple");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4)(11, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Many Variations");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4)(15, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "random text");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4)(19, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "lorem ipsum.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 4)(23, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "it's Random.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div")(27, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Top Movers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7)(30, "div", 8)(31, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div")(36, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "lorem ipsum");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "nov 22, 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8)(41, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div")(46, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "lorem ipsum");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "nov 22, 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8)(51, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div")(56, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "lorem ipsum");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "nov 22, 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8)(61, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div")(66, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "lorem ipsum");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "nov 22, 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7)(71, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "newsletter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20)(74, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 85131:
/*!******************************************!*\
  !*** ./src/app/models/player-history.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 50568:
/*!****************************************!*\
  !*** ./src/app/service/nav.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavService": () => (/* binding */ NavService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class NavService {
  constructor() {
    this.MENUITEMS = [{
      title: 'Players',
      type: 'link',
      path: '/players'
    }, {
      title: 'Events',
      type: 'link',
      path: '/events'
    }, {
      title: 'Create Account',
      type: 'link',
      path: '/register'
    }
    //  {
    // 		title: 'Pages', type: 'sub', children: [
    //          { path: '/404', title: '404',  type: 'link' },
    //          { path: '/page/faq', title: 'FAQ',  type: 'link' },
    //          { path: '/page/typography', title: 'Typography',  type: 'link' },
    //          { path: '/maintenance', title: 'Maintenance',  type: 'link' },
    //          { path: '/page/about-us', title: 'About-us',  type: 'link' },
    //       { title: 'Team',  type: 'sub', children: [
    //             { path: '/page/team', title: 'Team',  type: 'link' },
    //             { path: '/page/team-grid', title: 'Team Grid',  type: 'link' },
    //             { path: '/page/team-list', title: 'Team List',  type: 'link' }]
    //       },
    //       { title: 'Comming Soon',  type: 'sub', children: [
    //          { path: '/commingsoon1', title: 'Comming Soon1',  type: 'link' },
    //          { path: '/commingsoon2', title: 'Comming Soon2',  type: 'link' }]
    //       }]
    //  },
    //  { 
    //    title: 'Elements',  megaMenu: true, megaMenuType: 'small',  type: 'sub', children: [
    //      { title: 'Elements1',  type: 'sub', children: [
    //          { path: '/elements/alerts', title: 'Alerts',  type: 'link', icon:'alert' },
    //          { path: '/elements/accordion', title: 'Accordion',  type: 'link', icon:'layout-accordion-merged' },
    //          { path: '/elements/boxshadow', title: 'Box Shadow',  type: 'link', icon:'layers' }, 
    //          { path: '/elements/button', title: 'Buttons',  type: 'link', icon:'write' }, 
    //          { path: '/elements/contact', title: 'Contact',  type: 'link', icon:'map-alt' },]
    //      },
    //      { title: 'Elements2',  type: 'sub', children: [
    //          { path: '/elements/event-schedule', title: 'Event-Schedule',  type: 'link', icon:'list' },
    //          { path: '/elements/gallery', title: 'Gallery',  type: 'link', icon:'gallery' },
    //          { path: '/elements/pricing', title: 'Pricing',  type: 'link', icon:'money' },
    //          { path: '/elements/counter', title: 'Counter',  type: 'link', icon:'time' },
    //          { path: '/elements/count-down', title: 'Countdown',  type: 'link', icon:'alarm-clock' }]
    //      },
    //      { title: 'Elements3',  type: 'sub', children: [
    //        { path: '/elements/progressbar', title: 'Progress Bar',  type: 'link', icon:'bar-chart' },
    //        { path: '/elements/testimonial', title: 'Testimonial',  type: 'link', icon:'thought' },
    //        { path: '/elements/video', title: 'Video',  type: 'link', icon:'video-camera' },
    //        { path: '/elements/service', title: 'Service',  type: 'link', icon:'headphone' },
    //        { path: '/elements/subscribe', title: 'Subscribe',  type: 'link', icon:'share-alt' }]
    //      }
    //    ]
    //  },   
    //  { 
    //    title: 'Shop',  megaMenu: true, megaMenuType: 'large',  type: 'sub', children: [
    //     { title: 'Shop Categories',  type: 'link', children: [
    //        { path: '/shop/collection-left-sidebar/all', title: 'Left Sidebar',  type: 'link' },
    //        { path: '/shop/collection-left-sidebar-two-grid/all', title: 'Two Grid',  type: 'link' },
    //        { path: '/shop/collection-left-sidebar-three-grid/all', title: 'Three Grid',  type: 'link' },
    //        { path: '/shop/collection-right-sidebar/all', title: 'Right Sidebar',  type: 'link' },
    //        { path: '/shop/collection-right-sidebar-two-grid/all', title: 'Two Grid',  type: 'link' },
    //        { path: '/shop/collection-right-sidebar-three-grid/all', title: 'Three Grid',  type: 'link' }]
    //     },
    //     { title: 'Shop Categories',  type: 'link', children: [
    //       { path: '/shop/collection-no-sidebar/all', title: 'No Sidebar',  type: 'link' },
    //       { path: '/shop/collection-no-sidebar-two-grid/all', title: 'Two Grid',  type: 'link' },
    //       { path: '/shop/collection-no-sidebar-three-grid/all', title: 'Three Grid',  type: 'link' },
    //       { path: '/shop/metro/all', title: 'Category Metro',  type: 'link' }]
    //     },
    //     { title: 'Product Pages',  type: 'link', children: [
    //        { path: '/shop/no-sidebar/1', title: 'No Sidebar',  type: 'link' },
    //        { path: '/shop/left-sidebar/2', title: 'Left Sidebar',  type: 'link' },
    //        { path: '/shop/right-sidebar/3', title: 'Right Sidebar',  type: 'link' },
    //        { path: '/shop/three-grid/1', title: 'Three Grid',  type: 'link' },
    //        { path: '/shop/three-grid-left-sidebar/2', title: 'Three Grid Left',  type: 'link' },
    //        { path: '/shop/three-grid-right-sidebar/3', title: 'Three Grid Right',  type: 'link' }]
    //     },
    //     { title: 'Product Pages',  type: 'link', children: [
    //        { path: '/shop/accordian/1', title: 'Accordian',  type: 'link' },
    //        { path: '/shop/bundle/1', title: 'Bundle',  type: 'link' },
    //        { path: '/shop/image-swatch/1', title: 'Image Swatch',  type: 'link' },
    //        { path: '/shop/image-outside/1', title: 'Image Outside',  type: 'link' },
    //        { path: '/shop/image-sticky/1', title: 'Image Sticky',  type: 'link' }]
    //     },
    //     { title: 'Shop Pages',  type: 'link', children: [
    //      { path: '/shop/cart', title: 'Cart',  type: 'link' },
    //      { path: '/shop/checkout', title: 'Checkout',  type: 'link' },
    //      { path: '/shop/compare', title: 'Comapre',  type: 'link' },
    //      { path: '/shop/signup', title: 'Signup',  type: 'link' },
    //      { path: '/shop/login', title: 'Login',  type: 'link' },
    //      { path: '/shop/wishlist', title: 'Wishlist',  type: 'link' }]
    //    }
    //    ]
    //  }
    ];
    // Array
    this.items = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.MENUITEMS);
  }
}
NavService.ɵfac = function NavService_Factory(t) {
  return new (t || NavService)();
};
NavService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NavService,
  factory: NavService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 78633:
/*!*******************************************!*\
  !*** ./src/app/service/player.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerService": () => (/* binding */ PlayerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);



class PlayerService {
  constructor(firestore) {
    this.firestore = firestore;
  }
  searchPlayerByName(searchTerm) {
    return this.firestore.collection('Players', ref => ref.where('Names', 'array-contains', searchTerm.toLowerCase())).valueChanges();
  }
  getPlayer(id) {
    return this.firestore.doc(`Players/${id}`).valueChanges();
  }
  getPlayerHistory(id) {
    return this.firestore.doc(`PlayerHistories/${id}`).valueChanges();
  }
}
PlayerService.ɵfac = function PlayerService_Factory(t) {
  return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore));
};
PlayerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PlayerService,
  factory: PlayerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 92043:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/gym-footer/gym-footer.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymFooterComponent": () => (/* binding */ GymFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tap-to-top/tap-to-top.component */ 61916);


class GymFooterComponent {
  constructor() {}
  ngOnInit() {}
}
GymFooterComponent.ɵfac = function GymFooterComponent_Factory(t) {
  return new (t || GymFooterComponent)();
};
GymFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: GymFooterComponent,
  selectors: [["app-gym-footer"]],
  decls: 79,
  vars: 0,
  consts: [[1, "gym", "footer2"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-sm-12", "set-first"], [1, "logo-sec"], [1, "footer-title", "mobile-title"], [1, "text-white"], [1, "footer-contant"], ["src", "assets/images/logo/ttplayers-1.png", "alt", "", 1, "img-fluid", "footer-logo"], [1, "footer-para"], [1, "text-white", "para-address"], [1, "col-lg-2", "col-md-3", "col-sm-12"], [1, "footer-headings"], [1, "footer-lists", "op-text"], [1, ""], ["href", "#"], [1, "col-lg-3", "col-md-12", "col-sm-12", "set-last"]],
  template: function GymFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "TTPlayers.com.au");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "NSW, Australia");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 5)(17, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Events");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7)(20, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Events");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "ul", 13)(24, "li", 14)(25, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Upcoming Events");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 14)(28, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Past Events");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11)(31, "div", 5)(32, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Players");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7)(35, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Players");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div")(38, "ul", 13)(39, "li", 14)(40, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Leaderboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 14)(43, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Performance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li", 14)(46, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li", 14)(49, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Peer Comparison");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 11)(52, "div", 5)(53, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Clubs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 7)(56, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Clubs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div")(59, "ul", 13)(60, "li", 14)(61, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Clubs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li", 14)(64, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Maps");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 16)(67, "div", 5)(68, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Shops");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 7)(71, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Shops");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div")(74, "ul", 13)(75, "li", 14)(76, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Coming soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "app-tap-to-top");
    }
  },
  dependencies: [_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 79577:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/gym-nav/gym-nav.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymNavComponent": () => (/* binding */ GymNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation/menu/menu.component */ 43938);


class GymNavComponent {
  constructor() {}
  ngOnInit() {}
}
GymNavComponent.ɵfac = function GymNavComponent_Factory(t) {
  return new (t || GymNavComponent)();
};
GymNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: GymNavComponent,
  selectors: [["app-gym-nav"]],
  decls: 8,
  vars: 0,
  consts: [[1, "gym", "loding-header", "nav-abs", "custom-scroll"], [1, "container"], [1, "row"], [1, "col"], ["href", "#", 1, "d-inline-block", "m-r-auto"], ["src", "assets/images/logo/ttplayers-1.png", "alt", "", 1, "img-fluid"]],
  template: function GymNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav")(5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 90605:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class LoaderComponent {
  constructor() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 1500);
  }
  ngOnInit() {}
  ngOnDestroy() {}
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || LoaderComponent)();
};
LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoaderComponent,
  selectors: [["app-loader"]],
  decls: 11,
  vars: 2,
  consts: [[1, "loader-wrapper"], [1, "loader"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loderhide", !ctx.show);
    }
  },
  styles: [".loader-wrapper.loderhide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItd3JhcHBlci5sb2RlcmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 43938:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/navigation/menu/menu.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _service_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../service/nav.service */ 50568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);





function MenuComponent_li_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_li_10_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.setActive(menuItem_r1.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function MenuComponent_li_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function MenuComponent_li_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function MenuComponent_li_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function MenuComponent_li_10_div_5_div_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon-", subChildrenItem_r18.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subChildrenItem_r18.title);
  }
}
function MenuComponent_li_10_div_5_div_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_div_5_div_3_li_5_a_1_Template, 3, 4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r18.type === "link");
  }
}
function MenuComponent_li_10_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 20)(2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_li_10_div_5_div_3_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const childrenItem_r16 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.setChildActive(childrenItem_r16.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuComponent_li_10_div_5_div_3_li_5_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const childrenItem_r16 = ctx.$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menuItem_r1.megaMenuType == "small" ? "col-lg-4" : menuItem_r1.megaMenuType == "medium" ? "col-lg-3" : menuItem_r1.megaMenuType == "large" ? "col" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](childrenItem_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("menu-icon", menuItem_r1.title == "Elements")("openSubChildMenu", ctx_r15.ischildActive(childrenItem_r16.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r16.children);
  }
}
function MenuComponent_li_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_div_5_div_3_Template, 6, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensubmenu", ctx_r6.isActive(menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_ul_6_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_li_10_ul_6_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.setChildActive(childrenItem_r26.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_1_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_2_Template, 2, 1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_3_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_4_Template, 2, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = ctx.$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "link" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "extLink" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "extTabLink" && !menuItem_r1.megaMenu);
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_Template, 5, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("openSubChildMenu", ctx_r31.ischildActive(childrenItem_r26.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r26.children);
  }
}
function MenuComponent_li_10_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_a_1_Template, 2, 1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_li_10_ul_6_li_1_a_2_Template, 2, 1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_6_li_1_a_3_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MenuComponent_li_10_ul_6_li_1_a_4_Template, 2, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuComponent_li_10_ul_6_li_1_ul_5_Template, 2, 3, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = ctx.$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sub-menu", childrenItem_r26.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "link" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "extLink" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "extTabLink" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r26.children);
  }
}
function MenuComponent_li_10_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_Template, 6, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensubmenu", ctx_r7.isActive(menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_a_1_Template, 2, 1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_li_10_a_2_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_a_3_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MenuComponent_li_10_a_4_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuComponent_li_10_div_5_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MenuComponent_li_10_ul_6_Template, 2, 3, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menuItem_r1.megaMenu ? "mega-menu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.megaMenu && menuItem_r1.megaMenuType == "small" || menuItem_r1.megaMenuType == "medium" || menuItem_r1.megaMenuType == "large");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.children && !menuItem_r1.megaMenu);
  }
}
class MenuComponent {
  constructor(navServices) {
    this.navServices = navServices;
    this.openSide = false;
    this.activeItem = 'home';
    this.active = false;
    this.activeChildItem = '';
    this.overlay = false;
  }
  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }
  toggleSidebar() {
    this.openSide = !this.openSide;
  }
  closeOverlay() {
    this.openSide = false;
  }
  //For Active Main menu in Mobile View
  setActive(menuItem) {
    if (this.activeItem === menuItem) {
      this.activeItem = '';
    } else {
      this.activeItem = menuItem;
    }
  }
  isActive(item) {
    return this.activeItem === item;
  }
  // For Active Child Menu in Mobile View
  setChildActive(subMenu) {
    if (this.activeChildItem === subMenu) {
      this.activeChildItem = '';
    } else {
      this.activeChildItem = subMenu;
    }
  }
  ischildActive(subMenu) {
    return this.activeChildItem === subMenu;
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 11,
  vars: 5,
  consts: [[1, "overlay-sidebar-header", 3, "click"], [1, "responsive-btn"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars", "text-white"], ["id", "togglebtn", 1, "navbar", "m-l-auto"], [1, "main-menu"], [3, "class", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "class", "dropdown", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["href", "javascript:void(0)", "class", "dropdown", 4, "ngIf"], ["href", "javascript:void(0)", 4, "ngIf"], ["class", "mega-menu-container", 3, "opensubmenu", 4, "ngIf"], [3, "opensubmenu", 4, "ngIf"], ["href", "javascript:void(0)", 1, "dropdown", 3, "click"], ["routerLinkActive", "active", 3, "routerLink"], ["href", "javascript:void(0)", 1, "dropdown"], ["href", "javascript:void(0)"], [1, "mega-menu-container"], [1, "container"], [1, "row"], [1, "menu-container"], [1, "menu-head", 3, "click"], [4, "ngFor", "ngForOf"], ["routerLink", "/", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/", "routerLinkActive", "active"], [3, "sub-menu", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "target", "_blank", 4, "ngIf"], [3, "openSubChildMenu", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], ["href", "javascript:void(0)", "target", "_blank"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_0_listener() {
        return ctx.closeOverlay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_2_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 1)(6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_6_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MenuComponent_li_10_Template, 7, 8, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("overlay-sidebar-header-open", ctx.openSide);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("openSidebar", ctx.openSide);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 61916:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tap-to-top/tap-to-top.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TapToTopComponent": () => (/* binding */ TapToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


const _c0 = function (a0) {
  return {
    "tap-top": a0
  };
};
class TapToTopComponent {
  constructor() {
    this.showScrollHeight = 500;
    this.hideScrollHeight = 10;
  }
  ngOnInit() {}
  onActivate() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 200); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
  onWindowScroll() {
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    } else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }
}
TapToTopComponent.ɵfac = function TapToTopComponent_Factory(t) {
  return new (t || TapToTopComponent)();
};
TapToTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TapToTopComponent,
  selectors: [["app-tap-to-top"]],
  hostBindings: function TapToTopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TapToTopComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 3,
  vars: 3,
  consts: [[3, "ngClass", "click"], [1, "fa", "fa-angle-double-up"]],
  template: function TapToTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TapToTopComponent_Template_div_click_0_listener() {
        return ctx.onActivate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.showScroll));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loader/loader.component */ 90605);
/* harmony import */ var _components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/menu/menu.component */ 43938);
/* harmony import */ var _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tap-to-top/tap-to-top.component */ 61916);
/* harmony import */ var _components_gym_footer_gym_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/gym-footer/gym-footer.component */ 92043);
/* harmony import */ var _components_gym_nav_gym_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gym-nav/gym-nav.component */ 79577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);










class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_2__.TapToTopComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent, _components_gym_footer_gym_footer_component__WEBPACK_IMPORTED_MODULE_3__.GymFooterComponent, _components_gym_nav_gym_nav_component__WEBPACK_IMPORTED_MODULE_4__.GymNavComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule],
    exports: [_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_2__.TapToTopComponent, _components_gym_footer_gym_footer_component__WEBPACK_IMPORTED_MODULE_3__.GymFooterComponent, _components_gym_nav_gym_nav_component__WEBPACK_IMPORTED_MODULE_4__.GymNavComponent]
  });
})();

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyALRRW6a3ScxXIj-mNNwnb4_GK8M6XS4Uk",
    authDomain: "ttplayers-c589c.firebaseapp.com",
    projectId: "ttplayers-c589c",
    storageBucket: "ttplayers-c589c.appspot.com",
    messagingSenderId: "577838485972",
    appId: "1:577838485972:web:0d13f5f6349c780f9d0641",
    measurementId: "G-9WP9TL1Y2E"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _assets_pace_pace_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pace/pace.min.js */ 42459);
/* harmony import */ var _assets_pace_pace_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_pace_pace_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
});

/***/ }),

/***/ 42459:
/*!*************************************!*\
  !*** ./src/assets/pace/pace.min.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! pace 0.5.3 */
(function () {
  var a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W = [].slice,
    X = {}.hasOwnProperty,
    Y = function (a, b) {
      function c() {
        this.constructor = a;
      }
      for (var d in b) X.call(b, d) && (a[d] = b[d]);
      return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
    },
    Z = [].indexOf || function (a) {
      for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
      return -1;
    };
  for (t = {
    catchupTime: 500,
    initialRate: .03,
    minTime: 500,
    ghostTime: 500,
    maxProgressPerFrame: 10,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, B = function () {
    var a;
    return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
  }, D = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, s = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == D && (D = function (a) {
    return setTimeout(a, 50);
  }, s = function (a) {
    return clearTimeout(a);
  }), F = function (a) {
    var b, c;
    return b = B(), (c = function () {
      var d;
      return d = B() - b, d >= 33 ? (b = B(), a(d, function () {
        return D(c);
      })) : setTimeout(c, 33 - d);
    })();
  }, E = function () {
    var a, b, c;
    return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? W.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
  }, u = function () {
    var a, b, c, d, e, f, g;
    for (b = arguments[0], d = 2 <= arguments.length ? W.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) if (c = d[f]) for (a in c) X.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? u(b[a], e) : b[a] = e);
    return b;
  }, p = function (a) {
    var b, c, d, e, f;
    for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
    return c / b;
  }, w = function (a, b) {
    var c, d, e;
    if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
      if (c = e.getAttribute("data-pace-" + a), !b) return c;
      try {
        return JSON.parse(c);
      } catch (f) {
        return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
      }
    }
  }, g = function () {
    function a() {}
    return a.prototype.on = function (a, b, c, d) {
      var e;
      return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
        handler: b,
        ctx: c,
        once: d
      });
    }, a.prototype.once = function (a, b, c) {
      return this.on(a, b, c, !0);
    }, a.prototype.off = function (a, b) {
      var c, d, e;
      if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
        if (null == b) return delete this.bindings[a];
        for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
        return e;
      }
    }, a.prototype.trigger = function () {
      var a, b, c, d, e, f, g, h, i;
      if (c = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
        for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
        return i;
      }
    }, a;
  }(), null == window.Pace && (window.Pace = {}), u(Pace, g.prototype), C = Pace.options = u({}, t, window.paceOptions, w()), T = ["ajax", "document", "eventLag", "elements"], P = 0, R = T.length; R > P; P++) J = T[P], C[J] === !0 && (C[J] = t[J]);
  i = function (a) {
    function b() {
      return U = b.__super__.constructor.apply(this, arguments);
    }
    return Y(b, a), b;
  }(Error), b = function () {
    function a() {
      this.progress = 0;
    }
    return a.prototype.getElement = function () {
      var a;
      if (null == this.el) {
        if (a = document.querySelector(C.target), !a) throw new i();
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
      }
      return this.el;
    }, a.prototype.finish = function () {
      var a;
      return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
    }, a.prototype.update = function (a) {
      return this.progress = a, this.render();
    }, a.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (a) {
        i = a;
      }
      return this.el = void 0;
    }, a.prototype.render = function () {
      var a, b;
      return null == document.querySelector(C.target) ? !1 : (a = this.getElement(), a.children[0].style.width = "" + this.progress + "%", (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? b = "99" : (b = this.progress < 10 ? "0" : "", b += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + b)), this.lastRenderedProgress = this.progress);
    }, a.prototype.done = function () {
      return this.progress >= 100;
    }, a;
  }(), h = function () {
    function a() {
      this.bindings = {};
    }
    return a.prototype.trigger = function (a, b) {
      var c, d, e, f, g;
      if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
        return g;
      }
    }, a.prototype.on = function (a, b) {
      var c;
      return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
    }, a;
  }(), O = window.XMLHttpRequest, N = window.XDomainRequest, M = window.WebSocket, v = function (a, b) {
    var c, d, e, f;
    f = [];
    for (d in b.prototype) try {
      e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0);
    } catch (g) {
      c = g;
    }
    return f;
  }, z = [], Pace.ignore = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], z.unshift("ignore"), c = b.apply(null, a), z.shift(), c;
  }, Pace.track = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], z.unshift("track"), c = b.apply(null, a), z.shift(), c;
  }, I = function (a) {
    var b;
    if (null == a && (a = "GET"), "track" === z[0]) return "force";
    if (!z.length && C.ajax) {
      if ("socket" === a && C.ajax.trackWebSockets) return !0;
      if (b = a.toUpperCase(), Z.call(C.ajax.trackMethods, b) >= 0) return !0;
    }
    return !1;
  }, j = function (a) {
    function b() {
      var a,
        c = this;
      b.__super__.constructor.apply(this, arguments), a = function (a) {
        var b;
        return b = a.open, a.open = function (d, e) {
          return I(d) && c.trigger("request", {
            type: d,
            url: e,
            request: a
          }), b.apply(a, arguments);
        };
      }, window.XMLHttpRequest = function (b) {
        var c;
        return c = new O(b), a(c), c;
      }, v(window.XMLHttpRequest, O), null != N && (window.XDomainRequest = function () {
        var b;
        return b = new N(), a(b), b;
      }, v(window.XDomainRequest, N)), null != M && C.ajax.trackWebSockets && (window.WebSocket = function (a, b) {
        var d;
        return d = null != b ? new M(a, b) : new M(a), I("socket") && c.trigger("request", {
          type: "socket",
          url: a,
          protocols: b,
          request: d
        }), d;
      }, v(window.WebSocket, M));
    }
    return Y(b, a), b;
  }(h), Q = null, x = function () {
    return null == Q && (Q = new j()), Q;
  }, H = function (a) {
    var b, c, d, e;
    for (e = C.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) if (b = e[c], "string" == typeof b) {
      if (-1 !== a.indexOf(b)) return !0;
    } else if (b.test(a)) return !0;
    return !1;
  }, x().on("request", function (b) {
    var c, d, e, f, g;
    return f = b.type, e = b.request, g = b.url, H(g) ? void 0 : Pace.running || C.restartOnRequestAfter === !1 && "force" !== I(f) ? void 0 : (d = arguments, c = C.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
      var b, c, g, h, i, j;
      if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
        for (Pace.restart(), i = Pace.sources, j = [], c = 0, g = i.length; g > c; c++) {
          if (J = i[c], J instanceof a) {
            J.watch.apply(J, d);
            break;
          }
          j.push(void 0);
        }
        return j;
      }
    }, c));
  }), a = function () {
    function a() {
      var a = this;
      this.elements = [], x().on("request", function () {
        return a.watch.apply(a, arguments);
      });
    }
    return a.prototype.watch = function (a) {
      var b, c, d, e;
      return d = a.type, b = a.request, e = a.url, H(e) ? void 0 : (c = "socket" === d ? new m(b) : new n(b), this.elements.push(c));
    }, a;
  }(), n = function () {
    function a(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = this;
      if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
      }), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function () {
        return h.progress = 100;
      });else f = a.onreadystatechange, a.onreadystatechange = function () {
        var b;
        return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
      };
    }
    return a;
  }(), m = function () {
    function a(a) {
      var b,
        c,
        d,
        e,
        f = this;
      for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function () {
        return f.progress = 100;
      });
    }
    return a;
  }(), d = function () {
    function a(a) {
      var b, c, d, f;
      for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b));
    }
    return a;
  }(), e = function () {
    function a(a) {
      this.selector = a, this.progress = 0, this.check();
    }
    return a.prototype.check = function () {
      var a = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return a.check();
      }, C.elements.checkInterval);
    }, a.prototype.done = function () {
      return this.progress = 100;
    }, a;
  }(), c = function () {
    function a() {
      var a,
        b,
        c = this;
      this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
      };
    }
    return a.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, a;
  }(), f = function () {
    function a() {
      var a,
        b,
        c,
        d,
        e,
        f = this;
      this.progress = 0, a = 0, e = [], d = 0, c = B(), b = setInterval(function () {
        var g;
        return g = B() - c - 50, c = B(), e.push(g), e.length > C.eventLag.sampleCount && e.shift(), a = p(e), ++d >= C.eventLag.minSamples && a < C.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
      }, 50);
    }
    return a;
  }(), l = function () {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = C.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = E(this.source, "progress"));
    }
    return a.prototype.tick = function (a, b) {
      var c;
      return null == b && (b = E(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / C.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, C.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + C.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
    }, a;
  }(), K = null, G = null, q = null, L = null, o = null, r = null, Pace.running = !1, y = function () {
    return C.restartOnPushState ? Pace.restart() : void 0;
  }, null != window.history.pushState && (S = window.history.pushState, window.history.pushState = function () {
    return y(), S.apply(window.history, arguments);
  }), null != window.history.replaceState && (V = window.history.replaceState, window.history.replaceState = function () {
    return y(), V.apply(window.history, arguments);
  }), k = {
    ajax: a,
    elements: d,
    document: c,
    eventLag: f
  }, (A = function () {
    var a, c, d, e, f, g, h, i;
    for (Pace.sources = K = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], C[a] !== !1 && K.push(new k[a](C[a]));
    for (i = null != (h = C.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) J = i[d], K.push(new J(C));
    return Pace.bar = q = new b(), G = [], L = new l();
  })(), Pace.stop = function () {
    return Pace.trigger("stop"), Pace.running = !1, q.destroy(), r = !0, null != o && ("function" == typeof s && s(o), o = null), A();
  }, Pace.restart = function () {
    return Pace.trigger("restart"), Pace.stop(), Pace.start();
  }, Pace.go = function () {
    var a;
    return Pace.running = !0, q.render(), a = B(), r = !1, o = F(function (b, c) {
      var d, e, f, g, h, i, j, k, m, n, o, p, s, t, u, v;
      for (k = 100 - q.progress, e = o = 0, f = !0, i = p = 0, t = K.length; t > p; i = ++p) for (J = K[i], n = null != G[i] ? G[i] : G[i] = [], h = null != (v = J.elements) ? v : [J], j = s = 0, u = h.length; u > s; j = ++s) g = h[j], m = null != n[j] ? n[j] : n[j] = new l(g), f &= m.done, m.done || (e++, o += m.tick(b));
      return d = o / e, q.update(L.tick(b, d)), q.done() || f || r ? (q.update(100), Pace.trigger("done"), setTimeout(function () {
        return q.finish(), Pace.running = !1, Pace.trigger("hide");
      }, Math.max(C.ghostTime, Math.max(C.minTime - (B() - a), 0)))) : c();
    });
  }, Pace.start = function (a) {
    u(C, a), Pace.running = !0;
    try {
      q.render();
    } catch (b) {
      i = b;
    }
    return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50);
  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return Pace;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}).call(this);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map