import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = 'https://majesticboy-001-site4.btempurl.com';

  // url = 'https://localhost:7233';

  flag = false;

  token ='';

  constructor(private http: HttpClient, private router:Router) { }
  
  //  Everything all in service Package
  // 

  // Don't forget to change the interceptor
  login(user:any){
    this.http.post(this.url+'/tms/login',user).subscribe(
      (data:any) =>{
        console.log(data); 
        // localStorage.setItem('token',data.token);
        sessionStorage.setItem('token',data.token);
        // console.log("login get token "+ localStorage.getItem('token'))
        this.token = data;
        // location.reload();
      }
    );
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }

  register(user:any):Observable<any>{
    return this.http.post(this.url+'/tms/register',user)
  }

  checkifToken(){
    if(sessionStorage.getItem('token')!=null ){
      return true;
    }
    else{
      return false;
    }
  }
  // setToken(mytoken:any){
  //   this.token=mytoken.token;
  // }

  // getToken(){
  //   return this.token;
  // }

}
