(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_landing_light_mode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing/light-mode.component */ "./src/app/components/landing/light-mode.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");





var routes = [
    {
        path: '',
        component: _components_landing_light_mode_component__WEBPACK_IMPORTED_MODULE_3__["LightModeComponent"]
    },
    {
        path: 'blog',
        component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-prism/core */ "./node_modules/@ngx-prism/core/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_landing_top_bg_top_bg_top_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/landing/top/bg-top/bg-top.component */ "./src/app/components/landing/top/bg-top/bg-top.component.ts");
/* harmony import */ var _components_landing_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/landing/skills/skills.component */ "./src/app/components/landing/skills/skills.component.ts");
/* harmony import */ var _components_landing_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/landing/portfolio/portfolio.component */ "./src/app/components/landing/portfolio/portfolio.component.ts");
/* harmony import */ var _components_landing_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/landing/contact/contact.component */ "./src/app/components/landing/contact/contact.component.ts");
/* harmony import */ var _components_landing_top_light_nav_light_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/landing/top/light-nav/light-nav.component */ "./src/app/components/landing/top/light-nav/light-nav.component.ts");
/* harmony import */ var _components_landing_top_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/landing/top/greeting/greeting.component */ "./src/app/components/landing/top/greeting/greeting.component.ts");
/* harmony import */ var _components_landing_top_logo_logo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/landing/top/logo/logo.component */ "./src/app/components/landing/top/logo/logo.component.ts");
/* harmony import */ var _components_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/landing/footer/footer.component */ "./src/app/components/landing/footer/footer.component.ts");
/* harmony import */ var _components_landing_top_top_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/landing/top/top.component */ "./src/app/components/landing/top/top.component.ts");
/* harmony import */ var _components_landing_light_mode_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/landing/light-mode.component */ "./src/app/components/landing/light-mode.component.ts");
/* harmony import */ var _components_landing_top_tools_tools_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/landing/top/tools/tools.component */ "./src/app/components/landing/top/tools/tools.component.ts");
/* harmony import */ var _components_landing_top_tools_flags_flags_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/landing/top/tools/flags/flags.component */ "./src/app/components/landing/top/tools/flags/flags.component.ts");
/* harmony import */ var _components_landing_top_tools_modes_modes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/landing/top/tools/modes/modes.component */ "./src/app/components/landing/top/tools/modes/modes.component.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/store.service */ "./src/app/services/store.service.ts");










// blog

// light mode













// services

// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                // landing page
                _components_landing_top_bg_top_bg_top_component__WEBPACK_IMPORTED_MODULE_11__["BgTopComponent"],
                _components_landing_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
                _components_landing_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioComponent"],
                _components_landing_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _components_landing_top_light_nav_light_nav_component__WEBPACK_IMPORTED_MODULE_15__["LightNavComponent"],
                _components_landing_top_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_16__["GreetingComponent"],
                _components_landing_top_logo_logo_component__WEBPACK_IMPORTED_MODULE_17__["LogoComponent"],
                _components_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _components_landing_top_top_component__WEBPACK_IMPORTED_MODULE_19__["TopComponent"],
                _components_landing_light_mode_component__WEBPACK_IMPORTED_MODULE_20__["LightModeComponent"],
                _components_landing_top_tools_tools_component__WEBPACK_IMPORTED_MODULE_21__["ToolsComponent"],
                _components_landing_top_tools_flags_flags_component__WEBPACK_IMPORTED_MODULE_22__["FlagsComponent"],
                _components_landing_top_tools_modes_modes_component__WEBPACK_IMPORTED_MODULE_23__["ModesComponent"],
                // blog
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_prism_core__WEBPACK_IMPORTED_MODULE_7__["PrismModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                })
            ],
            providers: [_services_store_service__WEBPACK_IMPORTED_MODULE_24__["StoreService"]],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/app.component.scss":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.setDefaultLang('en');
        translate.use('pl');
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog\">\n  <h2 class=\"blog__heading-primary\">tymdev Blog</h2>\n  <h3 class=\"blog__heading-secondary\">Cancelable interval?</h3>\n  <time class=\"blog__date\" datetime=\"2019-10-21\">2019-10-21</time>\n  <p class=\"blog__paragraph\">When I was developing my online game bot I fall into pretty interesting scenerio in which I had interval which was occasionally executing following iterations faster than its function finished its job. Its function had some asynchronous code which could execute longer than gap between interval iterations. However it wasn't deliberate behaviour therefore I had to fix it. What I end up with at first try was just clearing interval by its id at the top of its function and then call it and reassign its id at the bottom which is common trick.</p>\n  <ngx-prism language=\"JavaScript\">{{ content }}</ngx-prism>\n  <p class=\"blog__paragraph\">I thought I'm done but I quickly realised that I'm not able to stop such mechanism in any way although I'm returning its id. My interval wasn't permanent and after some event I wanted to stop it but I coudn't. That's because I was reassigning id in loop so if I add at the bottom of `foo` function:</p>\n  <ngx-prism language=\"JavaScript\">{{ content2 }}</ngx-prism>\n  <p class=\"blog__paragraph\">It simply not going to work correctly. After few minutes I find out that's it's rather impossible to achieve my goal with this setup and with native javascript interval in general. I started to creating function which would act like `setInterval` but instead returning interval id actually provide `cancel` method with use of clousures.</p><p class=\"blog__paragraph\"> I finished with following code:</p>\n  <ngx-prism language=\"JavaScript\">{{ content3 }}</ngx-prism>\n  <p class=\"blog__paragraph\">And that's it. Now my interval wait for its body function to finish before next iteration and after some event I can call returned `cancel()` which is going to stop it:</p>\n  <ngx-prism language=\"JavaScript\">{{ content4 }}</ngx-prism>\n  <p class=\"blog__paragraph\">Voilà</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog {\n  min-height: 100vh;\n  width: 70%;\n  margin: 0 auto;\n  background-color: #f8f8f8;\n  border-left: 1px solid #e8e8e8;\n  border-right: 1px solid #e8e8e8;\n  padding: 10px; }\n  @media only screen and (max-width: 1000px) {\n    .blog {\n      width: 100%;\n      border: 0; } }\n  .blog__heading-primary {\n    font-family: 'Lato', sans-serif;\n    color: #313131;\n    margin-top: 0;\n    font-size: 2rem;\n    border-bottom: 3px solid #e8e8e8;\n    padding-bottom: 10px;\n    margin-bottom: 10px; }\n  .blog__heading-secondary {\n    font-family: 'Lato', sans-serif;\n    color: #313131;\n    margin: 0;\n    font-size: 1.6rem; }\n  .blog__date {\n    margin-top: 5px;\n    font-family: 'Lato', sans-serif;\n    color: #626262;\n    font-size: 16px; }\n  .blog__paragraph {\n    font-family: 'Lato', sans-serif;\n    color: #313131;\n    font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL0M6XFxVc2Vyc1xcQm9yeXNcXERvY3VtZW50c1xcd29ya1xcdHltZGV2XFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJsb2dcXGJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixhQUFhLEVBQUE7RUFFYjtJQVRGO01BVUksV0FBVztNQUNYLFNBQVMsRUFBQSxFQWdDWjtFQTdCQztJQUNFLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLG1CQUFtQixFQUFBO0VBR3JCO0lBQ0UsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxTQUFTO0lBQ1QsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxlQUFlLEVBQUE7RUFHakI7SUFDRSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2cge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U4ZThlODtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U4ZThlODtcbiAgcGFkZGluZzogMTBweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gICZfX2hlYWRpbmctcHJpbWFyeSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzMxMzEzMTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2U4ZThlODtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgJl9faGVhZGluZy1zZWNvbmRhcnkge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMzMTMxMzE7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG5cbiAgJl9fZGF0ZSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICM2MjYyNjI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgJl9fcGFyYWdyYXBoIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMzEzMTMxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
        this.lang = 'javascript';
        this.content = "const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n" +
            "\n" +
            "setTimeout(() => console.log('1200ms elapsed'), 1200);\n" +
            "\n" +
            "const foo = () => {\n" +
            "    let intervalId;\n" +
            "    const intervalFunction = async() => {\n" +
            "        clearInterval(intervalId); //clear so it will not execute again after 100ms\n" +
            "        console.log('interval executed');\n" +
            "        await sleep(120); //some long action\n" +
            "        return intervalId = setInterval(intervalFunction, 100); //reassign id and start after sleep()\n" +
            "    };\n" +
            "    setInterval(intervalFunction, 100);\n" +
            "};\n" +
            "\n" +
            "foo();";
        this.content2 = "return intervalId = setInterval(intervalFunction, 100);";
        this.content3 = "function cancelableInterval(callback, ms, ...args) {\n" +
            "    let token = { cancelled: false };\n" +
            "    let running = false;\n" +
            "    async function wrapper(...args) {\n" +
            "        if (!running) {\n" +
            "            running = true;\n" +
            "            await callback(token, ...args);\n" +
            "            running = false;\n" +
            "        }\n" +
            "        if (!token.cancelled) {\n" +
            "            id = setTimeout(wrapper, ms, ...args);\n" +
            "        }\n" +
            "    }\n" +
            "    let id = setTimeout(wrapper, ms, ...args);\n" +
            "    return function cancel() {\n" +
            "        clearInterval(id);\n" +
            "        token.cancelled = true;\n" +
            "    }\n" +
            "}" +
            "\n" +
            "module.exports = cancelableInterval;";
        this.content4 = "const cancelableInterval = require('../dist/cancelableInterval');\n" +
            "const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\n" +
            "\n" +
            "const foo = () => {\n" +
            "    const intervalFunction = async() => {\n" +
            "        console.log('interval executed');\n" +
            "        await sleep(120); //some long action\n" +
            "    };\n" +
            "    return cancelableInterval(intervalFunction, 100); //returning cancel()\n" +
            "};\n" +
            "\n" +
            "(() => {\n" +
            "    const cancellableIntervals = [];\n" +
            "    cancellableIntervals.push(foo());\n" +
            "\n" +
            "    setTimeout(() => {\n" +
            "        console.log(\"Cancelling 100ms interval with 120ms of async code runtime after 700ms.\");\n" +
            "        console.log(\"(100ms + 120ms) * 5 = 660ms so interval should run 3 times.\");\n" +
            "        cancellableIntervals.forEach(cancel => { cancel() });\n" +
            "    }, 700)\n" +
            "})();";
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/components/blog/blog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/contact/contact.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing/contact/contact.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"contact\" id=\"contact\">\r\n    <div class=\"contact__col\">\r\n        <header class=\"contact__header\">\r\n            <h2 class=\"heading heading--primary\">{{ 'contact-header' | translate }}</h2>\r\n            <p class=\"contact__header-paragraph\">{{ 'contact-text' | translate }}</p>\r\n            <div class=\"contact__links\">\r\n                <a href=\"mailto:kontakt@tymdev.pl\" target=\"_top\">kontakt@tymdev.pl</a>\r\n                <a href=\"tel:123-456-7890\">+48 795 691 258</a>\r\n            </div>\r\n            <img class=\"contact__image\" src=\"../../../assets/message.png\" alt=\"\">\r\n        </header>\r\n    </div>\r\n    <div class=\"contact__col\">\r\n        <form class=\"contact__form\" (ngSubmit)=\"sendMessage()\" ngNativeValidate>\r\n            <div class=\"contact__input-box\">\r\n                <label for=\"email\" class=\"contact__input-label\">{{ 'email' | translate }}</label>\r\n                <input type=\"email\" id=\"email\" class=\"contact__input-input\" placeholder=\"{{ 'email-placeholder' | translate }}\" [(ngModel)]=\"email\" name=\"email\" required=\"\">\r\n            </div>\r\n            <div class=\"contact__input-box\">\r\n                <label for=\"phone\" class=\"contact__input-label\">{{ 'phone' | translate }}</label>\r\n                <input type=\"tel\" id=\"phone\" class=\"contact__input-input\" placeholder=\"+48 795 691 258\" [(ngModel)]=\"phone\" name=\"phone\">\r\n            </div>\r\n            <div class=\"contact__input-box\">\r\n                <label for=\"message\" class=\"contact__input-label\">{{ 'message' | translate }}</label>\r\n                <textarea id=\"message\" class=\"contact__input-textarea\" placeholder=\"{{ 'message-placeholder' | translate }}\" [(ngModel)]=\"message\" name=\"message\" required></textarea>\r\n            </div>\r\n            <button type=\"submit\" class=\"button button--primary\">\r\n                <span class=\"button-text\">{{ 'send' | translate }}</span>\r\n                <span class=\"button-icon button-icon--right\">&#9660;</span>\r\n            </button>\r\n            <p *ngIf=\"success\" class=\"contact__header-paragraph\">{{ 'send-text' | translate }}</p>\r\n        </form>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/landing/contact/contact.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing/contact/contact.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  width: 70%;\n  margin: 0 auto;\n  display: flex; }\n  @media only screen and (max-width: 768px) {\n    .contact {\n      flex-direction: column;\n      width: 100%; } }\n  .contact__col {\n    width: 50%; }\n  @media only screen and (max-width: 768px) {\n      .contact__col {\n        width: 100%;\n        padding: 10px; } }\n  .contact__image {\n    max-width: 100%; }\n  @media only screen and (max-width: 768px) {\n      .contact__image {\n        max-width: 65%;\n        margin-left: 17.5%; } }\n  .contact__header {\n    max-width: 400px; }\n  .contact__header-paragraph {\n      font-family: 'Lato', sans-serif;\n      width: 100%;\n      font-size: 18px;\n      color: #313131; }\n  .contact__links {\n    font-family: 'Lato', sans-serif;\n    margin-bottom: 40px; }\n  .contact__links a {\n      padding: 3px 0;\n      display: block;\n      text-decoration: none;\n      color: #3a57ea;\n      font-size: 18px; }\n  .contact__links a:hover {\n        text-decoration: underline; }\n  .contact__form {\n    width: 85%;\n    margin: 150px auto 0 auto; }\n  @media only screen and (max-width: 768px) {\n      .contact__form {\n        margin: 0 auto; } }\n  .contact__input-box {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column; }\n  .contact__input-label {\n    font-family: 'Lato', sans-serif;\n    font-size: 16px;\n    padding: 10px;\n    color: #898989; }\n  .contact__input-input, .contact__input-textarea {\n    font-style: italic;\n    padding: 0 10px;\n    font-family: 'Lato', sans-serif; }\n  .contact__input-input {\n    border: 1px solid #e9e9e9;\n    border-radius: 10px;\n    background-color: #f5f5f5;\n    height: 40px; }\n  .contact__input-textarea {\n    border: 1px solid #e9e9e9;\n    border-radius: 10px;\n    background-color: #f5f5f5;\n    height: 120px;\n    padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2NvbnRhY3QvQzpcXFVzZXJzXFxCb3J5c1xcRG9jdW1lbnRzXFx3b3JrXFx0eW1kZXZcXHB1YmxpYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGFuZGluZ1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYSxFQUFBO0VBRWI7SUFMRjtNQU1JLHNCQUFzQjtNQUN0QixXQUFXLEVBQUEsRUF5RmQ7RUF0RkM7SUFDRSxVQUFVLEVBQUE7RUFFVjtNQUhGO1FBSUksV0FBVztRQUNYLGFBQWEsRUFBQSxFQUVoQjtFQUVEO0lBQ0UsZUFBZSxFQUFBO0VBRWY7TUFIRjtRQUlJLGNBQWM7UUFDZCxrQkFBa0IsRUFBQSxFQUVyQjtFQUVEO0lBQ0UsZ0JBQWdCLEVBQUE7RUFFaEI7TUFDRSwrQkFBK0I7TUFDL0IsV0FBVztNQUNYLGVBQWU7TUFDZixjQUFjLEVBQUE7RUFJbEI7SUFDRSwrQkFBK0I7SUFDL0IsbUJBQW1CLEVBQUE7RUFGcEI7TUFLRyxjQUFjO01BQ2QsY0FBYztNQUNkLHFCQUFxQjtNQUNyQixjQUFjO01BQ2QsZUFBZSxFQUFBO0VBVGxCO1FBWUssMEJBQTBCLEVBQUE7RUFLaEM7SUFDRSxVQUFVO0lBQ1YseUJBQXlCLEVBQUE7RUFFekI7TUFKRjtRQUtJLGNBQWMsRUFBQSxFQUVqQjtFQUdDO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQUV4QjtJQUNFLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWMsRUFBQTtFQUVoQjtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsK0JBQStCLEVBQUE7RUFFakM7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZLEVBQUE7RUFFZDtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Qge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fY29sIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1heC13aWR0aDogNjUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTcuNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuXHJcbiAgICAmLXBhcmFncmFwaCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbGlua3Mge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gICAgJiBhIHtcclxuICAgICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjM2E1N2VhO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZm9ybSB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDAgYXV0bztcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faW5wdXQge1xyXG4gICAgJi1ib3gge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgJi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgY29sb3I6ICM4OTg5ODk7XHJcbiAgICB9XHJcbiAgICAmLWlucHV0LCAmLXRleHRhcmVhIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAmLWlucHV0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgJi10ZXh0YXJlYSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing/contact/contact.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing/contact/contact.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendMessage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                params = new FormData();
                params.append('email', this.email);
                params.append('message', this.message);
                params.append('phone', this.phone);
                console.log('send msg', params);
                this.http
                    .post('https://tymdev.pl/api/routes/sendMail.php', params)
                    .subscribe(function () {
                    _this.success = true;
                });
                return [2 /*return*/];
            });
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/landing/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/landing/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/footer/footer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing/footer/footer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"footer__container\">\r\n        <div class=\"footer__col\">\r\n            <div class=\"footer__logo-container\">\r\n                <span class=\"footer__logo-icon\"></span>\r\n                <span class=\"footer__logo\">TymDev</span>\r\n            </div>\r\n            <div>\r\n                <span class=\"footer__text\">2019 TymDev {{ 'company' | translate }} ®</span>\r\n                <span class=\"footer__text\">all rights reserved ©</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"footer__col\">\r\n            <ul class=\"footer__list\">\r\n                <li>\r\n                    <span (click)=\"scrollToElement('skills')\">{{ 'skillsInNav' | translate }}</span>\r\n                </li>\r\n                <li>\r\n                    <span (click)=\"scrollToElement('portfolio')\">Portfolio</span>\r\n                </li>\r\n                <li>\r\n                    <span (click)=\"scrollToElement('contact')\">{{ 'contact' | translate }}</span>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://admin.tymdev.pl\">{{ 'clientsInNav' | translate }}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"footer__col\">\r\n            <ul class=\"footer__list footer__list--multiple\">\r\n                <li>\r\n                    <span class=\"gh-icon\"></span>\r\n                    <a href=\"https://github.com/d0peCode\" target=\"_blank\">GitHub</a>\r\n                </li>\r\n                <li>\r\n                    <span class=\"so-icon\"></span>\r\n                    <a href=\"https://stackoverflow.com/users/8425145/dopecode\" target=\"_blank\">StackOverflow</a>\r\n                </li>\r\n                <li>\r\n                    <span class=\"li-icon\"></span>\r\n                    <a href=\"https://www.linkedin.com/in/borys-tymi%C5%84ski-814916196/\" target=\"_blank\">LinkedIn</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"footer__col\">\r\n            <ul class=\"footer__list footer__list--bottom\">\r\n                <li>\r\n                    <a href=\"mailto:kontakt@tymdev.pl\" target=\"_top\">kontakt@tymdev.pl</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"tel:795691258\">+48 795 691 258</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/landing/footer/footer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing/footer/footer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  margin-top: 20vh;\n  min-height: 200px;\n  width: 100%;\n  background-color: #354ed4;\n  border-top: 22px solid #3a55e9; }\n  .footer__container {\n    display: flex;\n    width: 75%;\n    margin: 0 auto;\n    padding: 30px 0; }\n  @media only screen and (max-width: 768px) {\n      .footer__container {\n        width: 100%;\n        display: flex;\n        flex-direction: column; } }\n  .footer__col {\n    width: 25%; }\n  @media only screen and (max-width: 768px) {\n      .footer__col {\n        width: 100%;\n        display: flex;\n        justify-content: space-around;\n        align-items: center; } }\n  .footer__logo {\n    font-family: 'Oswald', sans-serif;\n    font-weight: 900;\n    color: white;\n    font-size: 22px;\n    padding-left: 10px;\n    margin-bottom: 5px; }\n  .footer__logo-container {\n      display: flex; }\n  .footer__logo-icon {\n      display: block;\n      width: 35px;\n      height: 35px;\n      background-color: white;\n      border-radius: 50%; }\n  .footer__text {\n    font-family: 'Lato', sans-serif;\n    font-size: 14px;\n    color: white;\n    display: block;\n    padding: 5px 3px; }\n  .footer__list {\n    list-style: none;\n    margin: 0; }\n  @media only screen and (max-width: 768px) {\n      .footer__list {\n        display: flex;\n        align-items: center;\n        justify-content: space-around;\n        margin: 10px 0;\n        padding: 0;\n        width: 90%; } }\n  @media only screen and (max-width: 768px) {\n      .footer__list--bottom {\n        width: 70%; } }\n  .footer__list--multiple li {\n      padding-bottom: 10px;\n      display: flex; }\n  .footer__list li a, .footer__list li span {\n      font-family: 'Lato', sans-serif;\n      font-size: 14px;\n      color: white;\n      display: block;\n      padding: 5px 3px;\n      text-decoration: none;\n      cursor: pointer; }\n  .footer__list li a:hover, .footer__list li span:hover {\n        text-decoration: underline; }\n  .gh-icon, .so-icon, .li-icon {\n  padding-right: 35px;\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center; }\n  .gh-icon {\n  background-image: url('gh.png'); }\n  .so-icon {\n  background-image: url('so.png'); }\n  .li-icon {\n  background-image: url('li.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2Zvb3Rlci9DOlxcVXNlcnNcXEJvcnlzXFxEb2N1bWVudHNcXHdvcmtcXHR5bWRldlxccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYW5kaW5nXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw4QkFBOEIsRUFBQTtFQUU5QjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWUsRUFBQTtFQUVmO01BTkY7UUFPSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQixFQUFBLEVBRXpCO0VBRUQ7SUFDRSxVQUFVLEVBQUE7RUFFVjtNQUhGO1FBSUksV0FBVztRQUNYLGFBQWE7UUFDYiw2QkFBNkI7UUFDN0IsbUJBQW1CLEVBQUEsRUFFdEI7RUFFRDtJQUNFLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7RUFFbEI7TUFDRSxhQUFhLEVBQUE7RUFFZjtNQUNFLGNBQWM7TUFDZCxXQUFXO01BQ1gsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixrQkFBa0IsRUFBQTtFQUl0QjtJQUNFLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGdCQUFnQjtJQUNoQixTQUFTLEVBQUE7RUFFVDtNQUpGO1FBS0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0IsY0FBYztRQUNkLFVBQVU7UUFDVixVQUFVLEVBQUEsRUE0QmI7RUF4Qkc7TUFERjtRQUVJLFVBQVUsRUFBQSxFQUViO0VBRUE7TUFFRyxvQkFBb0I7TUFDcEIsYUFBYSxFQUFBO0VBdEJsQjtNQTBCRywrQkFBK0I7TUFDL0IsZUFBZTtNQUNmLFlBQVk7TUFDWixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLHFCQUFxQjtNQUNyQixlQUFlLEVBQUE7RUFoQ2xCO1FBbUNLLDBCQUEwQixFQUFBO0VBS2xDO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsMkJBQTJCLEVBQUE7RUFFN0I7RUFDRSwrQkFBd0QsRUFBQTtFQUUxRDtFQUNFLCtCQUF3RCxFQUFBO0VBRTFEO0VBQ0UsK0JBQXdELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHZoO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTRlZDQ7XG4gIGJvcmRlci10b3A6IDIycHggc29saWQgIzNhNTVlOTtcblxuICAmX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxuXG4gICZfX2NvbCB7XG4gICAgd2lkdGg6IDI1JTtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19sb2dvIHtcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAmLWljb24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgfVxuXG4gICZfX3RleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA1cHggM3B4O1xuICB9XG5cbiAgJl9fbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAmLS1ib3R0b20ge1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtLW11bHRpcGxlIHtcbiAgICAgICYgbGkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICB9XG4gICAgJiBsaSBhLCAmIGxpIHNwYW4ge1xuICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogNXB4IDNweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmdoLWljb24sIC5zby1pY29uLCAubGktaWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5naC1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2doLnBuZ1wiKTtcbn1cbi5zby1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL3NvLnBuZ1wiKTtcbn1cbi5saS1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2xpLnBuZ1wiKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing/footer/footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/landing/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.scrollToElement = function (el) {
        var element = document.querySelector("#" + el);
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/landing/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/landing/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/light-mode.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/landing/light-mode.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"modeFromStore === 'dark' ? 'background-dark' : ''\">\r\n    <app-top></app-top>\r\n    <app-skills></app-skills>\r\n    <app-portfolio></app-portfolio>\r\n    <app-contact></app-contact>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing/light-mode.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/landing/light-mode.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-dark {\n  background-color: #94bac7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL0M6XFxVc2Vyc1xcQm9yeXNcXERvY3VtZW50c1xcd29ya1xcdHltZGV2XFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxhbmRpbmdcXGxpZ2h0LW1vZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9saWdodC1tb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRiYWM3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing/light-mode.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/landing/light-mode.component.ts ***!
  \************************************************************/
