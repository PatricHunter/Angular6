import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

employees:Employee[]=[{
  id:1,
  name:'Dhoni',
  gender:'male',
  contactPreference:'email',
  email:'dhoni@gmail.com',
  dateOfBirth:new Date('10/25/1972'),
  department:'IT',
  isActive:true,
  photoPath:'assets/images/dhoni.jpg'
},
{
  id:2,
  name:'Raina',
  gender:'female',
  contactPreference:'phone',
  phoneNumber:'123456789',
  dateOfBirth:new Date('10/13/1982'),
  department:'HR',
  isActive:true,
  photoPath:'assets/images/Raina.jpg'
},
{
  id:3,
  name:'Bravo',
  gender:'male',
  contactPreference:'email',
  email:'bravo@gmail.com',
  dateOfBirth:new Date('9/1/1984'),
  department:'IT',
  isActive:true,
  photoPath:'assets/images/bravo.jpg'
},
];
  constructor() { }

  ngOnInit() {
  }

}
