import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../_models/project';

const apiUrl='http://localhost:12693/projects/';

@Injectable({ providedIn: 'root' })

export class ProjectService{
    constructor(private http: HttpClient) { }

    getAllProject(){
        return this.http.get<Project[]>(apiUrl);
    }
    addProject(project: any) {
        return this.http.post(apiUrl+'addproject', project);
    }
}