/*! exports provided: LightModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightModeComponent", function() { return LightModeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");



var LightModeComponent = /** @class */ (function () {
    function LightModeComponent(storeService) {
        this.storeService = storeService;
    }
    LightModeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeService.bhs.subscribe(function (res) {
            _this.modeFromStore = res;
        });
    };
    LightModeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-light-mode',
            template: __webpack_require__(/*! ./light-mode.component.html */ "./src/app/components/landing/light-mode.component.html"),
            styles: [__webpack_require__(/*! ./light-mode.component.scss */ "./src/app/components/landing/light-mode.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
    ], LightModeComponent);
    return LightModeComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/portfolio/portfolio.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing/portfolio/portfolio.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"portfolio\" role=\"main\" id=\"portfolio\">\r\n    <header class=\"portfolio__header\">\r\n        <div class=\"portfolio__header-container\">\r\n            <h2 class=\"heading heading--primary\">Portfolio</h2>\r\n            <p class=\"portfolio__header-paragraph\">{{ 'skills-intro' | translate }}</p>\r\n        </div>\r\n    </header>\r\n    <section class=\"nav-light\">\r\n        <div class=\"swiper-wrapper\">\r\n            <article class=\"swiper-slide\" *ngFor=\"let item of slides; let i = index\">\r\n                <div class=\"portfolio__image\" [style.background-image]=\"'url(' + item.bg + ')'\"></div>\r\n                <div class=\"portfolio__content\">\r\n                    <h3 [attr.data-index]=\"'0' + i\" class=\"heading heading--secondary\">{{ item.name }}</h3>\r\n                    <time class=\"portfolio__date\"> {{ item.date }} </time>\r\n                    <p class=\"portfolio__content-paragraph\">{{ item.description | translate }}</p>\r\n                    <div>\r\n                        <img *ngFor=\"let n of item.icons\" [src]=\"n\" alt=\"\" class=\"portfolio__content-icon\">\r\n                    </div>\r\n                    <a *ngIf=\"item.live\" [href]=\"item.link.live\" target=\"_blank\" class=\"button button--primary portfolio__button\">\r\n                        <span class=\"button-text\"> {{ 'see' | translate }}</span>\r\n                        <span class=\"button-icon button-icon--right\">&#9660;</span>\r\n                    </a>\r\n                    <a *ngIf=\"item.git\" [href]=\"item.link.git\" target=\"_blank\" class=\"button button--primary portfolio__button\">\r\n                        <span class=\"button-text\">GitHub</span>\r\n                        <span class=\"button-icon button-icon--right\">&#9660;</span>\r\n                    </a>\r\n                    <button type=\"button\" class=\"portfolio__next button-icon--right button-circle\" (click)=\"nextSlide()\">\r\n                        <span class=\"button-circle__arrow\">&rarr;</span>\r\n                    </button>\r\n                </div>\r\n            </article>\r\n        </div>\r\n    </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/components/landing/portfolio/portfolio.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing/portfolio/portfolio.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio {\n  width: 100%;\n  min-height: 100vh;\n  margin: 30vh auto; }\n  @media only screen and (max-width: 768px) {\n    .portfolio {\n      margin-top: 20vh;\n      margin-bottom: 10vh; } }\n  .portfolio__header {\n    text-align: center;\n    margin-bottom: 50px; }\n  .portfolio__header-container {\n      margin: 0 auto;\n      text-align: center;\n      max-width: 500px; }\n  .portfolio__header-paragraph {\n      font-family: 'Lato', sans-serif;\n      width: 100%;\n      font-size: 16px;\n      color: #313131; }\n  @media only screen and (max-width: 768px) {\n        .portfolio__header-paragraph {\n          padding: 10px; } }\n  .nav-light {\n  display: flex;\n  overflow: hidden; }\n  .nav-light .swiper-wrapper {\n    display: flex;\n    list-style: none; }\n  .swiper-slide {\n  display: flex; }\n  @media only screen and (max-width: 768px) {\n    .swiper-slide {\n      flex-direction: column; } }\n  .portfolio__image {\n  margin-left: -6%;\n  width: 75%;\n  height: 95vh;\n  background-size: contain;\n  background-repeat: no-repeat; }\n  @media only screen and (max-width: 768px) {\n    .portfolio__image {\n      width: 100%;\n      margin-left: 0;\n      height: 36vh; } }\n  .portfolio__content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 85%;\n  justify-content: center;\n  margin-left: -7%;\n  width: 30%;\n  padding: 10px; }\n  @media only screen and (max-width: 768px) {\n    .portfolio__content {\n      margin-left: 0;\n      width: 100%;\n      height: auto; } }\n  .portfolio__content-paragraph {\n    font-family: 'Lato', sans-serif;\n    font-size: 18px;\n    color: #313131; }\n  .portfolio__content-icon {\n    margin-right: 10px; }\n  .portfolio__date {\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  color: #898989; }\n  .portfolio__button {\n  margin-top: 10px; }\n  .portfolio__next {\n  top: 50%;\n  right: -70px;\n  transform: translateY(-50%); }\n  @media only screen and (max-width: 768px) {\n    .portfolio__next {\n      display: none; } }\n  .swiper-wrapper {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3BvcnRmb2xpby9DOlxcVXNlcnNcXEJvcnlzXFxEb2N1bWVudHNcXHdvcmtcXHR5bWRldlxccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYW5kaW5nXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7RUFFakI7SUFMRjtNQU1JLGdCQUFnQjtNQUNoQixtQkFBbUIsRUFBQSxFQXdCdEI7RUFyQkM7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7RUFFbkI7TUFDRSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGdCQUFnQixFQUFBO0VBR2xCO01BQ0UsK0JBQStCO01BQy9CLFdBQVc7TUFDWCxlQUFlO01BQ2YsY0FBYyxFQUFBO0VBRWQ7UUFORjtVQU9JLGFBQWEsRUFBQSxFQUVoQjtFQUlMO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQixFQUFBO0VBRmxCO0lBS0ksYUFBYTtJQUNiLGdCQUFnQixFQUFBO0VBSXBCO0VBQ0UsYUFBYSxFQUFBO0VBRWI7SUFIRjtNQUlJLHNCQUFzQixFQUFBLEVBRXpCO0VBR0c7RUFDQSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCLEVBQUE7RUFFMUI7SUFQRjtNQVFJLFdBQVc7TUFDWCxjQUFjO01BQ2QsWUFBWSxFQUFBLEVBRWpCO0VBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYSxFQUFBO0VBRWI7SUFWRjtNQVdJLGNBQWM7TUFDZCxXQUFXO01BQ1gsWUFBWSxFQUFBLEVBVWY7RUFSQztJQUNFLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBRWhCO0lBQ0Usa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGNBQWMsRUFBQTtFQUVsQjtFQUNJLGdCQUFnQixFQUFBO0VBRXBCO0VBQ0UsUUFBUTtFQUNSLFlBQVk7RUFDWiwyQkFBMkIsRUFBQTtFQUUzQjtJQUxGO01BTUksYUFBYSxFQUFBLEVBRWhCO0VBR0g7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0Zm9saW8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMzB2aCBhdXRvO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gIH1cblxuICAmX19oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgJi1jb250YWluZXIge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgICYtcGFyYWdyYXBoIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjMzEzMTMxO1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uYXYtbGlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5zd2lwZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi5wb3J0Zm9saW8ge1xuICAgICZfX2ltYWdlIHtcbiAgICBtYXJnaW4tbGVmdDogLTYlO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgaGVpZ2h0OiA5NXZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAzNnZoO1xuICAgICAgfVxuICB9XG4gICZfX2NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiA4NSU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC03JTtcbiAgICB3aWR0aDogMzAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAmLXBhcmFncmFwaCB7XG4gICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6ICMzMTMxMzE7XG4gICAgfVxuICAgICYtaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG4gICZfX2RhdGUge1xuICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjODk4OTg5O1xuICB9XG4gICZfX2J1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gICZfX25leHQge1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAtNzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uc3dpcGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing/portfolio/portfolio.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing/portfolio/portfolio.component.ts ***!
  \*********************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.slides = [
            {
                name: 'TwoHouse',
                date: '15.10.2018',
                icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/php.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/mysql.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/pdo.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png'],
                description: 'two-house-text',
                bg: '../../../../assets/projects/th.png',
                live: true,
                git: false,
                link: {
                    live: 'https://twohouse.pl'
                }
            },
            {
                name: 'ActiveYachtClub',
                date: '10.01.2019',
                icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/php.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/mysql.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/pdo.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png'],
                description: 'ayc-text',
                bg: '../../../../assets/projects/ayc.png',
                live: true,
                git: false,
                link: {
                    live: 'http://www.activeyachtclub.com'
                }
            },
            {
                name: 'QuickMargo',
                date: '01.09.2019',
                icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/node.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/express.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/puppeteer.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/socket.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/atom.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/ionic.jpg', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679585/angular.png'],
                description: 'quickmargo-text',
                bg: '../../../../assets/projects/quickmargo2.png',
                live: true,
                git: false,
                link: {
                    live: 'https://quickmargo.pl'
                }
            },
            {
                name: 'AdminPanel',
                date: '30.10.2018',
                icons: ['https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/php.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/mysql.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1565875158/pdo.png', 'https://res.cloudinary.com/drngyvbmc/image/upload/v1564679586/vue.png'],
                description: 'adminpanel-text',
                live: true,
                bg: '../../../../assets/projects/adminpanel.png',
                git: false,
                link: {
                    live: 'http://admin.tymdev.pl/'
                },
            },
            {
                name: 'ScreenRecorder',
                date: '05.09.2019',
                description: 'screenrecorder-text',
                image: '../../../../assets/projects/screenrecorder.png',
                git: true,
                live: false,
                bg: '../../../../assets/projects/screenrecorder.png',
                link: {
                    git: 'https://github.com/d0peCode/screenRecorder'
                }
            },
            {
                name: 'ColorReader',
                date: '10.02.2018',
                git: true,
                live: true,
                link: {
                    live: 'http://colorchanger.tymdev.pl',
                    git: 'https://github.com/d0peCode/colorReader'
                },
                description: 'colorreader-text',
                bg: '../../../../assets/projects/colorchanger.png',
            }
        ];
    }
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.nav-light', {
            paginationClickable: false,
            grabCursor: true,
            loop: false,
            slidesPerView: 1
        });
    };
    PortfolioComponent.prototype.nextSlide = function () {
        this.mySwiper.slideNext();
    };
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/components/landing/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/components/landing/portfolio/portfolio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/skills/skills.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing/skills/skills.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"skills\" id=\"skills\">\n    <header class=\"skills__top\">\n        <h2 class=\"heading heading--primary\">{{ 'skills' | translate }}</h2>\n        <p class=\"skills__top-paragraph\">{{ 'skills-text' | translate }}</p>\n    </header>\n    <div class=\"skills__body\">\n        <div class=\"swiper-wrapper\">\n            <section *ngFor=\"let item of slides; let i = index\" class=\"swiper-slide\"\n                     [ngClass]=\"[\n                       i === 0 || i === 3 ? 'skills__body-box--left' : '',\n                       i === 1 || i === 4 ? 'skills__body-box--middle' : '',\n                       i === 2 || i === 5 ? 'skills__body-box--right' : ''\n            ]\">\n                <div class=\"skills__body-box\">\n                    <div class=\"skills__body-box-icon\">\n                        <img [src]=\"item.image.src\" [alt]=\"item.image.alt\">\n                    </div>\n                    <div class=\"skills__body-box-header\">\n                        <h3 *ngIf=\"item.header === 'responsiveness'\">{{ item.header | translate }}</h3>\n                        <h3 *ngIf=\"item.header !== 'responsiveness'\">{{ item.header }}</h3>\n                    </div>\n                    <div class=\"skills__body-box-text\">\n                        <p>{{ item.text | translate }}</p>\n                    </div>\n                </div>\n            </section>\n        </div>\n    </div>\n    <button type=\"button\" class=\"skills__button skills__button--left button-icon--right button-circle\" (click)=\"previousSlide()\">\n        <span class=\"button-circle__arrow\">&larr;</span>\n    </button>\n    <button type=\"button\" class=\"skills__button skills__button--right button-icon--right button-circle\" (click)=\"nextSlide()\">\n        <span class=\"button-circle__arrow\">&rarr;</span>\n    </button>\n</section>\n"

