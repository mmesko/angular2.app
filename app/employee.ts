import {Department} from './department';

export interface Employee{
    employeeNo: number;
    departmentNo: number;
    employeeName: string;
    salary:number; 
    Department: Department;   
}