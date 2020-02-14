import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDet = {Username: '', Password: ''};
  loading = false;
  submitted = false;
  returnUrl: string;
  data: any;
  errorMessage: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) {
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);

      }
    }

  ngOnInit() {
  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
  }

  MakeLogin(): Observable<boolean> {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginDet === null || this.loginDet === undefined) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.loginDet.Username, this.loginDet.Password)
        .subscribe(
          data => {
              window.location.href = '/home';
              // this.router.navigate([this.returnUrl]);
          },
          error => {
              this.alertService.error(error);
              this.errorMessage = error.error.message;
              this.loading = false;
          });

  }
}