/***/ }),

/***/ "./src/app/components/landing/skills/skills.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing/skills/skills.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skills {\n  margin-top: 50vh;\n  background-image: url('bg-skills.png');\n  background-size: cover;\n  width: 100%;\n  height: 120vh;\n  position: relative; }\n  @media only screen and (max-width: 768px) {\n    .skills {\n      margin-top: 25vh; } }\n  .skills__top {\n    text-align: center;\n    width: 350px;\n    position: absolute;\n    top: 5%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n  .skills__top-paragraph {\n      font-family: 'Lato', sans-serif;\n      font-size: 16px;\n      color: #313131;\n      margin: 5px 0;\n      padding: 0 10px; }\n  @media only screen and (max-width: 768px) {\n        .skills__top-paragraph {\n          color: white; } }\n  @media only screen and (min-width: 1500px) {\n    .skills {\n      height: 105vh; } }\n  .skills__body {\n    display: flex;\n    margin: 0 auto 0 auto;\n    width: 80%;\n    overflow-x: hidden; }\n  @media only screen and (max-width: 768px) {\n      .skills__body {\n        width: 98%; } }\n  .skills__body-box {\n      width: 300px;\n      height: 300px;\n      margin: auto;\n      background-color: rgba(135, 150, 255, 0.6);\n      border-radius: 40px;\n      position: relative; }\n  @media only screen and (max-width: 768px) {\n        .skills__body-box {\n          width: 270px; } }\n  @media only screen and (min-width: 1500px) {\n        .skills__body-box {\n          width: 380px;\n          height: 380px; } }\n  .skills__body-box--left {\n        margin-top: 20vh; }\n  .skills__body-box--right {\n        margin-top: 28vh; }\n  .skills__body-box--middle {\n        margin-top: 31vh; }\n  @media only screen and (max-width: 768px) {\n        .skills__body-box--left {\n          margin-top: 25vh; }\n        .skills__body-box--right {\n          margin-top: 25vh; }\n        .skills__body-box--middle {\n          margin-top: 25vh; } }\n  .skills__body-box-icon {\n        position: absolute;\n        top: 0;\n        left: 50%;\n        transform: translate(-50%, -50%); }\n  .skills__body-box-icon--middle {\n          left: 57%; }\n  .skills__body-box-icon--right {\n          transform: translate(-50%, -60%); }\n  .skills__body-box-header {\n        font-family: 'Oswald', sans-serif;\n        color: #fed312;\n        font-size: 24px;\n        text-align: center;\n        width: 100%;\n        padding-top: 65px;\n        margin-top: 80px; }\n  @media only screen and (min-width: 1500px) {\n          .skills__body-box-header {\n            font-size: 36px; } }\n  .skills__body-box-text {\n        padding: 0 20px;\n        font-family: 'Lato', sans-serif;\n        width: 100%;\n        font-size: 16px;\n        color: white;\n        text-align: center; }\n  @media only screen and (min-width: 1500px) {\n          .skills__body-box-text {\n            font-size: 20px; } }\n  .skills__button {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%); }\n  .skills__button--left {\n      left: 5px; }\n  .skills__button--right {\n      right: 5px; }\n  .swiper-wrapper {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3NraWxscy9DOlxcVXNlcnNcXEJvcnlzXFxEb2N1bWVudHNcXHdvcmtcXHR5bWRldlxccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYW5kaW5nXFxza2lsbHNcXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixzQ0FBeUQ7RUFDekQsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7RUFFbEI7SUFSRjtNQVNJLGdCQUFnQixFQUFBLEVBbUluQjtFQWhJQztJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsZ0NBQWdDLEVBQUE7RUFFaEM7TUFDRSwrQkFBK0I7TUFDL0IsZUFBZTtNQUNmLGNBQWM7TUFDZCxhQUFhO01BQ2IsZUFBZSxFQUFBO0VBRWY7UUFQRjtVQVFJLFlBQVksRUFBQSxFQUVmO0VBR0g7SUFqQ0Y7TUFrQ0ksYUFBYSxFQUFBLEVBMEdoQjtFQXZHQztJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGtCQUFrQixFQUFBO0VBRWxCO01BTkY7UUFPSSxVQUFVLEVBQUEsRUFrRmI7RUEvRUM7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLFlBQVk7TUFDWiwwQ0FBeUM7TUFDekMsbUJBQW1CO01BQ25CLGtCQUFrQixFQUFBO0VBRWxCO1FBUkY7VUFTSSxZQUFZLEVBQUEsRUFxRWY7RUFuRUM7UUFYRjtVQVlJLFlBQVk7VUFDWixhQUFhLEVBQUEsRUFpRWhCO0VBOURDO1FBQ0ksZ0JBQWdCLEVBQUE7RUFFcEI7UUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtRQUNJLGdCQUFnQixFQUFBO0VBR3BCO1FBQ0U7VUFDRSxnQkFBZ0IsRUFBQTtRQUVsQjtVQUNFLGdCQUFnQixFQUFBO1FBRWxCO1VBQ0UsZ0JBQWdCLEVBQUEsRUFDakI7RUFHSDtRQUNFLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sU0FBUztRQUNULGdDQUFnQyxFQUFBO0VBRWhDO1VBQ0UsU0FBUyxFQUFBO0VBRVg7VUFDRSxnQ0FBZ0MsRUFBQTtFQUlwQztRQUNFLGlDQUFpQztRQUNqQyxjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQixFQUFBO0VBRWhCO1VBVEY7WUFVSSxlQUFlLEVBQUEsRUFFbEI7RUFFRDtRQUNFLGVBQWU7UUFDZiwrQkFBK0I7UUFDL0IsV0FBVztRQUNYLGVBQWU7UUFDZixZQUFZO1FBQ1osa0JBQWtCLEVBQUE7RUFFaEI7VUFSSjtZQVNNLGVBQWUsRUFBQSxFQUVwQjtFQUlIO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiwyQkFBMkIsRUFBQTtFQUUzQjtNQUNJLFNBQVMsRUFBQTtFQUViO01BQ0ksVUFBVSxFQUFBO0VBS3RCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzIHtcbiAgbWFyZ2luLXRvcDogNTB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2JnLXNraWxscy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbi10b3A6IDI1dmg7XG4gIH1cblxuICAmX190b3Age1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgJi1wYXJhZ3JhcGgge1xuICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjMzEzMTMxO1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgICBoZWlnaHQ6IDEwNXZoO1xuICB9XG5cbiAgJl9fYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogOTglO1xuICAgIH1cblxuICAgICYtYm94IHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMTUwLCAyNTUsIC42KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgfVxuXG4gICAgICAmLS1sZWZ0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHZoO1xuICAgICAgfVxuICAgICAgJi0tcmlnaHQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI4dmg7XG4gICAgICB9XG4gICAgICAmLS1taWRkbGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMxdmg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgJi0tbGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICAgICAgfVxuICAgICAgICAmLS1yaWdodCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICAgICAgfVxuICAgICAgICAmLS1taWRkbGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1dmg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAgICAgJi0tbWlkZGxlIHtcbiAgICAgICAgICBsZWZ0OiA1NyU7XG4gICAgICAgIH1cbiAgICAgICAgJi0tcmlnaHQge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC02MCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtaGVhZGVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogI2ZlZDMxMjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogNjVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgICAmX19idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cbiAgICAgICAgJi0tbGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJi0tcmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN3aXBlci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/landing/skills/skills.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/landing/skills/skills.component.ts ***!
  \***************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store.service */ "./src/app/services/store.service.ts");




