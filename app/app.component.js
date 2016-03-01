System.register(['angular2/core', 'angular2/router', './department.service', './department.component', './home.component', './employee.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, department_service_1, department_component_1, home_component_1, employee_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (department_service_1_1) {
                department_service_1 = department_service_1_1;
            },
            function (department_component_1_1) {
                department_component_1 = department_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (employee_component_1_1) {
                employee_component_1 = employee_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Company d.o.o';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            department_service_1.DepartmentService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/department', name: 'Department', component: department_component_1.DepartmentComponent },
                        { path: '/employee', name: 'Employee', component: employee_component_1.EmployeeComponent },
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map