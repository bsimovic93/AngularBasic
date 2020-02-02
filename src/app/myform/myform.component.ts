import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  public userForm : FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username:['',Validators.maxLength(6)],
      password:''
    })
    this.userForm.valueChanges.subscribe(console.log);
  }

}
