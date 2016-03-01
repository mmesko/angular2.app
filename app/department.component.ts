import { Component, OnInit, ElementRef} from 'angular2/core';
import { Router } from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import {SearchPipe} from './department-pipe.component';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

import {Department} from './department';
import {DepartmentService} from './department.service';
import {  
  FORM_DIRECTIVES,  
  FormBuilder,  
  ControlGroup,  
  Validators ,
   AbstractControl   
} from 'angular2/common';
 



@Component({
    selector: 'my-departments',
    providers: [HTTP_PROVIDERS, DepartmentService],
    directives: [Alert],
    styleUrls: ['app/department.component.css'],
    templateUrl: 'app/department.component.html'
  
    
})

export class DepartmentComponent implements OnInit {
    myForm: ControlGroup;
    departmentName: AbstractControl;
     departmentLocation: AbstractControl;
    
    constructor(private _router: Router, private _departmentService: DepartmentService, fb: FormBuilder) { 
        

    this.myForm = fb.group({  
      'departmentName':  ['', Validators.required],
      'departmentLocation':  ['', Validators.required]  
    });

    this.departmentName= this.myForm.controls['departmentName'];  
     this.departmentLocation= this.myForm.controls['departmentLocation'];  
        
        }
    
    showAddView: boolean = false;
    showEditView: boolean = false;
    departments: Department[] = [];
    department: Department;
    selected: Object = {};
    searchString: string = "";
        
    newItem: Object = {};


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
    }

    private showHide(event: any) {
        this.showAddView = false;
    }

    private showHideEdit(event: any) {
        this.showEditView = false;
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
            this._departmentService.getDepartmentsBySearch(this.searchString,this.pageNumber, this.pageSize).subscribe(departments=> this.departments = departments.json());
        }else{
             this._departmentService.getDepartments(this.pageNumber, this.pageSize).subscribe(departments=> this.departments = departments.json());
        }
      }
    
    addDepartment(item){
     this._departmentService.addDepartment(item).subscribe(departments => this.departments = departments.json());
     this.getAll();}

    editDepartment(item){
     this._departmentService.editDepartment(this.selected).subscribe(departments => this.departments = departments.json());
     this.getAll();
      
    }
     
     deleteDepartment(item){
             if (confirm("Do you wana delete item named " + item.departmentName + "?")) {
               this._departmentService.deleteDepartment(item.departmentNo).subscribe(departments => this.departments = departments.json());  
               this.getAll(); 
        }
     }
     
     

  
    ngOnInit() {
       this.getAll();
    }



}