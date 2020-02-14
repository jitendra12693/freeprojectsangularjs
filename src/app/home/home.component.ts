import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../_models/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy  {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(
    private authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    if(this.currentUserSubscription){
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
    }
}


}
