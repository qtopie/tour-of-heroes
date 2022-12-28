var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"en-US"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(val){const n=val,i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["en"]=["en",[["a","p"],["AM","PM"],u],[["AM","PM"],u,u],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],u,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} 'at' {0}",u],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",plural,[[["mi","n","in the morning","in the afternoon","in the evening","at night"],["midnight","noon","in the morning","in the afternoon","in the evening","at night"],u],[["midnight","noon","morning","afternoon","evening","night"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
"use strict";
(self["webpackChunktour_of_heroes"] = self["webpackChunktour_of_heroes"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroes/heroes.component */ 1680);
/* harmony import */ var _heroes_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heroes/hero-detail/hero-detail.component */ 9140);
/* harmony import */ var _core_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/not-found.component */ 7041);







const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
    { path: 'detail/:id', component: _heroes_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_2__.HeroDetailComponent },
    { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_1__.HeroesComponent },
    { path: '**', component: _core_not_found_component__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 3088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Tour of Heroes';
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 294);








let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production }),
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.service */ 6383);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-import-guard */ 7802);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 4814);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-in-memory-web-api */ 28);
/* harmony import */ var _shared_in_memory_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/in-memory-data.service */ 4488);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found.component */ 7041);
var _a;






// Imports for loading & configuring the in-memory web api



let CoreModule = class CoreModule {
    constructor(parentModule) {
        (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_1__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.SkipSelf }] }
];
CoreModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__.DashboardModule,
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            // environment.production ?
            //     [] : HttpClientInMemoryWebApiModule.forRoot(
            //         InMemoryDataService, { dataEncapsulation: false }
            //     ),
            // Here I just use it for github page demo
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__.HttpClientInMemoryWebApiModule.forRoot(_shared_in_memory_data_service__WEBPACK_IMPORTED_MODULE_3__.InMemoryDataService, { dataEncapsulation: false }),
        ],
        exports: [],
        declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent],
        providers: [_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService],
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof CoreModule !== "undefined" && CoreModule) === "function" ? _a : Object])
], CoreModule);



/***/ }),

/***/ 6383:
/*!****************************************!*\
  !*** ./src/app/core/logger.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggerService": () => (/* binding */ LoggerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let LoggerService = class LoggerService {
    log(msg) {
        console.log(msg);
    }
    error(msg) {
        console.error(msg);
    }
};
LoggerService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], LoggerService);



/***/ }),

/***/ 7802:
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 7041:
/*!*********************************************!*\
  !*** ./src/app/core/not-found.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_runner_work_tour_of_heroes_tour_of_heroes_src_app_core_not_found_component_ts_css_ngResource_home_runner_work_tour_of_heroes_tour_of_heroes_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAg_home_runner_work_tour_of_heroes_tour_of_heroes_src_app_core_not_found_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/core/not-found.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAg!./src/app/core/not-found.component.ts */ 8836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'page-not-found',
        template: 'are you lost?',
        styles: [_home_runner_work_tour_of_heroes_tour_of_heroes_src_app_core_not_found_component_ts_css_ngResource_home_runner_work_tour_of_heroes_tour_of_heroes_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAg_home_runner_work_tour_of_heroes_tour_of_heroes_src_app_core_not_found_component_ts__WEBPACK_IMPORTED_MODULE_0__]
    })
], PageNotFoundComponent);



/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 1029);
/* harmony import */ var _dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css?ngResource */ 9937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _heroes_shared_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../heroes/shared/hero.service */ 6907);
var _a;





let DashboardComponent = class DashboardComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    ngOnInit() {
        this.heroService.getHeroes()
            .subscribe((heroes) => {
            if (heroes !== undefined) {
                this.heroes = heroes.slice(1, 5);
            }
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _heroes_shared_hero_service__WEBPACK_IMPORTED_MODULE_2__.HeroService }
];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        // moduleId: module.id,
        selector: 'dashboard',
        template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _heroes_shared_hero_service__WEBPACK_IMPORTED_MODULE_2__.HeroService !== "undefined" && _heroes_shared_hero_service__WEBPACK_IMPORTED_MODULE_2__.HeroService) === "function" ? _a : Object])
], DashboardComponent);



/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 7528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _heroes_heroes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../heroes/heroes.module */ 3058);






