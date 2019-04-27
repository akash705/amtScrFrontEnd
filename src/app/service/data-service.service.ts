import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data={
    loggedIn:false,
    uuid:'',
    token:"",
  }
  private url="localhost:8080/";
  constructor(private httpClient:HttpClient) {

   }

  signUp(data){
      return new Promise((res,rej)=>{
        this.httpClient.post(this.url+'signUp',{
          params:data,
        }).subscribe((data:Response)=>{
          if(data.status){
            res({status:true});
          }
        })
      })
  }
  login(data){
    return new Promise((res,rej)=>{
      this.httpClient.post(this.url+'login',{
        params:data,
      }).subscribe((data:Response)=>{
        if(data.status){
          this.data.loggedIn= true;
          this.data.uuid=data['uuid'];
          this.data.token = data['token'];
          res({status:true,uid:data['uuid']});
        }
      })
    })
  }
  logout(){
    let httpHeader={
      'authtoken':this.data.token
    }
    return new Promise((res,rej)=>{
      this.httpClient.post(this.url+'logout',{
        headers:httpHeader
      }).subscribe((data:Response)=>{
        this.data.loggedIn=false;
        this.data.token="";
        this.data.uuid="false";
        // always logging out
        res({status:true,error:data['data']})

      },err=>{
        res({status:false,error:err});
      })
    })
  }
  getLoggedInStatus(){
    return this.data.loggedIn;
  }
  getUid(){
    return this.data.uuid;
  }
  getToken(){
    return this.data.token;
  }
}
