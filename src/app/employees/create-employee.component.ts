import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Department } from '../models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeesComponent implements OnInit {
datePickerConfig:Partial<BsDatepickerConfig>;
previewPhoto:boolean=false;
employee:Employee={
id:null,
name:null,
gender:null,
contactPreference:null,
phoneNumber:null,
email:null,
dateOfBirth:null,
department:null,
isActive:null,
photoPath:null
};
departments:Department[]=[
  {id:1,name:'HelpDesk'},
  {id:2,name:'HR'},
  {id:3, name:'IT'},
  {id:4, name:'PayRoll'}
];
  constructor() {
    this.datePickerConfig= Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers:false})
   }
  ngOnInit() {
  }
  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }
  saveEmployee(empForm:NgForm):void{
console.log(empForm);
  }

}
