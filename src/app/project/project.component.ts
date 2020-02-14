import  {Component, OnInit, OnDestroy,} from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-project',
    templateUrl:'./project.component.html',
    styleUrls:['./project.component.css']
})

export class ProjectComponent implements OnInit,OnDestroy {
    loading = true;
    currentUserSubscription: Subscription;
    users: User[];
    constructor(private userService: UserService){}
    ngOnInit(){
        this.loadAllUsers();
    }
    private loadAllUsers() {
    this.loading = true;
    this.userService.getAll().subscribe(users => {
        this.loading = false;
        this.users = users;
    });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        if(this.currentUserSubscription){
        this.currentUserSubscription.unsubscribe();
        }
    }
}