var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(storeService) {
        this.storeService = storeService;
        this.slides = [
            {
                image: {
                    src: '../../assets/icons/laptop.png',
                    alt: 'responsiveness'
                },
                header: 'responsiveness',
                text: 'responsiveness-text'
            },
            {
                image: {
                    src: '../../assets/icons/fe-be.png',
                    alt: 'Frontend/Backend'
                },
                header: 'Frontend/Backend',
                text: 'fe-be-text'
            },
            {
                image: {
                    src: '../../assets/icons/seo.png',
                    alt: 'Search engine optimization'
                },
                header: 'SEO',
                text: 'seo-text'
            },
            {
                image: {
                    src: '../../assets/icons/fe-be.png',
                    alt: 'Javascript'
                },
                header: 'Javascript',
                text: 'ES6+, Vue2JS, AngularJS, Angular 2+, Electron, Ionic, NodeJS, ExpressJS, Jest, Puppeteer, Selenium, Quasar...'
            },
            {
                image: {
                    src: '../../assets/icons/laptop.png',
                    alt: 'CSS'
                },
                header: 'CSS',
                text: 'CSS3, SCSS, BEM, Grid, Flexbox, Bootstrap 3 & 4 :('
            }
        ];
        this.slidesPerView = 3;
    }
    SkillsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initSwiper();
        this.mySwiper.destroy();
        setTimeout(function () { _this.initSwiper(); }, 20);
    };
    SkillsComponent.prototype.previousSlide = function () {
        this.mySwiper.slidePrev();
    };
    SkillsComponent.prototype.nextSlide = function () {
        this.mySwiper.slideNext();
    };
    SkillsComponent.prototype.handleSlidesAmount = function () {
        if (window.innerWidth < 1000) {
            this.slidesPerView = 2;
        }
        if (window.innerWidth < 600) {
            this.slidesPerView = 1;
        }
        if (this.mySwiper)
            this.mySwiper.update();
    };
    SkillsComponent.prototype.initSwiper = function () {
        this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.skills__body', {
            autoplay: 3000,
            paginationClickable: false,
            grabCursor: true,
            loop: true,
            slidesPerView: this.slidesPerView
        });
    };
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.handleSlidesAmount();
        window.addEventListener('resize', this.handleSlidesAmount);
        this.storeService.bhsLang.subscribe(function (res) {
            if (res) {
                console.log('destroy swiper');
                _this.mySwiper.destroy();
                setTimeout(function () { _this.initSwiper(); }, 20);
                _this.storeService.setLangChanged(false);
            }
        });
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/components/landing/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/components/landing/skills/skills.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/top/bg-top/bg-top.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing/top/bg-top/bg-top.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-top-right\"></div>"

