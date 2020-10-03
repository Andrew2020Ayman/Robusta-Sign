import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './services/authentication.service';
import { ApiService } from './services/api.service';


@NgModule({
  imports: [CommonModule],
  providers: [
   
    ApiService,
    AuthenticationService
  ],
  declarations: [],
  exports: []
})
export class CoreModule {}
