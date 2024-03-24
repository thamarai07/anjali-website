
export interface CourseContentTypeing  {
    CourseContent : {
    id: number,
    courseTitle : string,
    iso : string,
    image : string,
    Slogan : string,
    Introduction: any,
    ScopeofCourseContent : string,
    CourseIcon : any,
    courseId : string,
    ScopeofCourse: 
        {
            id :  number,
            scope :string
        }[],
     CareerProspectsJobRoles: 
        {
            id : number,
            jobrole : string
        }[],
    CareerProspectsJobRolesContent : string,
    IdealFor : 
        {
            id : number,
            ideal : string,
        }[],
    BenefitsoftheCourse : 
        {
            id : number,
            Benefit : string
        }[],
    

    }

}
