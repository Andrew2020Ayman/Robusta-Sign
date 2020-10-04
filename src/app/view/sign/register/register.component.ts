
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/core/models';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ToastrService } from "ngx-toastr";
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../../SharedStyles/Auth_style.css']
})
export class RegisterComponent implements OnInit {

  NewModel : Register ;
  RegBool = false;
  RegName = '';
  loading = false;
  config;

  constructor(
    public authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.NewModel = { name: "" ,username: "", email:"", password : ""}
    this.config = {
      backdropBorderRadius: "3px",
      backdropBackgroundColour: "#rgb(255, 255, 255,0.5)",
      animationType: ngxLoadingAnimationTypes.circleSwish,
      primaryColour:"#009dff",
      fullScreenBackdrop: true
    };
  }

  onReg(form: NgForm){
    this.loading = true;
      this.authenticationService.register(this.NewModel).subscribe(
          res => {
            this.loading = false;
            this.toastr.success('Register Successfully');
             this.RegName = this.NewModel.username;    
             this.RegBool = true;        
          },
          error => {
            this.loading = false;
          this.toastr.error('Register Failed'); 
          }
         );
      }

}
