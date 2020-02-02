import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:Object;
  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getUsers().subscribe(data=>{
      console.log(this.users = data);
      
    });
  }

}
