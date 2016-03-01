import {Http, HTTP_BINDINGS,HTTP_PROVIDERS, Response, Headers} from 'angular2/http';
import {Inject, Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Employee} from './employee';

@Injectable()

export class EmployeeService{ 
    
 private _employeeUrl = 'http://localhost:65402/company/api/employee';
  private _departmentUrl = 'http://localhost:65402/company/api/department';   
           
        
 public http : Http;
 constructor(http : Http){
     this.http = http;    
 }     
   

    //CRUD methods
    
    getEmployees(pageNumber, pageSize) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(this._employeeUrl + "/" + pageNumber + "/" + pageSize, {headers:headers});
            
    }
    
       getEmployeesBySearch(search, pageNumber, pageSize){
         var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(this._employeeUrl + "/GetByName/" + search + "/" + pageNumber + "/" + pageSize);
        
    }
    
    getAllDepartment(){
          var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(this._departmentUrl + "/", {headers:headers});
        
    }
    
    addEmployee(item){
          let body = JSON.stringify(item);
          var headers = new Headers();
          headers.append('Content-Type', 'application/json');
          
          return this.http.post(this._employeeUrl + "/", body, {headers:headers});
        
    }
    
    editEmployee(item) {
        let body = JSON.stringify(item);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
    
        return this.http.put(this._employeeUrl + "/update/" + item.departmentNo, body, { headers: headers })}
    
    deleteEmployee(departmentNo){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        return this.http.delete(this._employeeUrl + "/delete/" + departmentNo, { headers: headers })}
       
}