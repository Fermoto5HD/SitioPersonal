webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fm5BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Fm5BlogComponent = (function () {
    function Fm5BlogComponent() {
    }
    Fm5BlogComponent.prototype.ngOnInit = function () {
    };
    return Fm5BlogComponent;
}());
Fm5BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-fm5-blog',
        template: __webpack_require__(167),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [])
], Fm5BlogComponent);

//# sourceMappingURL=fm5-blog.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Fermoto5HD';
        this.meta = {
            "title": "Fermoto5HD",
            "description": "New site."
        };
    }
    AppComponent.prototype.myEvent = function (event) {
        console.log(event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'FM5-site',
        template: __webpack_require__(171),
        styles: [__webpack_require__(164)]
    })
], AppComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_component_main_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fm5_portfolio_fm5_portfolio_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__portfolio_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fm5_about_fm5_about_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fm5_home_fm5_home_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fm5_blog_fm5_blog_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fm5_trakt_fm5_trakt_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fm5_trakt_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__main_component_main_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__fm5_portfolio_fm5_portfolio_component__["a" /* FM5PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_8__fm5_about_fm5_about_component__["a" /* FM5AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__fm5_home_fm5_home_component__["a" /* FM5HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__fm5_blog_fm5_blog_component__["a" /* Fm5BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_11__fm5_trakt_fm5_trakt_component__["a" /* FM5TraktComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__site_router__["a" /* routes */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__portfolio_service__["a" /* PortfolioService */], __WEBPACK_IMPORTED_MODULE_12__fm5_trakt_service__["a" /* FM5TraktService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__main_component_main_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=site.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fm5_home_fm5_home_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fm5_about_fm5_about_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fm5_portfolio_fm5_portfolio_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fm5_trakt_fm5_trakt_component__ = __webpack_require__(67);
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });





var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__fm5_home_fm5_home_component__["a" /* FM5HomeComponent */], pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__fm5_home_fm5_home_component__["a" /* FM5HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__fm5_about_fm5_about_component__["a" /* FM5AboutComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_3__fm5_portfolio_fm5_portfolio_component__["a" /* FM5PortfolioComponent */] },
    { path: 'trakt', component: __WEBPACK_IMPORTED_MODULE_4__fm5_trakt_fm5_trakt_component__["a" /* FM5TraktComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);
//# sourceMappingURL=site.router.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron jumbotron-fluid jumbotron-full-height flex-center-vertical p-0\" style=\"background-image: url('assets/img/Fermoto5HD.jpg')\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"col-md-8\">\n\t\t\t<h1>Te cuento un poco más</h1>\n\t\t\t<p class=\"lead\">Acá podrás saber un poco más en detalle varios aspectos de mí.</p>\n\t\t\t<p>Desde mis datos escenciales, pasando por la experiencia adquirida, hasta los lugares en donde estoy involucrado.</p>\n\t\t</div>\n\t</div>\n</section>\n<section>\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 offset-md-2 text-center\">\n\t\t\t\t<h1>¡Bienvenido a mi página!</h1>\n\t\t\t\t<p>Soy Fernando Osorio. Me desempeño como programador frontend (y con algo de backend) para el desarrollo de sitios web y aplicaciones interactivas. </p>\n\t\t\t\t<p>¡Te invito a que me conozcas mejor!</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<hr>\n\t\t<h2 class=\"text-center\">4 ítems rápidos sobre mí</h2>\n\t\t<div class=\"row shortcuts pb-2\">\n\t\t\t<a href=\"#componentes\" class=\"col-md-3\">\n\t\t\t\t<div class=\"shortcut\">\n\t\t\t\t\t<span class=\"circle bg-info\">\n\t\t\t\t\t\t<p id=\"age\">22</p>\n\t\t\t\t\t\t<p>años</p>\n\t\t\t\t\t</span>\n\t\t\t\t\t<h3>Edad actual</h3>\n\t\t\t\t\t<p>Nací el 05/11/1994. En 182 días cumplo 23.</p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t<a href=\"#componentes\" class=\"col-md-3\">\n\t\t\t\t<div class=\"shortcut\">\n\t\t\t\t\t<span class=\"circle bg-info\">\n\t\t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<h3>Ubicación</h3>\n\t\t\t\t\t<p>Villa del Parque, Ciudad de Buenos Aires, Argentina.</p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t<a href=\"#componentes\" class=\"col-md-3\">\n\t\t\t\t<div class=\"shortcut\">\n\t\t\t\t\t<span class=\"circle bg-info\">\n\t\t\t\t\t\t<i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<h3>Estudios</h3>\n\t\t\t\t\t<p>Carrera terciaria de Tecnología Ferroviaria en la UNSAM.</p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t\t<a href=\"#componentes\" class=\"col-md-3\">\n\t\t\t\t<div class=\"shortcut\">\n\t\t\t\t\t<span class=\"circle bg-info\">\n\t\t\t\t\t\t<i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<h3>Trabajo</h3>\n\t\t\t\t\t<p>Programador front-end en Esto Es Vixnet desde Junio 2016.</p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"row pt-2 pb-4\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<a href=\"#portfolio\" class=\"btn btn-primary btn-block btn-lg\">¡Conoceme mejor!</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<p>\n  fm5-blog works!\n</p>\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron jumbotron-fluid jumbotron-full-height flex-center-vertical p-0\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"col-md-8\">\n\t\t\t<h1>Home</h1>\n\t\t\t<p class=\"lead\">En este apartado irá el contenido destacado.</p>\n\t\t\t<p>Todo el sitio aún está en desarrollo.</p>\n\t\t</div>\n\t</div>\n</section>\n<section>\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-8 offset-md-2 text-center\">\r\n\t\t\t\t<h1>¡Bienvenido a mi página!</h1>\r\n\t\t\t\t<p>Soy Fernando Osorio. Me desempeño como programador frontend (y con algo de backend) para el desarrollo de sitios web y aplicaciones interactivas. </p>\r\n\t\t\t\t<p>¡Te invito a que me conozcas mejor!</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<hr>\r\n\t\t<h2 class=\"text-center\">4 ítems rápidos sobre mí</h2>\r\n\t\t<div class=\"row shortcuts pb-2\">\r\n\t\t\t<a href=\"#componentes\" class=\"col-md-3\">\r\n\t\t\t\t<div class=\"shortcut\">\r\n\t\t\t\t\t<span class=\"circle bg-info\">\r\n\t\t\t\t\t\t<p id=\"age\">22</p>\r\n\t\t\t\t\t\t<p>años</p>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<h3>Edad actual</h3>\r\n\t\t\t\t\t<p>Nací el 05/11/1994. En 182 días cumplo 23.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"#componentes\" class=\"col-md-3\">\r\n\t\t\t\t<div class=\"shortcut\">\r\n\t\t\t\t\t<span class=\"circle bg-info\">\r\n\t\t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<h3>Ubicación</h3>\r\n\t\t\t\t\t<p>Villa del Parque, Ciudad de Buenos Aires, Argentina.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"#componentes\" class=\"col-md-3\">\r\n\t\t\t\t<div class=\"shortcut\">\r\n\t\t\t\t\t<span class=\"circle bg-info\">\r\n\t\t\t\t\t\t<i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<h3>Estudios</h3>\r\n\t\t\t\t\t<p>Carrera terciaria de Tecnología Ferroviaria en la UNSAM.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"#componentes\" class=\"col-md-3\">\r\n\t\t\t\t<div class=\"shortcut\">\r\n\t\t\t\t\t<span class=\"circle bg-info\">\r\n\t\t\t\t\t\t<i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<h3>Trabajo</h3>\r\n\t\t\t\t\t<p>Programador front-end en Esto Es Vixnet desde Junio 2016.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div class=\"row pt-2 pb-4\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<a href=\"#portfolio\" class=\"btn btn-primary btn-block btn-lg\">¡Conoceme mejor!</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron jumbotron-fluid jumbotron-full-height flex-center-vertical p-0\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"col-md-8\">\n\t\t\t<h1>Portfolio</h1>\n\t\t\t<p class=\"lead\">Estos trabajos fueron realizados con distintas metodologías, algunos han sido encargados por particulares y otros los hice por mi cuenta.</p>\n\t\t\t<p>Foundation, Bootstrap, jQueryUI, Angular entre otros frameworks me sirvieron de ayuda para armar los sitios que se encuentran reunidos en esta sección.</p>\n\t\t</div>\n\t</div>\n</section>\n\n<div *ngIf=\"portfolio; then portfolioTrue else portfolioFalse\"></div>\n\n<ng-template #portfolioTrue>\n  Últimos trabajos realizados\n  <div class=\"container-fluid\">\n    <div class=\"card my-3\" *ngFor=\"let item of portfolio\">\n      <div class=\"card-block\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-5 col-md-4 col-lg-3 text-xs-center\">\n\t\t\t\t\t<img class=\"img-responsive img-thumbnail\" src=\"/assets/uploads/portfolio/{{item.image}}\" alt=\"{{item.name}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9\">\n\t\t\t\t\t<h1>{{item.name}} <span *ngIf=\"item.version\" class=\"text-muted\">v{{item.version}}</span></h1>\n\t\t\t\t\t<p class=\"lead\">{{item.description.excerpt}}</p>\n\t\t\t\t\t<p>{{item.description.full}}</p>\n\t\t\t\t</div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #portfolioFalse>\n  No hay trabajos aún.\n</ng-template>\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron jumbotron-fluid jumbotron-full-height flex-center-vertical p-0\">\n\t<div class=\"d-flex align-items-center\">\n    <div *ngIf=\"last.type === 'movie'; then movieTemplate else showTemplate\"></div>\n\t</div>\n</section>\n\n\n\n<ng-template #movieTemplate>\n  <div class=\"col-md-12\">\n    <label class=\"label label-primary\">Película</label>\n    <h1>{{last.movie.title}} ({{last.movie.year}})</h1>\n    <p class=\"lead\">-</p>\n  </div>\n</ng-template>\n\n<ng-template #showTemplate>\n  <div class=\"col-md-12\">\n    <label class=\"label label-primary\">Serie</label>\n    <h1>{{last.show.title}} ({{last.show.year}})</h1>\n    <p class=\"lead\">Episodio #{{last.episode.number}}: \"{{last.episode.title}}\"</p>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-faded justify-content-between fixed-top\">\n    <a class=\"navbar-brand\" routerLink=\"\">\n      <img src=\"assets/img/brand.svg\" alt=\"Fermoto5HD\" height=\"25\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"\">Inicio <span class=\"sr-only\">(ahora)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"about\">Acerca de</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"portfolio\">Portfolio</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"blog\">Blog</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"youtube\">YouTube</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"trakt\">Trakt</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link md-contactme\" href=\"#\">Contacto</a>\n      </li>\n    </ul>\n    </div>\n  </nav>\n</header>\n<main>\n  <router-outlet></router-outlet>\n  <!--button (click)=\"myEvent($event)\">Test</button-->\n</main>\n"

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FM5AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FM5AboutComponent = (function () {
    function FM5AboutComponent() {
    }
    FM5AboutComponent.prototype.ngOnInit = function () {
    };
    return FM5AboutComponent;
}());
FM5AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-fm5-about',
        template: __webpack_require__(166),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [])
], FM5AboutComponent);

//# sourceMappingURL=fm5-about.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FM5HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FM5HomeComponent = (function () {
    function FM5HomeComponent() {
    }
    FM5HomeComponent.prototype.ngOnInit = function () {
    };
    return FM5HomeComponent;
}());
FM5HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-fm5-home',
        template: __webpack_require__(168),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [])
], FM5HomeComponent);

//# sourceMappingURL=fm5-home.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FM5PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FM5PortfolioComponent = (function () {
    function FM5PortfolioComponent(portfolioService) {
        this.portfolioService = portfolioService;
        this.portfolio = [];
    }
    FM5PortfolioComponent.prototype.ngOnInit = function () {
        //console.log(this.portfolioService.getPortfolio());
        //this.portfolio = this.portfolioService.getPortfolio();
        var _this = this;
        this.portfolioService.getPortfolio().subscribe(function (portfolio) {
            _this.portfolio = portfolio;
        });
    };
    return FM5PortfolioComponent;
}());
FM5PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'fm5-portfolio',
        template: __webpack_require__(169),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object])
], FM5PortfolioComponent);

var _a;
//# sourceMappingURL=fm5-portfolio.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FM5TraktService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FM5TraktService = (function () {
    function FM5TraktService(http) {
        this.http = http;
        this.portfolio = [
            '1', '2', '3', '4'
        ];
    }
    FM5TraktService.prototype.getList = function () {
        return this.http.get('/api/trakt')
            .map(function (res) { return res.json(); });
    };
    FM5TraktService.prototype.getLast = function () {
        return this.http.get('/api/trakt/last')
            .map(function (res) { return res.json(); });
    };
    FM5TraktService.prototype.getHistory = function () {
        return this.http.get('/api/trakt/history')
            .map(function (res) { return res.json(); });
    };
    return FM5TraktService;
}());
FM5TraktService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FM5TraktService);

var _a;
//# sourceMappingURL=fm5-trakt.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fm5_trakt_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FM5TraktComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FM5TraktComponent = (function () {
    function FM5TraktComponent(traktService) {
        this.traktService = traktService;
        this.last = [];
        this.list = [];
        this.history = [];
    }
    FM5TraktComponent.prototype.ngOnInit = function () {
        //console.log(this.portfolioService.getPortfolio());
        //this.portfolio = this.portfolioService.getPortfolio();
        var _this = this;
        this.traktService.getLast().subscribe(function (last) {
            _this.last = last;
        });
        this.traktService.getList().subscribe(function (list) {
            _this.list = list;
        });
        this.traktService.getHistory().subscribe(function (history) {
            _this.history = history;
        });
    };
    return FM5TraktComponent;
}());
FM5TraktComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'fm5-trakt',
        template: __webpack_require__(170),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fm5_trakt_service__["a" /* FM5TraktService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fm5_trakt_service__["a" /* FM5TraktService */]) === "function" && _a || Object])
], FM5TraktComponent);

var _a;
//# sourceMappingURL=fm5-trakt.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioService = (function () {
    function PortfolioService(http) {
        this.http = http;
        this.portfolio = [
            '1', '2', '3', '4'
        ];
    }
    /*myData() {
      return true;
    }*/
    PortfolioService.prototype.getPortfolio = function () {
        return this.http.get('/api/portfolio')
            .map(function (res) { return res.json(); });
    };
    return PortfolioService;
}());
PortfolioService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PortfolioService);

var _a;
//# sourceMappingURL=portfolio.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 93;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_site_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_site_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.bundle.js.map