import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/core/models';
import { ToastrService } from "ngx-toastr";
import { ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../../SharedStyles/Auth_style.css']
})
export class LoginComponent implements OnInit {

  model : Login;
  logBool =false;
  loading = false;
  config;
  

  constructor(
    public authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.model = {email:"" ,password:""};
    this.config = {
      backdropBorderRadius: "3px",
      backdropBackgroundColour: "#rgb(255, 255, 255,0.5)",
      animationType: ngxLoadingAnimationTypes.circleSwish,
      primaryColour:"#009dff",
      fullScreenBackdrop: true
    };
  }

  onSubmit(form: NgForm){
    this.loading = true;
        this.authenticationService.login(this.model).subscribe(
            res => {
              this.loading = false;
              this.toastr.success('Login Successfully');
              this.logBool = true;

            },
            error => {
               this.toastr.error('Login Failed');
               this.loading = false;
             }
           ); 
      }
}
