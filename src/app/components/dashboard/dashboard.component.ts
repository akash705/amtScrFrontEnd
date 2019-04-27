import { DataServiceService } from './../../service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  uuid="";
  token="";
  constructor(private dataShare:DataServiceService,private router:Router) { 

  }

  ngOnInit() {
    this.uuid = this.dataShare.getUid();
    this.token = this.dataShare.getToken();
  }
  logout(){
    this.dataShare.logout().then(data=>{
      if(data['status']){
        this.router.navigate(['login']);
      }else{
        // false case for error
        alert(data['error']);
        return 0;
      }
    })
  }

}
