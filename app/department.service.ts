import {Http, HTTP_BINDINGS,HTTP_PROVIDERS, Response, Headers} from 'angular2/http';
import {Inject, Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Department} from './department';

@Injectable()

export class DepartmentService{ 
    
 private _departmentUrl = 'http://localhost:65402/company/api/department';   
        
 public http : Http;
 constructor(http : Http){
     this.http = http;    
 }     
   

    //CRUD methods
    
    getDepartments(pageNumber, pageSize) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(this._departmentUrl + "/" + pageNumber + "/" + pageSize, {headers:headers});
            
    }
    
    getDepartmentsBySearch(search, pageNumber, pageSize){
         var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(this._departmentUrl + "/GetByName/" + search + "/" + pageNumber + "/" + pageSize);
        
    }
    
    addDepartment(item){
          let body = JSON.stringify(item);
          var headers = new Headers();
          headers.append('Content-Type', 'application/json');
          
          return this.http.post(this._departmentUrl + "/", body, {headers:headers});
        
    }
    
    editDepartment(item) {
        let body = JSON.stringify(item);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
    
        return this.http.put(this._departmentUrl + "/update/" + item.departmentNo, body, { headers: headers })}
    
    deleteDepartment(departmentNo){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        return this.http.delete(this._departmentUrl + "/delete/" + departmentNo, { headers: headers })}
       
}


