import { DataServiceService } from './../../service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  private userData={
    name:'',
    email:'',
    password:'',
  }
  private error="";
  constructor(private _dataService:DataServiceService,private router:Router) { }

  ngOnInit() {
  }
  submit(){
    if(
      this.userData.name.trim() &&
      this.userData.email.trim() &&
      this.userData.password.trim()
    ){
      this._dataService.signUp(this.userData).then(data=>{
        if(data['status']){
          this.router.navigate(['login']).then(data=>{
            console.log('navigation success');
          })
        }else{
          this.error=data['error'];
        }
      })
    }
    else{
      this.error="Make Sure the Name , Email , Password are filled";
    }
  }
  login(){
    this.router.navigate(['login']);
  }

}
