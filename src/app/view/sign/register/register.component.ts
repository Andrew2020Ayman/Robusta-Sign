
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/core/models';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../../SharedStyles/Auth_style.css']
})
export class RegisterComponent implements OnInit {

  NewModel : Register ;
  RegBool = false;
  RegName = '';
  constructor(
    public authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.NewModel = { name: "" ,username: "", email:"", password : ""}
  }

  onReg(form: NgForm){
      this.authenticationService.register(this.NewModel).subscribe(
          res => {
            this.toastr.success('Register Successfully');
             this.RegName = this.NewModel.username;    
             this.RegBool = true;        
          },
          error => {
          this.toastr.error('Register Failed'); 
          }
         );
      }

}
