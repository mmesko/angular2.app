System.register(['angular2/core', 'angular2/router', 'angular2/http', 'ng2-bootstrap/ng2-bootstrap', './department.service', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, ng2_bootstrap_1, department_service_1, common_1;
    var DepartmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (department_service_1_1) {
                department_service_1 = department_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DepartmentComponent = (function () {
                function DepartmentComponent(_router, _departmentService, fb) {
                    this._router = _router;
                    this._departmentService = _departmentService;
                    this.showAddView = false;
                    this.showEditView = false;
                    this.departments = [];
                    this.selected = {};
                    this.searchString = "";
                    this.newItem = {};
                    //paging
                    this.pageSize = 5;
                    this.pageNumber = 1;
                    this.myForm = fb.group({
                        'departmentName': ['', common_1.Validators.required],
                        'departmentLocation': ['', common_1.Validators.required]
                    });
                    this.departmentName = this.myForm.controls['departmentName'];
                    this.departmentLocation = this.myForm.controls['departmentLocation'];
                }
                DepartmentComponent.prototype.back = function (event) {
                    this.pageNumber--;
                    if (this.pageNumber < 1)
                        this.pageNumber = 1;
                    this.getAll();
                };
                DepartmentComponent.prototype.next = function (event) {
                    this.pageNumber++;
                    this.getAll();
                };
                //show/add views
                DepartmentComponent.prototype.showAdd = function (event) {
                    this.showAddView = true;
                };
                DepartmentComponent.prototype.showHide = function (event) {
                    this.showAddView = false;
                };
                DepartmentComponent.prototype.showHideEdit = function (event) {
                    this.showEditView = false;
                };
                DepartmentComponent.prototype.showEdit = function (item) {
                    this.selected = {};
                    this.selected = item;
                    this.showAddView = false;
                    this.showEditView = true;
                };
                //crud operation in component
                DepartmentComponent.prototype.getAll = function () {
                    var _this = this;
                    if (this.searchString.length > 0) {
                        this._departmentService.getDepartmentsBySearch(this.searchString, this.pageNumber, this.pageSize).subscribe(function (departments) { return _this.departments = departments.json(); });
                    }
                    else {
                        this._departmentService.getDepartments(this.pageNumber, this.pageSize).subscribe(function (departments) { return _this.departments = departments.json(); });
                    }
                };
                DepartmentComponent.prototype.addDepartment = function (item) {
                    var _this = this;
                    this._departmentService.addDepartment(item).subscribe(function (departments) { return _this.departments = departments.json(); });
                    this.getAll();
                };
                DepartmentComponent.prototype.editDepartment = function (item) {
                    var _this = this;
                    this._departmentService.editDepartment(this.selected).subscribe(function (departments) { return _this.departments = departments.json(); });
                    this.getAll();
                };
                DepartmentComponent.prototype.deleteDepartment = function (item) {
                    var _this = this;
                    if (confirm("Do you wana delete item named " + item.departmentName + "?")) {
                        this._departmentService.deleteDepartment(item.departmentNo).subscribe(function (departments) { return _this.departments = departments.json(); });
                        this.getAll();
                    }
                };
                DepartmentComponent.prototype.ngOnInit = function () {
                    this.getAll();
                };
                DepartmentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-departments',
                        providers: [http_1.HTTP_PROVIDERS, department_service_1.DepartmentService],
                        directives: [ng2_bootstrap_1.Alert],
                        styleUrls: ['app/department.component.css'],
                        templateUrl: 'app/department.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, department_service_1.DepartmentService, common_1.FormBuilder])
                ], DepartmentComponent);
                return DepartmentComponent;
            })();
            exports_1("DepartmentComponent", DepartmentComponent);
        }
    }
});
//# sourceMappingURL=department.component.js.map