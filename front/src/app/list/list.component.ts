import { Component, OnInit } from '@angular/core';
import vanList from '../vans';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  vans: Object[];
  newVan: Object = {};

  constructor() { }
  
  ngOnInit() {
    this.vans = vanList;
  }

  onSubmit(event){
    event.preventDefault();
  }

  addContact(){
    console.log("Add contact has been called");

     this.vans.push(this.newVan);
     console.log(this.vans);
     this.newVan = {};
    // add contact to contacts list
    // clear inputs
  }

}






 