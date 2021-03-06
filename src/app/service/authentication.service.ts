import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = 'https://localhost:7233';

  token ='';

  constructor(private http: HttpClient) { }
  
  //  Everything all in service Package
  // 

  login(user:any){
    this.http.post(this.url+'/tms/login',user).subscribe(
      (data:any) =>{
        console.log(data); 
        localStorage.setItem('token',data.token);
        // console.log("login get token "+ localStorage.getItem('token'))
        this.token = data;
        // location.reload();
      }
    );
  }

  logout(){
    localStorage.clear();
    location.reload();
  }

  register(user:any):Observable<any>{
    return this.http.post(this.url+'/tms/register',user)
  }

  // setToken(mytoken:any){
  //   this.token=mytoken.token;
  // }

  // getToken(){
  //   return this.token;
  // }

}
