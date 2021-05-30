import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  newEmployeeClicked = false;
  employee =[
    {name:'Isha' , Position:'developer'},
    {name:'Sujata',Position:'developer'},
    {name:'Akshay' , Position:'developer'}
  ]
  color:any;

  constructor() { }

  ngOnInit(): void {
  }
  model:any={};
  model2:any={};
  addEmployee(){
    this.employee.push(this.model);
    this.model={}
  }
  deleteEmployee(i:any){
    this.employee.splice(i);
    console.log(i)
  }
  myValue:any;
    
  editEmployee(editEmployeeInfo:any) {
  this.model2.name = this.employee[editEmployeeInfo].name;
  this.model2.position = this.employee[editEmployeeInfo].Position;
  this.myValue = editEmployeeInfo;
  }
  updateEmployee(){
    let editEmployeeInfo = this.myValue;
    for( let i =0; i<this.employee.length; i++){
      if(i==editEmployeeInfo){
        this.employee[i] = this.model2;
        this.model2={}
      }
    }
  }
 addNewEmployeeBtn(){
   this.newEmployeeClicked=!this.newEmployeeClicked;

 }
 changeColorOne(){
   this.color=!this.color;
   if( this.color){
     return '#ffffff';
   }else{
      return '#f6f6f6';

    }
   }
 }