/***/ }),

/***/ "./src/app/components/landing/top/bg-top/bg-top.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing/top/bg-top/bg-top.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-top-right {\n  background: url('bg-top-right.png') no-repeat top left;\n  background-size: cover;\n  height: 140vh;\n  width: 54%;\n  position: absolute;\n  top: 0;\n  right: 0; }\n  @media only screen and (max-width: 768px) {\n    .bg-top-right {\n      height: 85vh;\n      width: 98%; } }\n  @media only screen and (min-width: 1500px) {\n    .bg-top-right {\n      width: 50%;\n      height: 120vh; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC9iZy10b3AvQzpcXFVzZXJzXFxCb3J5c1xcRG9jdW1lbnRzXFx3b3JrXFx0eW1kZXZcXHB1YmxpYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGFuZGluZ1xcdG9wXFxiZy10b3BcXGJnLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNEQUE0RTtFQUM1RSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVEsRUFBQTtFQUVSO0lBVEo7TUFVUSxZQUFZO01BQ1osVUFBVSxFQUFBLEVBTWpCO0VBSkc7SUFiSjtNQWNRLFVBQVU7TUFDVixhQUFhLEVBQUEsRUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvdG9wL2JnLXRvcC9iZy10b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctdG9wLXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2JnLXRvcC1yaWdodC5wbmcnKSBuby1yZXBlYXQgdG9wIGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxNDB2aDtcclxuICAgIHdpZHRoOiA1NCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjB2aDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/landing/top/bg-top/bg-top.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing/top/bg-top/bg-top.component.ts ***!
  \*******************************************************************/
