import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {DepartmentService} from './department.service'
import {DepartmentComponent} from './department.component';
import {HomeComponent} from './home.component';
import {EmployeeComponent} from './employee.component';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    DepartmentService
  ]
})
@RouteConfig([
   {path: '/department',name: 'Department',component: DepartmentComponent},
   {path: '/employee',name: 'Employee',component: EmployeeComponent},
   {path: '/home',name: 'Home',component: HomeComponent,useAsDefault: true}
   
])
export class AppComponent {
  title = 'Company d.o.o';
   
}
  

