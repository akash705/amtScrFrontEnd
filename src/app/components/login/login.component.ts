import { Router } from '@angular/router';
import { DataServiceService } from './../../service/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private userData={
    email:'',
    password:'',
  }
  private error="";
  constructor(
    private _dataService:DataServiceService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  submit(){
    this._dataService.login(this.userData).then(data=>{
      console.log('data failed',data);
      if(data['status']){
          this.router.navigate(['dashboard']);
      }else{
        this.error=data['error'];
      }
    })
  }
  signUp(){
    this.router.navigate(['signup']);
  }

}
