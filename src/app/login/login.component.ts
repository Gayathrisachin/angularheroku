import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
// import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  authForm: FormGroup;
  isSubmitted  =  false;
    invalidLogin: boolean = false;
  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  // private authService : AuthenticationService,
 
  // private toastr: ToastrService
  ) { }
   
  ngOnInit() {
    this.authForm  =  this.formBuilder.group({
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', Validators.required]
  });
 
}


logIn(){
  
this.isSubmitted = true;
    if(this.authForm.invalid){
      return;
    }
    if(this.authForm.controls.email.value === 'admin@gmail.com' && this.authForm.controls.password.value === 'admin') {
    // this.authService.logIn(this.authForm.value);
    this.router.navigate(['create']);
}
else{
  this.invalidLogin=true;
}
}
}