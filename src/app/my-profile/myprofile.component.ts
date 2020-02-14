import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-myprofile',
    templateUrl:'./myprofile.component.html',
    styleUrls:['./myprofile.component.css']
})

export class MyProfileComponent implements OnInit, OnDestroy {
    successMessage:string;
    errorMessage:string;
    //myProfile :User;

    fileData: File = null;
    previewUrl:any = null;
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;
 
    fileProgress(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
        this.preview();
    }

     myProfile= {_id:'',Firstname:'',Lastname:'',Email:'',ProfileImg:'',CollegeName:'',MobileNo:'',University:'',UPIId:''
     ,ProgrammingSkill:'',City:'',AboutYourSelf:'',EmployerName:'',PaytmNumber:''};
    currentUserSubscription: Subscription;
    constructor(private router: Router, 
        private route: ActivatedRoute,
        private userService:UserService) {
        
    }

    ngOnInit() {
        this.getUserDetails(this.route.snapshot.params['id']);
    }

    getUserDetails(id: any) {
        this.userService.getById(id).subscribe((data: any) => {
          this.myProfile=data ;
        });
    }

    ngOnDestroy(): void {
        if(this.currentUserSubscription){
            this.currentUserSubscription.unsubscribe();
        }
    }

    UpdateProfile(){
        this.userService.update(this.myProfile).subscribe(data=>{
            this.successMessage="Your registration has been done successfully";
        },
        error => {
          this.errorMessage=error;
          console.log(this.myProfile);
      });
    }

    preview() {
        // Show preview 
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
          return;
        }
     
        var reader = new FileReader();      
        reader.readAsDataURL(this.fileData); 
        reader.onload = (_event) => { 
          this.previewUrl = reader.result; 
          this.myProfile.ProfileImg =this.previewUrl;
        }
    }
}