/*! exports provided: BgTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgTopComponent", function() { return BgTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BgTopComponent = /** @class */ (function () {
    function BgTopComponent() {
    }
    BgTopComponent.prototype.ngOnInit = function () {
    };
    BgTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bg-top',
            template: __webpack_require__(/*! ./bg-top.component.html */ "./src/app/components/landing/top/bg-top/bg-top.component.html"),
            styles: [__webpack_require__(/*! ./bg-top.component.scss */ "./src/app/components/landing/top/bg-top/bg-top.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BgTopComponent);
    return BgTopComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/top/greeting/greeting.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/top/greeting/greeting.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"greeting\">\r\n    <h2 class=\"greeting__header\">\r\n        {{ 'greeting' | translate }}\r\n    </h2>\r\n    <div class=\"greeting__button\">\r\n        <button type=\"button\" class=\"button button--primary\" (click)=\"goPortfolio()\">\r\n            <span class=\"button-text\">{{ 'projects' | translate }}</span>\r\n            <span class=\"button-icon\">&#9660;</span>\r\n        </button>\r\n    </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/landing/top/greeting/greeting.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/top/greeting/greeting.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".greeting {\n  position: absolute;\n  top: 50%;\n  left: 25%;\n  transform: translate(-50%, -50%);\n  width: 400px; }\n  @media only screen and (max-width: 768px) {\n    .greeting {\n      top: 60vh;\n      left: 0;\n      width: 100%;\n      padding: 10px;\n      transform: unset; } }\n  @media only screen and (min-width: 1500px) {\n    .greeting {\n      width: 600px; } }\n  .greeting__header {\n    font-family: 'Lato', sans-serif;\n    color: #313131;\n    margin: 0;\n    font-size: 2rem; }\n  @media only screen and (min-width: 1500px) {\n      .greeting__header {\n        font-size: 3rem;\n        font-weight: 100; } }\n  .greeting__button {\n    margin-top: 20px; }\n  @media only screen and (min-width: 1500px) {\n      .greeting__button button {\n        width: 200px;\n        height: 60px;\n        font-size: 1.3rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC9ncmVldGluZy9DOlxcVXNlcnNcXEJvcnlzXFxEb2N1bWVudHNcXHdvcmtcXHR5bWRldlxccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYW5kaW5nXFx0b3BcXGdyZWV0aW5nXFxncmVldGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxZQUFZLEVBQUE7RUFFWjtJQVBGO01BUUksU0FBUztNQUNULE9BQU87TUFDUCxXQUFXO01BQ1gsYUFBYTtNQUNiLGdCQUFnQixFQUFBLEVBK0JuQjtFQTVCQztJQWZGO01BZ0JJLFlBQ0YsRUFBQSxFQTBCRDtFQXhCQztJQUNFLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsU0FBUztJQUNULGVBQWUsRUFBQTtFQUVmO01BTkY7UUFPSSxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUEsRUFFbkI7RUFFRDtJQUNFLGdCQUFnQixFQUFBO0VBRWhCO01BSEQ7UUFLSyxZQUFZO1FBQ1osWUFBWTtRQUNaLGlCQUFpQixFQUFBLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC9ncmVldGluZy9ncmVldGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVldGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogNDAwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHRvcDogNjB2aDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIHdpZHRoOiA2MDBweFxyXG4gIH1cclxuXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/landing/top/greeting/greeting.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing/top/greeting/greeting.component.ts ***!
  \***********************************************************************/
/*! exports provided: GreetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetingComponent", function() { return GreetingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GreetingComponent = /** @class */ (function () {
    function GreetingComponent() {
    }
    GreetingComponent.prototype.ngOnInit = function () {
    };
    GreetingComponent.prototype.goPortfolio = function () {
        var element = document.querySelector("#portfolio");
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    GreetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-greeting',
            template: __webpack_require__(/*! ./greeting.component.html */ "./src/app/components/landing/top/greeting/greeting.component.html"),
            styles: [__webpack_require__(/*! ./greeting.component.scss */ "./src/app/components/landing/top/greeting/greeting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GreetingComponent);
    return GreetingComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/top/light-nav/light-nav.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/landing/top/light-nav/light-nav.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\r\n    <ul class=\"nav__list\">\r\n        <li>\r\n            <span (click)=\"scrollToElement('skills')\">{{ 'skillsInNav' | translate }}</span>\r\n        </li>\r\n        <li>\r\n            <span (click)=\"scrollToElement('portfolio')\">portfolio</span>\r\n        </li>\r\n        <li>\r\n            <span (click)=\"scrollToElement('contact')\">{{ 'valuationInNav' | translate }}</span>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/blog\">blog</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://admin.tymdev.pl/\" target=\"_blank\">{{ 'clientsInNav' | translate }}</a>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/landing/top/light-nav/light-nav.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/landing/top/light-nav/light-nav.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  position: absolute;\n  top: 25px;\n  right: 30px;\n  z-index: 2; }\n  @media only screen and (max-width: 768px) {\n    .nav {\n      display: flex;\n      justify-content: flex-end; } }\n  .nav__list {\n    list-style: none;\n    display: flex; }\n  @media only screen and (max-width: 768px) {\n      .nav__list {\n        max-width: 70%;\n        flex-wrap: wrap;\n        justify-content: flex-end; } }\n  .nav__list > li {\n      margin: 0 5px;\n      padding: 5px 10px;\n      border-radius: 20px;\n      background-color: #7f92f1;\n      -webkit-filter: drop-shadow(1px 4px 3px rgba(0, 0, 0, 0.2));\n              filter: drop-shadow(1px 4px 3px rgba(0, 0, 0, 0.2));\n      transition: .5s filter, .2s transform; }\n  @media only screen and (max-width: 768px) {\n        .nav__list > li {\n          margin: 2px; } }\n  .nav__list > li:hover {\n        -webkit-filter: drop-shadow(1px 4px 3px rgba(0, 0, 0, 0.5)) blur(0px);\n                filter: drop-shadow(1px 4px 3px rgba(0, 0, 0, 0.5)) blur(0px);\n        transform: scale(1.048); }\n  .nav__list > li a, .nav__list > li span {\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        height: 100%;\n        text-decoration: none;\n        text-transform: uppercase;\n        color: white;\n        font-family: 'Lato', sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        letter-spacing: 1px;\n        cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC9saWdodC1uYXYvQzpcXFVzZXJzXFxCb3J5c1xcRG9jdW1lbnRzXFx3b3JrXFx0eW1kZXZcXHB1YmxpYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGFuZGluZ1xcdG9wXFxsaWdodC1uYXZcXGxpZ2h0LW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVUsRUFBQTtFQUVWO0lBTko7TUFPUSxhQUFhO01BQ2IseUJBQXlCLEVBQUEsRUE0Q2hDO0VBekNHO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtFQUViO01BSko7UUFLUSxjQUFjO1FBQ2QsZUFBZTtRQUNmLHlCQUF5QixFQUFBLEVBaUNoQztFQXhDQTtNQWVPLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QiwyREFBK0M7Y0FBL0MsbURBQStDO01BQy9DLHFDQUFxQyxFQUFBO0VBVHJDO1FBWFA7VUFZVyxXQUFXLEVBQUEsRUEyQmxCO0VBdkNKO1FBdUJXLHFFQUEwRDtnQkFBMUQsNkRBQTBEO1FBQzFELHVCQUF1QixFQUFBO0VBeEJsQztRQTRCVyxtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osK0JBQStCO1FBQy9CLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy90b3AvbGlnaHQtbmF2L2xpZ2h0LW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgei1pbmRleDogMjtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAmX19saXN0IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmID4gbGkge1xuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdmOTJmMTtcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDRweCAzcHggcmdiYSgwLDAsMCwuMikpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGZpbHRlciwgLjJzIHRyYW5zZm9ybTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggNHB4IDNweCByZ2JhKDAsMCwwLCAuNSkpIGJsdXIoMHB4KTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQ4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiBhLCBzcGFuIHtcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/landing/top/light-nav/light-nav.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/top/light-nav/light-nav.component.ts ***!
  \*************************************************************************/
/*! exports provided: LightNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightNavComponent", function() { return LightNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LightNavComponent = /** @class */ (function () {
    function LightNavComponent() {
    }
    LightNavComponent.prototype.scrollToElement = function (el) {
        var element = document.querySelector("#" + el);
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    LightNavComponent.prototype.ngOnInit = function () {
    };
    LightNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-light-nav',
            template: __webpack_require__(/*! ./light-nav.component.html */ "./src/app/components/landing/top/light-nav/light-nav.component.html"),
            styles: [__webpack_require__(/*! ./light-nav.component.scss */ "./src/app/components/landing/top/light-nav/light-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LightNavComponent);
    return LightNavComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/top/logo/logo.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing/top/logo/logo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"logo\">\n    <span class=\"logo__icon\"></span>\n    <h1 class=\"logo__header\">TymDev</h1>\n    <ul class=\"logo__social-list\">\n        <li>\n            <a href=\"https://github.com/d0peCode\" target=\"_blank\">\n                <img src=\"../../../../../assets/icons/gh.png\" alt=\"GitHub\" class=\"logo__social-list-icon\">\n            </a>\n        </li>\n        <li>\n            <a href=\"https://stackoverflow.com/users/8425145/dopecode\" target=\"_blank\">\n                <img src=\"../../../../../assets/icons/so.png\" alt=\"StackOverflow\" class=\"logo__social-list-icon logo__social-list-icon--so\">\n            </a>\n        </li>\n        <li>\n            <a href=\"https://www.linkedin.com/in/borys-tymi%C5%84ski-814916196/\" target=\"_blank\">\n                <img src=\"../../../../../assets/icons/li.png\" alt=\"LinkedIn\" class=\"logo__social-list-icon\">\n            </a>\n        </li>\n    </ul>\n</section>\n"

/***/ }),

/***/ "./src/app/components/landing/top/logo/logo.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing/top/logo/logo.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  display: flex;\n  position: absolute;\n  top: 20px;\n  width: 70%;\n  left: 15%; }\n  @media screen and (max-width: 1000px) {\n    .logo {\n      left: 5%; } }\n  @media screen and (max-width: 600px) {\n    .logo {\n      left: 10px;\n      top: 10px;\n      z-index: 2; } }\n  .logo__icon {\n    display: block;\n    width: 35px;\n    height: 35px;\n    background-color: #3a55e9;\n    border-radius: 50%; }\n  .logo__header {\n    font-family: 'Oswald', sans-serif;\n    font-weight: 900;\n    color: #313131; }\n  @media screen and (max-width: 600px) {\n      .logo__header {\n        color: white;\n        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; } }\n  .logo__social-list {\n    list-style: none;\n    display: flex;\n    padding: 0;\n    margin-left: 10px; }\n  @media screen and (max-width: 600px) {\n      .logo__social-list {\n        margin-left: 4px; } }\n  .logo__social-list li {\n      display: flex;\n      align-items: center;\n      height: 45px; }\n  .logo__social-list-icon {\n      -webkit-filter: invert(100%);\n              filter: invert(100%);\n      width: 23px;\n      height: 23px;\n      margin: 0 2px; }\n  @media screen and (max-width: 600px) {\n        .logo__social-list-icon {\n          -webkit-filter: invert(0);\n                  filter: invert(0); } }\n  .logo__social-list-icon--so {\n        width: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC9sb2dvL0M6XFxVc2Vyc1xcQm9yeXNcXERvY3VtZW50c1xcd29ya1xcdHltZGV2XFxwdWJsaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxhbmRpbmdcXHRvcFxcbG9nb1xcbG9nby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTLEVBQUE7RUFFVDtJQVBGO01BUUksUUFBUSxFQUFBLEVBeURYO0VBdkRDO0lBVkY7TUFXSSxVQUFVO01BQ1YsU0FBUztNQUNULFVBQVUsRUFBQSxFQW9EYjtFQWpEQztJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBO0VBRWQ7TUFMRjtRQU1JLFlBQVk7UUFDWixpRUFBaUUsRUFBQSxFQUVwRTtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7RUFFakI7TUFORjtRQU9JLGdCQUFnQixFQUFBLEVBdUJuQjtFQTlCQTtNQVdHLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsWUFBWSxFQUFBO0VBR2Q7TUFDRSw0QkFBb0I7Y0FBcEIsb0JBQW9CO01BQ3BCLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYSxFQUFBO0VBRWI7UUFORjtVQU9JLHlCQUFpQjtrQkFBakIsaUJBQWlCLEVBQUEsRUFNcEI7RUFIQztRQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy90b3AvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogMTUlO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIGxlZnQ6IDUlO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbGVmdDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gICZfX2ljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1NWU5O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICMzMTMxMzE7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XG4gICAgfVxuICB9XG4gICZfX3NvY2lhbC1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cblxuICAgICYgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgfVxuXG4gICAgJi1pY29uIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICBtYXJnaW46IDAgMnB4O1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBmaWx0ZXI6IGludmVydCgwKTtcbiAgICAgIH1cblxuICAgICAgJi0tc28ge1xuICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/landing/top/logo/logo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/landing/top/logo/logo.component.ts ***!
  \***************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/components/landing/top/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/landing/top/logo/logo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/top/tools/flags/flags.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/top/tools/flags/flags.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flags\">\r\n    <img src=\"../../../../../../assets/icons/pl-flag.jpg\"\r\n         alt=\"Ustaw język polski\"\r\n         class=\"flags__flag\"\r\n         (click)=\"setLang('pl')\"\r\n         [ngClass]=\"currentLang === 'pl' ? 'flags__selected' : ''\">\r\n    <img src=\"../../../../../../assets/icons/en-flag.jpg\"\r\n         alt=\"Set language to english\"\r\n         class=\"flags__flag\"\r\n         (click)=\"setLang('en')\"\r\n         [ngClass]=\"currentLang === 'en' ? 'flags__selected' : ''\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing/top/tools/flags/flags.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/top/tools/flags/flags.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes bounce {\n  0% {\n    transform: scale(1); }\n  50% {\n    transform: scale(1.3); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes bounce {\n  0% {\n    transform: scale(1); }\n  50% {\n    transform: scale(1.3); }\n  100% {\n    transform: scale(1); } }\n\n.flags {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  cursor: pointer; }\n\n.flags__flag {\n    opacity: .6;\n    margin: 0 2px; }\n\n.flags__selected {\n    opacity: 1;\n    -webkit-animation: bounce .3s forwards;\n            animation: bounce .3s forwards; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC90b29scy9mbGFncy9DOlxcVXNlcnNcXEJvcnlzXFxEb2N1bWVudHNcXHdvcmtcXHR5bWRldlxccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYW5kaW5nXFx0b3BcXHRvb2xzXFxmbGFnc1xcZmxhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUFLLG1CQUFtQixFQUFBO0VBQ3hCO0lBQU0scUJBQXFCLEVBQUE7RUFDM0I7SUFBTyxtQkFBbUIsRUFBQSxFQUFBOztBQUg1QjtFQUNFO0lBQUssbUJBQW1CLEVBQUE7RUFDeEI7SUFBTSxxQkFBcUIsRUFBQTtFQUMzQjtJQUFPLG1CQUFtQixFQUFBLEVBQUE7O0FBRTVCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFZjtJQUNFLFdBQVc7SUFDWCxhQUFhLEVBQUE7O0FBRWY7SUFDRSxVQUFVO0lBQ1Ysc0NBQThCO1lBQTlCLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC90b29scy9mbGFncy9mbGFncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgYm91bmNlIHtcclxuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG59XHJcbi5mbGFncyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmX19mbGFnIHtcclxuICAgIG9wYWNpdHk6IC42O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICB9XHJcbiAgJl9fc2VsZWN0ZWQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbjogYm91bmNlIC4zcyBmb3J3YXJkcztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/landing/top/tools/flags/flags.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing/top/tools/flags/flags.component.ts ***!
  \***********************************************************************/
/*! exports provided: FlagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsComponent", function() { return FlagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/store.service */ "./src/app/services/store.service.ts");




var FlagsComponent = /** @class */ (function () {
    function FlagsComponent(translate, storeService) {
        var _this = this;
        this.translate = translate;
        this.storeService = storeService;
        this.langChanged = false;
        this.currentLang = this.translate.currentLang;
        this.setLang = function (lang) {
            _this.translate.use(lang);
            _this.currentLang = lang;
            _this.storeService.setLangChanged(true);
        };
    }
    FlagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeService.bhsLang.subscribe(function (res) {
            _this.langChanged = false;
        });
    };
    FlagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flags',
            template: __webpack_require__(/*! ./flags.component.html */ "./src/app/components/landing/top/tools/flags/flags.component.html"),
            styles: [__webpack_require__(/*! ./flags.component.scss */ "./src/app/components/landing/top/tools/flags/flags.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])
    ], FlagsComponent);
    return FlagsComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/top/tools/modes/modes.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/top/tools/modes/modes.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modes\">\n    <img src=\"../../../../../../assets/icons/sun.png\"\n         alt=\"Light Mode\"\n         [ngClass]=\"!mode ? 'modes__selected' : ''\">\n    <label class=\"switch\">\n        <input type=\"checkbox\" [(ngModel)]=\"mode\" (change)=\"modeChanged()\">\n        <span class=\"slider round\"></span>\n    </label>\n    <img src=\"../../../../../../assets/icons/moon.png\"\n         alt=\"Dark Mode\"\n         [ngClass]=\"mode ? 'modes__selected' : ''\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/landing/top/tools/modes/modes.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/top/tools/modes/modes.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background: blue;\n  padding: 20px; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 45px;\n  height: 18px;\n  margin: 0 10px;\n  opacity: .8; }\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .3s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  left: -1px;\n  bottom: -3px;\n  background-color: white;\n  transition: .4s; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  transform: translateX(24px); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.modes {\n  display: flex;\n  align-items: center; }\n\n.modes__selected {\n    -webkit-filter: brightness(2);\n            filter: brightness(2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC90b29scy9tb2Rlcy9DOlxcVXNlcnNcXEJvcnlzXFxEb2N1bWVudHNcXHdvcmtcXHR5bWRldlxccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYW5kaW5nXFx0b3BcXHRvb2xzXFxtb2Rlc1xcbW9kZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUV0QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osdUJBQXVCO0VBRXZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSwyQkFBMkIsRUFBQTs7QUFHN0I7RUFHRSwyQkFBMkIsRUFBQTs7QUFHN0Isb0JBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRW5CO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC90b29scy9tb2Rlcy9tb2Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgb3BhY2l0eTogLjg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XG4gIHRyYW5zaXRpb246IC4zcztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGxlZnQ6IC0xcHg7XG4gIGJvdHRvbTogLTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjRweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjRweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNHB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tb2RlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJl9fc2VsZWN0ZWQge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygyKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/landing/top/tools/modes/modes.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing/top/tools/modes/modes.component.ts ***!
  \***********************************************************************/
/*! exports provided: ModesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModesComponent", function() { return ModesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/store.service */ "./src/app/services/store.service.ts");



var ModesComponent = /** @class */ (function () {
    function ModesComponent(storeService) {
        this.storeService = storeService;
    }
    ModesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeService.bhs.subscribe(function (res) {
            _this.modeFromStore = res;
        });
    };
    ModesComponent.prototype.modeChanged = function () {
        if (this.mode) {
            this.storeService.setMode('dark');
        }
        else {
            this.storeService.setMode('light');
        }
    };
    ModesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modes',
            template: __webpack_require__(/*! ./modes.component.html */ "./src/app/components/landing/top/tools/modes/modes.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./modes.component.scss */ "./src/app/components/landing/top/tools/modes/modes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
    ], ModesComponent);
    return ModesComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/top/tools/tools.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing/top/tools/tools.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tools\">\r\n    <app-flags></app-flags>\r\n    <app-modes></app-modes>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing/top/tools/tools.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing/top/tools/tools.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tools {\n  position: absolute;\n  top: 5px;\n  right: 35px;\n  display: flex;\n  z-index: 3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC90b29scy9DOlxcVXNlcnNcXEJvcnlzXFxEb2N1bWVudHNcXHdvcmtcXHR5bWRldlxccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYW5kaW5nXFx0b3BcXHRvb2xzXFx0b29scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLGFBQWE7RUFJYixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvdG9wL3Rvb2xzL3Rvb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcblxyXG5cclxuICB6LWluZGV4OiAzO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/landing/top/tools/tools.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing/top/tools/tools.component.ts ***!
  \*****************************************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolsComponent = /** @class */ (function () {
    function ToolsComponent() {
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    ToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.component.html */ "./src/app/components/landing/top/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.scss */ "./src/app/components/landing/top/tools/tools.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/top/top.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/top/top.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-container\">\n    <app-logo></app-logo>\n    <app-tools></app-tools>\n    <app-light-nav></app-light-nav>\n    <app-bg-top></app-bg-top>\n    <app-greeting></app-greeting>\n</div>\n"

/***/ }),

/***/ "./src/app/components/landing/top/top.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/top/top.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-container {\n  position: relative;\n  min-height: 100vh; }\n  .top-container::after {\n    display: block;\n    content: '';\n    width: 100px;\n    height: 100px;\n    background-color: #3a55e9;\n    border-bottom-right-radius: 50%;\n    position: absolute;\n    bottom: -50px;\n    left: -100px; }\n  @media only screen and (min-width: 1500px) {\n    .top-container {\n      border-left: 100px solid #3a55e9;\n      min-height: 100vh; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC9DOlxcVXNlcnNcXEJvcnlzXFxEb2N1bWVudHNcXHdvcmtcXHR5bWRldlxccHVibGljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYW5kaW5nXFx0b3BcXHRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQUZuQjtJQUtJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWSxFQUFBO0VBR2Q7SUFoQkY7TUFpQkksZ0NBQWdDO01BQ2hDLGlCQUFpQixFQUFBLEVBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3RvcC90b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTU1ZTk7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNTBweDtcclxuICAgIGxlZnQ6IC0xMDBweDtcclxuXHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwMHB4KSB7XHJcbiAgICBib3JkZXItbGVmdDogMTAwcHggc29saWQgIzNhNTVlOTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/landing/top/top.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/top/top.component.ts ***!
  \*********************************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopComponent = /** @class */ (function () {
    function TopComponent() {
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top',
            template: __webpack_require__(/*! ./top.component.html */ "./src/app/components/landing/top/top.component.html"),
            styles: [__webpack_require__(/*! ./top.component.scss */ "./src/app/components/landing/top/top.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var StoreService = /** @class */ (function () {
    function StoreService() {
        this.mode = 'light';
        this.languageChanged = false;
        this.bhs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('light');
        this.bhsLang = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    StoreService.prototype.setMode = function (newMode) {
        this.bhs.next(newMode);
    };
    StoreService.prototype.setLangChanged = function (val) {
        this.bhsLang.next(val);
    };
    return StoreService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Borys\Documents\work\tymdev\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map