import {Component, OnInit, Pipe} from 'angular2/core';
import {Router} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {SearchPipe} from './employee-pipe.component'
import {Employee} from './employee';
import {Department} from './department';
import {EmployeeService} from './employee.service';
import {DepartmentComponent} from './department.component';

@Component({
    selector: 'my-employees',
    providers: [HTTP_PROVIDERS, EmployeeService],
    styleUrls: ['app/employee.component.css'],
    templateUrl: 'app/employee.component.html',
    pipes: [SearchPipe]
    
})

export class EmployeeComponent implements OnInit {
    
   constructor(private _router: Router, private _employeeService: EmployeeService) { }
    
    showAddView: boolean = false;
    showEditView: boolean = false;
    departments: Department[] = [];
    department: Department;
    employees: Employee[] = [];
    employee: Employee;
    selected: Object = {};
    newItem: Employee;
    searchString: string = "";
    addNew:Object = {};
   


    //paging
    pageSize: number = 5;
    pageNumber: number = 1;

    private back(event: any) {
        this.pageNumber--;

        if (this.pageNumber < 1)
            this.pageNumber = 1;

      this.getAll();
    }

    private next(event: any) {
        this.pageNumber++;
        this.getAll();

    }
    

    //show/add views

    private showAdd(event: any) {
        this.showAddView = true;
        this.showEditView = false;
    }

    private showHide(event: any) {
        this.showAddView = false;
        this.showEditView = false;
    }

    private showHideEdit(event: any) {
        this.showEditView = false;
        this.showAddView = false;
    }


    private showEdit(item) {
        this.selected = {};
        this.selected = item;
        this.showAddView = false;
        this.showEditView = true;

    }
    
    //crud operation in component
    
      getAll(){
        if(this.searchString.length > 0){
            this._employeeService.getEmployeesBySearch(this.searchString,this.pageNumber, this.pageSize).subscribe(employees => this.bindData(this.employees, this.departments));
        }else{
             this._employeeService.getEmployees(this.pageNumber, this.pageSize).subscribe(employees => this.bindData(this.employees, this.departments));
        }
      }
      
      bindData(employees, departments){
          
          for(var i = 0; i < this.employees.length; i++){
              for(var j = 0; j < this.departments.length; j++ ){
                    if(this.employees[i].departmentNo==this.departments[j].departmentNo){
                         this.employees[i].Department = {
                             departmentNo: this.departments[j].departmentNo,
                             departmentName: this.departments[j].departmentName,
                             departmentLocation: this.departments[j].departmentLocation
                             
                         }
                      break;  
                    }
                  
                  
              }
              
              
          }
 }
 
 
      getEmployees(pageNumber,pageSize){
          this._employeeService.getEmployees(this.pageNumber,this.pageSize)
                               .subscribe(employees => this.employees = employees.json());
      }

    getAllDepartment(){
         this._employeeService.getAllDepartment().subscribe(departments => this.departments = departments.json());
    }
    
    addEmployee(item: Employee){
     this.newItem = item;
     this.newItem.departmentNo = item.Department.departmentNo;

     this._employeeService.addEmployee(item).subscribe(employees => this.employees = employees.json());
     this.getAll();}

    editEmployee(item){
     this.getAll();
     this._employeeService.editEmployee(this.selected).subscribe(employees => this.employees = employees.json());
     }
     
     deleteEmployee(item){
             if (confirm("Do you wana delete item named " + item.employeeName + "?")) {
              this._employeeService.deleteEmployee(item.employeeNo).subscribe(data => this.employees = data.json());  
              this.getAll(); 
        }
     }

  
    ngOnInit() {
     
      this.getAllDepartment();
      this.getEmployees(this.pageNumber,this.pageSize);
       this.getAll();
    }



}