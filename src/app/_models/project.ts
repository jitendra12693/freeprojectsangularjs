export class Project{
    _id:string;
    UserId:{ type: String, required: true };
    ProjectName:{ type: String, required: true };
    ProjectNumber:{type:Number};
    ProjectPlatform:{ type: String, required: true };
    ProgrammingLanguage:{ type: String, required: true };
    IDETool:{ type: String, required: true };
    Database :{type:String,required:true};
    ProjectType:{type:String,required:true};
    ProjectSourceCode:{type:String,required:true};
    ProjectReport:{type:String};
    ProjectDescription:{type:String,required:true};
    ProjectImpStep:{type:String,required:false};
    createdDate: { type: Date, default: Date };
}