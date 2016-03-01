System.register(['angular2/core', 'angular2/router', 'angular2/http', './employee-pipe.component', './employee.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, employee_pipe_component_1, employee_service_1;
    var EmployeeComponent;
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
            function (employee_pipe_component_1_1) {
                employee_pipe_component_1 = employee_pipe_component_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            }],
        execute: function() {
            EmployeeComponent = (function () {
                function EmployeeComponent(_router, _employeeService) {
                    this._router = _router;
                    this._employeeService = _employeeService;
                    this.showAddView = false;
                    this.showEditView = false;
                    this.departments = [];
                    this.employees = [];
                    this.selected = {};
                    this.searchString = "";
                    this.addNew = {};
                    //paging
                    this.pageSize = 5;
                    this.pageNumber = 1;
                }
                EmployeeComponent.prototype.back = function (event) {
                    this.pageNumber--;
                    if (this.pageNumber < 1)
                        this.pageNumber = 1;
                    this.getAll();
                };
                EmployeeComponent.prototype.next = function (event) {
                    this.pageNumber++;
                    this.getAll();
                };
                //show/add views
                EmployeeComponent.prototype.showAdd = function (event) {
                    this.showAddView = true;
                    this.showEditView = false;
                };
                EmployeeComponent.prototype.showHide = function (event) {
                    this.showAddView = false;
                    this.showEditView = false;
                };
                EmployeeComponent.prototype.showHideEdit = function (event) {
                    this.showEditView = false;
                    this.showAddView = false;
                };
                EmployeeComponent.prototype.showEdit = function (item) {
                    this.selected = {};
                    this.selected = item;
                    this.showAddView = false;
                    this.showEditView = true;
                };
                //crud operation in component
                EmployeeComponent.prototype.getAll = function () {
                    var _this = this;
                    if (this.searchString.length > 0) {
                        this._employeeService.getEmployeesBySearch(this.searchString, this.pageNumber, this.pageSize).subscribe(function (employees) { return _this.bindData(_this.employees, _this.departments); });
                    }
                    else {
                        this._employeeService.getEmployees(this.pageNumber, this.pageSize).subscribe(function (employees) { return _this.bindData(_this.employees, _this.departments); });
                    }
                };
                EmployeeComponent.prototype.bindData = function (employees, departments) {
                    for (var i = 0; i < this.employees.length; i++) {
                        for (var j = 0; j < this.departments.length; j++) {
                            if (this.employees[i].departmentNo == this.departments[j].departmentNo) {
                                this.employees[i].Department = {
                                    departmentNo: this.departments[j].departmentNo,
                                    departmentName: this.departments[j].departmentName,
                                    departmentLocation: this.departments[j].departmentLocation
                                };
                                break;
                            }
                        }
                    }
                };
                EmployeeComponent.prototype.getEmployees = function (pageNumber, pageSize) {
                    var _this = this;
                    this._employeeService.getEmployees(this.pageNumber, this.pageSize)
                        .subscribe(function (employees) { return _this.employees = employees.json(); });
                };
                EmployeeComponent.prototype.getAllDepartment = function () {
                    var _this = this;
                    this._employeeService.getAllDepartment().subscribe(function (departments) { return _this.departments = departments.json(); });
                };
                EmployeeComponent.prototype.addEmployee = function (item) {
                    var _this = this;
                    this.newItem = item;
                    this.newItem.departmentNo = item.Department.departmentNo;
                    this._employeeService.addEmployee(item).subscribe(function (employees) { return _this.employees = employees.json(); });
                    this.getAll();
                };
                EmployeeComponent.prototype.editEmployee = function (item) {
                    var _this = this;
                    this.getAll();
                    this._employeeService.editEmployee(this.selected).subscribe(function (employees) { return _this.employees = employees.json(); });
                };
                EmployeeComponent.prototype.deleteEmployee = function (item) {
                    var _this = this;
                    if (confirm("Do you wana delete item named " + item.employeeName + "?")) {
                        this._employeeService.deleteEmployee(item.employeeNo).subscribe(function (data) { return _this.employees = data.json(); });
                        this.getAll();
                    }
                };
                EmployeeComponent.prototype.ngOnInit = function () {
                    this.getAllDepartment();
                    this.getEmployees(this.pageNumber, this.pageSize);
                    this.getAll();
                };
                EmployeeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-employees',
                        providers: [http_1.HTTP_PROVIDERS, employee_service_1.EmployeeService],
                        styleUrls: ['app/employee.component.css'],
                        templateUrl: 'app/employee.component.html',
                        pipes: [employee_pipe_component_1.SearchPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, employee_service_1.EmployeeService])
                ], EmployeeComponent);
                return EmployeeComponent;
            })();
            exports_1("EmployeeComponent", EmployeeComponent);
        }
    }
});
//# sourceMappingURL=employee.component.js.map