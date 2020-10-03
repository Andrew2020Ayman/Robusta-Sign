import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    private formatErrors(error: any) {
        return throwError(error.error);
      }

      get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`, { params })
          .pipe(catchError(this.formatErrors));
        } 


      post(path: string, body: Object): Observable<any> {

        console.log(`${environment.api_url}${path}`);
        
        return this.http.post(
          `${environment.api_url}${path}`,
          function(res){        
                  res.header("Access-Control-Allow-Origin", "*");
                  res.header("Access-Control-Allow-Headers", "X-Requested-With");
                },
          body,
          
        ).pipe(catchError(this.formatErrors));
      }
      
}