let DashboardModule = class DashboardModule {
};
DashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _heroes_heroes_module__WEBPACK_IMPORTED_MODULE_1__.HeroesModule,
        ],
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        ],
        providers: [],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], DashboardModule);



/***/ }),

/***/ 9140:
/*!*************************************************************!*\
  !*** ./src/app/heroes/hero-detail/hero-detail.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroDetailComponent": () => (/* binding */ HeroDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _hero_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-detail.component.html?ngResource */ 8733);
/* harmony import */ var _hero_detail_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-detail.component.css?ngResource */ 3825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/hero.service */ 6907);
/* harmony import */ var _shared_hero_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hero.model */ 2360);
var _a, _b, _c;









let HeroDetailComponent = class HeroDetailComponent {
    constructor(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((params) => this.heroService.getHero(+params.id)))
            .subscribe((hero) => this.hero = hero);
    }
    save() {
        this.heroService.update(this.hero)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
};
HeroDetailComponent.ctorParameters = () => [
    { type: _shared_hero_service__WEBPACK_IMPORTED_MODULE_2__.HeroService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location }
];
HeroDetailComponent.propDecorators = {
    hero: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
HeroDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-hero-detail',
        template: _hero_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_hero_detail_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [typeof (_a = typeof _shared_hero_service__WEBPACK_IMPORTED_MODULE_2__.HeroService !== "undefined" && _shared_hero_service__WEBPACK_IMPORTED_MODULE_2__.HeroService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute) === "function" ? _b : Object, typeof (_c = typeof _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location !== "undefined" && _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location) === "function" ? _c : Object])
], HeroDetailComponent);



/***/ }),

/***/ 5015:
/*!*************************************************************!*\
  !*** ./src/app/heroes/hero-search/hero-search.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroSearchComponent": () => (/* binding */ HeroSearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _hero_search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-search.component.html?ngResource */ 8263);
/* harmony import */ var _hero_search_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-search.component.css?ngResource */ 2322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _hero_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-search.service */ 2114);
var _a, _b;









let HeroSearchComponent = class HeroSearchComponent {
    constructor(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(300), 
        // ignore new term if same as previous term
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), 
        // switch to new search observable each time the term changes
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((term) => this.heroSearchService.search(term)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            console.log(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
        }));
    }
    // Push a search term into the Observable stream
    search(term) {
        this.searchTerms.next(term);
    }
    gotoDetail(hero) {
        const link = ['/detail', hero.id];
        this.router.navigate(link);
    }
};
HeroSearchComponent.ctorParameters = () => [
    { type: _hero_search_service__WEBPACK_IMPORTED_MODULE_2__.HeroSearchService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
HeroSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        // moduleId: module.id,
        selector: 'hero-search',
        template: _hero_search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [_hero_search_service__WEBPACK_IMPORTED_MODULE_2__.HeroSearchService],
        styles: [_hero_search_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [typeof (_a = typeof _hero_search_service__WEBPACK_IMPORTED_MODULE_2__.HeroSearchService !== "undefined" && _hero_search_service__WEBPACK_IMPORTED_MODULE_2__.HeroSearchService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router) === "function" ? _b : Object])
], HeroSearchComponent);



/***/ }),

/***/ 2114:
/*!***********************************************************!*\
  !*** ./src/app/heroes/hero-search/hero-search.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroSearchService": () => (/* binding */ HeroSearchService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ 8954);
var _a;






