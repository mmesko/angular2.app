import {Pipe} from 'angular2/core';

@Pipe({
    name: "searchString"   
})
export class SearchPipe{
    transform(value: any, args: string[]): any{
        let filter = args[0].toLocaleLowerCase();
       return filter ? value.filter(employee => employee.employeeName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
    
}