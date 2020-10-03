import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map} from 'rxjs/operators';
import { ApiService } from './api.service';
import { HttpResponse, HttpErrorResponse, } from '@angular/common/http';
import { Login,Register } from '../models';


@Injectable()
export class AuthenticationService  implements OnInit{

  constructor(
    private apiService: ApiService,
    ) {}

  ngOnInit(){
 
  }
  
  login(login:Login): Observable<any> {
    console.log("login from auth");
     return this.apiService
      .post('/auth/login', login)
      .pipe(map(data=>data)); 
  } 
register(register:Register):Observable<any>{
    return this.apiService
    .post('/auth/register', register )
    .pipe(map(data=>data));
  }
  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  /* getValueOfName(): Observable<string> {
    return this.authName.asObservable();
  } 
  getValueOfBoolAuth(): Observable<boolean> {
    return this.IsLogged.asObservable();
  }
  */

  /* get():Observable<any>{
      return this.apiService.get('/users').pipe(map(data=>{
          console.log(data);
          
      }))
  } */
 
 /*  getUser(refreshToken:any , id:any):Observable<any>{

  let headerDict = {
    'x-access-token' : `${refreshToken}`,
    '_id': `${id}`,
  }
  let headers  = new HttpHeaders(headerDict);
  return this.apiService
  .getHead('/users/login/'+id.toString(), headers )
  .pipe(map(data=>data)); 
} */
 


/* getAccessToken(refreshToken:any , id:any):Observable<any>{

  let headerDict = {
    'x-refresh-token' : `${refreshToken}`,
    '_id': `${id}`,
  }


  let headers  = new HttpHeaders(headerDict);
  

  
  return this.apiService
  .getHead('/userLogin/me/access-token', headers )
  .pipe(map(data=>data)); 
} */

  

 /*  isLoggedIn() {
    // check user is logged
    if(localStorage.getItem("access_token") === null && localStorage.getItem("FirstName")===null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(): void {
    // clear token  from local storage to log user out
    localStorage.removeItem('access_token');
    localStorage.removeItem('FirstName');
    this.setValue( '' , false);
  } */


}
