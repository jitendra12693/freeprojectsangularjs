import { Component, OnInit } from "@angular/core";
import { ProjectService } from '../_services/project.service';

@Component({
    selector:'app-myproject',
    templateUrl:'./myproject.component.html',
    styleUrls:['./myproject.component.css']
})

export class MyProjectComponent implements OnInit{
    projectFileSize:number;
    reportFileSize:number;
    projectDetails={ProjectName:'',ProjectTags:'',ProjectPlatform:'',ProgrammingLanguage:'',IDETool:'',Database:'',
    ProjectType:'',ProjectSourceCode:'',ProjectReport:'',ProjectDescription:'',ProjectImpStep:''};
    successMessage:string;
    errorMessage:string;
    
    constructor(private projectService:ProjectService) {}
    ngOnInit(){}

    AddProject(){
        if(this.validateFileSize(this.projectFileSize)){
            alert('File size should be less than 10 MB');
            return false;
        }else if(this.validateFileSize(this.reportFileSize)){
            alert('Report file size should be less than 10 MB');
            return false;
        }else{
            this.projectService.addProject(this.projectDetails).subscribe(
            data => {
                this.successMessage="Your registration has been done successfully";
                //this.router.navigate(['/login']);
            },
            error => {
                this.errorMessage="Registration failed";
            });
        }
    }

    projectSourceFileSize(fileEvent: any){
        const file = fileEvent.target.files[0];
        if(file.size/(1024*1024)>10){
            fileEvent.target.file=null;
            this.projectFileSize=file.size/(1024*1024);
            console.log('size', file.size/(1024*1024));
        }else{
            this.projectFileSize=file.size/(1024*1024);
            console.log('size', file.size/(1024*1024));
        }
    }

    projectReportFileSize(fileEvent: any){
        const file = fileEvent.target.files[0];
        if(file.size/(1024*1024)>10){
            this.reportFileSize=file.size/(1024*1024);
            console.log('size', file.size/(1024*1024));
        }else{
            this.reportFileSize=file.size/(1024*1024);
        }
    }

    validateFileSize(size:number){
        if(size>10){
            return true;
        }else{
            return false;
        }
    }
}