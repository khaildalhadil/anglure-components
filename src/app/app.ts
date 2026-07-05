import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';

type employeesModel = {
  id: string,
  name: string,
  department: string,
  age: string,
  isMar: boolean,
  workNow: boolean
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  
  employees: employeesModel[] = [
    {
      id: "1",
      name: "Khalid",
      department: "IT",
      age: "23",
      isMar: false,
      workNow: false
    },
    {
      id: "2",
      name: "Ali",
      department: "Bus",
      age: "33",
      isMar: false,
      workNow: false
    },
    {
      id: "4",
      name: "string",
      department: "string",
      age: "65",
      isMar: true,
      workNow: true
    }
  ]

  trackByEmpId(index: number, employee: employeesModel): string {
    return employee.id
  }
}
