import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = {Firstname: '', Lastname: '', Email: '', ProfileImg: '', CollegeName: '', MobileNo: '', University: '', UPIId: ''
  , ProgrammingSkill: '', City: '', AboutYourSelf: '', EmployerName: '', PaytmNumber: ''};
  loading = false;
  submitted = false;
  successMessage: string;
  errorMessage: string;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router,
              private alertService: AlertService) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  MakeRegistration(registerForm) {
  this.loading = true;
  this.userService.register(this.register).subscribe(
      data => {
        this.alertService.success('Registration successful', true);
        this.successMessage = 'Your registration has been done successfully';
        // this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error);
        this.errorMessage = 'Registration failed';
        this.loading = false;
    });
  }
}
