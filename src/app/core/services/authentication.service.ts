import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map} from 'rxjs/operators';
import { ApiService } from './api.service';
import { Login,Register } from '../models';


@Injectable()
export class AuthenticationService  implements OnInit{

  constructor(
    private apiService: ApiService,
    ) {}

  ngOnInit(){}
  
  login(login:Login): Observable<any> {
     return this.apiService
      .post('/auth/login',login)
      .pipe(map(data=>data)); 
  } 
register(register:Register):Observable<any>{
    return this.apiService
    .post('/auth/register',register)
    .pipe(map(data=>data));
  }

}
