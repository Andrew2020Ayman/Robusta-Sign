import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/core/models';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../../SharedStyles/Auth_style.css']
})
export class LoginComponent implements OnInit {

  model : Login;
  logBool =false;
  constructor(
    public authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.model = {email:"" ,password:""};
  }

  onSubmit(form: NgForm){
        this.authenticationService.login(this.model).subscribe(
            res => {
              this.toastr.success('Login Successfully');
              this.logBool = true;
            },
            error => {
               this.toastr.error('Login Failed');
             }
           ); 
      }
}