let HeroSearchService = class HeroSearchService {
    constructor(http) {
        this.http = http;
    }
    /* GET heroes whose name contains search term */
    search(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
        }
        return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__.server + `/heroes/?name=${term}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((_) => this.log(`found heroes matching "${term}"`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('searchHeroes', [])));
    }
    log(message) {
        console.log(message);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(result);
        };
    }
};
HeroSearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
HeroSearchService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient) === "function" ? _a : Object])
], HeroSearchService);



/***/ }),

/***/ 1680:
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroesComponent": () => (/* binding */ HeroesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _heroes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroes.component.html?ngResource */ 1705);
/* harmony import */ var _heroes_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroes.component.css?ngResource */ 6937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/hero.service */ 6907);
var _a, _b;






let HeroesComponent = class HeroesComponent {
    constructor(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero) {
        this.selectedHero = hero;
    }
    getHeroes() {
        this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes);
    }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .subscribe((hero) => {
            this.heroes.push(hero);
            this.selectedHero = null;
        });
    }
    delete(hero) {
        this.heroService
            .delete(hero.id)
            .subscribe(() => {
            this.heroes = this.heroes.filter((h) => h !== hero);
            if (this.selectedHero === hero) {
                this.selectedHero = null;
            }
        });
    }
};
HeroesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_hero_service__WEBPACK_IMPORTED_MODULE_2__.HeroService }
];
HeroesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-heroes',
        template: _heroes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_heroes_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router) === "function" ? _a : Object, typeof (_b = typeof _shared_hero_service__WEBPACK_IMPORTED_MODULE_2__.HeroService !== "undefined" && _shared_hero_service__WEBPACK_IMPORTED_MODULE_2__.HeroService) === "function" ? _b : Object])
], HeroesComponent);



/***/ }),

/***/ 3058:
/*!*****************************************!*\
  !*** ./src/app/heroes/heroes.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroesModule": () => (/* binding */ HeroesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ 9140);
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-search/hero-search.component */ 5015);
/* harmony import */ var _heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heroes.component */ 1680);
/* harmony import */ var _shared_hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/hero.service */ 6907);







let HeroesModule = class HeroesModule {
};
HeroesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _heroes_component__WEBPACK_IMPORTED_MODULE_3__.HeroesComponent,
            _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_1__.HeroDetailComponent,
            _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_2__.HeroSearchComponent,
        ],
        exports: [_hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_2__.HeroSearchComponent],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ],
        providers: [_shared_hero_service__WEBPACK_IMPORTED_MODULE_4__.HeroService],
    })
], HeroesModule);



/***/ }),

/***/ 2360:
/*!*********************************************!*\
  !*** ./src/app/heroes/shared/hero.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": () => (/* binding */ Hero)
/* harmony export */ });
class Hero {
}


/***/ }),

/***/ 6907:
/*!***********************************************!*\
  !*** ./src/app/heroes/shared/hero.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroService": () => (/* binding */ HeroService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ 8954);
var _a;






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' }),
};
let HeroService = class HeroService {
    constructor(http) {
        this.http = http;
        this.heroesUrl = _shared_global__WEBPACK_IMPORTED_MODULE_0__.server + '/heroes';
    }
    getHeroes() {
        return this.http.get(this.heroesUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this.log('fetched heroes')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getHeroes', [])));
    }
    getHero(id) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((_) => this.log(`fetched hero id=${id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError(`getHero id=${id}`)));
    }
    update(hero) {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, hero, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((_) => this.log(`updated hero id=${hero.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('updateHero')));
    }
    create(name) {
        return this.http
            .post(this.heroesUrl, { name }, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((hero) => this.log(`added hero w/ id=${hero.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('addHero')));
    }
    delete(id) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((_) => this.log(`deleted hero id=${id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('deleteHero')));
    }
    log(message) {
        // TODO replace console debug
        // console.debug(message);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(result);
        };
    }
};
HeroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HeroService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient) === "function" ? _a : Object])
], HeroService);



/***/ }),

/***/ 8954:
/*!**********************************!*\
  !*** ./src/app/shared/global.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sep": () => (/* binding */ sep),
/* harmony export */   "server": () => (/* binding */ server),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });

// Some global vairables
const server = 'api';
const sep = '/';
const version = '0.1.0';


/***/ }),

/***/ 4488:
/*!**************************************************!*\
  !*** ./src/app/shared/in-memory-data.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryDataService": () => (/* binding */ InMemoryDataService)
/* harmony export */ });
class InMemoryDataService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' },
            // { id: 21 } // no name
        ];
        return { heroes };
    }
}


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        declarations: [],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
        ],
        providers: [],
    })
], SharedModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false,
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 8836:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/core/not-found.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAg!./src/app/core/not-found.component.ts ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnRzIn0= */";

/***/ }),

/***/ 3088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDIge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5uYXYgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgY29sb3I6ICM2MDdEOEI7XG59XG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xufVxubmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG4iXX0= */";

/***/ }),

/***/ 9937:
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQixFQUFFLGdCQUFnQjtBQUN0QztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUU7QUFDdEI7QUFDQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbY2xhc3MqPSdjb2wtJ10ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5bY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4qLCAqOmFmdGVyLCAqOmJlZm9yZSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDA7XG59XG5oNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ncmlkIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbC0xLTQge1xuICB3aWR0aDogMjUlO1xufVxuLm1vZHVsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlZWU7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ubW9kdWxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cbi5ncmlkLXBhZCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2R1bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ncmlkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLm1vZHVsZSB7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 3825:
/*!*************************************************************************!*\
  !*** ./src/app/heroes/hero-detail/hero-detail.component.css?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "label {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc; \n  cursor: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFFLFlBQVk7QUFDL0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoiaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogM2VtO1xuICBtYXJnaW46IC41ZW0gMDtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW5wdXQge1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmctbGVmdDogLjRlbTtcbn1cbmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IGN1cnNvcjogaGFuZDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogI2NjYzsgXG4gIGN1cnNvcjogYXV0bztcbn1cbiJdfQ== */";

/***/ }),

/***/ 2322:
/*!*************************************************************************!*\
  !*** ./src/app/heroes/hero-search/hero-search.component.css?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".search-result{\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 20px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n}\n#search-box{\n  width: 200px;\n  height: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJoZXJvLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1yZXN1bHR7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gIHdpZHRoOjE5NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzZWFyY2gtYm94e1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 6937:
/*!********************************************************!*\
  !*** ./src/app/heroes/heroes.component.css?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.heroes .text {\n  position: relative;\n  top: -3px;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  float:right;\n  margin-top: 2px;\n  margin-right: .8em;\n  background-color: gray !important;\n  color:white;\n}\n/*\nCopyright 2016 Google Inc. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsV0FBVztBQUNiO0FBR0E7Ozs7Q0FJQyIsImZpbGUiOiJoZXJvZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlcm9lcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xufVxuLmhlcm9lcyBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmhlcm9lcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAuMWVtO1xufVxuLmhlcm9lcyBsaS5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlcm9lcyAudGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuLmhlcm9lcyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC00cHg7XG4gIGhlaWdodDogMS44ZW07XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5idXR0b24ge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuXG5idXR0b24uZGVsZXRlIHtcbiAgZmxvYXQ6cmlnaHQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOndoaXRlO1xufVxuXG5cbi8qXG5Db3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxuKi8iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<h1>{{title}}<h1>\n<nav>\n      <a i18n routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      <a i18n routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n</nav>\n<router-outlet></router-outlet>\n";

/***/ }),

/***/ 1029:
/*!***************************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<h3 i18n>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n<a *ngFor=\"let hero of heroes\"  [routerLink]=\"['/detail', hero.id]\"  class=\"col-1-4\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </a>\n</div>\n<hero-search></hero-search>";

/***/ }),

/***/ 8733:
/*!**************************************************************************!*\
  !*** ./src/app/heroes/hero-detail/hero-detail.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "  <div *ngIf=\"hero\">\n    <h2 i18n>{{hero.name}} details!</h2>\n    <div><label i18n>id: </label>{{hero.id}}</div>\n    <div>\n      <label i18n>name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </div>\n    <button i18n (click)=\"save()\">Save</button>\n    <button i18n (click)=\"goBack()\">Back</button>\n  </div>";

/***/ }),

/***/ 8263:
/*!**************************************************************************!*\
  !*** ./src/app/heroes/hero-search/hero-search.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"search-component\">\n  <h4 i18n>Hero Search</h4>\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n  <div>\n    <div *ngFor=\"let hero of heroes$ | async\"\n         (click)=\"gotoDetail(hero)\" class=\"search-result\" >\n      {{hero.name}}\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 1705:
/*!*********************************************************!*\
  !*** ./src/app/heroes/heroes.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n  <h2 i18n>My Heroes</h2>\n  <div>\n  <label i18n>Hero name:</label> <input #heroName />\n  <button i18n (click)=\"add(heroName.value); heroName.value=''\">\n    Add\n  </button>\n</div>\n  <ul class=\"heroes\">\n    <li *ngFor=\"let hero of heroes\"\n      [class.selected]=\"hero === selectedHero\"\n      (click)=\"onSelect(hero)\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      <button class=\"delete\"\n        (click)=\"delete(hero); $event.stopPropagation()\">x</button>\n    </li>\n  </ul>\n<div *ngIf=\"selectedHero\">\n  <h2 i18n>\n    {{selectedHero.name | uppercase}} is my hero\n  </h2>\n  <button i18n (click)=\"gotoDetail()\">View Details</button>\n</div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map