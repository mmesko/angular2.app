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
    var DepartmentService;
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
            DepartmentService = (function () {
                function DepartmentService(http) {
                    this._departmentUrl = 'http://localhost:65402/company/api/department';
                    this.http = http;
                }
                //CRUD methods
                DepartmentService.prototype.getDepartments = function (pageNumber, pageSize) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(this._departmentUrl + "/" + pageNumber + "/" + pageSize, { headers: headers });
                };
                DepartmentService.prototype.getDepartmentsBySearch = function (search, pageNumber, pageSize) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(this._departmentUrl + "/GetByName/" + search + "/" + pageNumber + "/" + pageSize);
                };
                DepartmentService.prototype.addDepartment = function (item) {
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this._departmentUrl + "/", body, { headers: headers });
                };
                DepartmentService.prototype.editDepartment = function (item) {
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.put(this._departmentUrl + "/update/" + item.departmentNo, body, { headers: headers });
                };
                DepartmentService.prototype.deleteDepartment = function (departmentNo) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.delete(this._departmentUrl + "/delete/" + departmentNo, { headers: headers });
                };
                DepartmentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DepartmentService);
                return DepartmentService;
            })();
            exports_1("DepartmentService", DepartmentService);
        }
    }
});
//# sourceMappingURL=department.service.js.map