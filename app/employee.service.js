System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var EmployeeService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            EmployeeService = (function () {
                function EmployeeService(http) {
                    this._employeeUrl = 'http://localhost:65402/company/api/employee';
                    this._departmentUrl = 'http://localhost:65402/company/api/department';
                    this.http = http;
                }
                //CRUD methods
                EmployeeService.prototype.getEmployees = function (pageNumber, pageSize) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(this._employeeUrl + "/" + pageNumber + "/" + pageSize, { headers: headers });
                };
                EmployeeService.prototype.getEmployeesBySearch = function (search, pageNumber, pageSize) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(this._employeeUrl + "/GetByName/" + search + "/" + pageNumber + "/" + pageSize);
                };
                EmployeeService.prototype.getAllDepartment = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(this._departmentUrl + "/", { headers: headers });
                };
                EmployeeService.prototype.addEmployee = function (item) {
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this._employeeUrl + "/", body, { headers: headers });
                };
                EmployeeService.prototype.editEmployee = function (item) {
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.put(this._employeeUrl + "/update/" + item.departmentNo, body, { headers: headers });
                };
                EmployeeService.prototype.deleteEmployee = function (departmentNo) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.delete(this._employeeUrl + "/delete/" + departmentNo, { headers: headers });
                };
                EmployeeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmployeeService);
                return EmployeeService;
            })();
            exports_1("EmployeeService", EmployeeService);
        }
    }
});
//# sourceMappingURL=employee.service.js.map