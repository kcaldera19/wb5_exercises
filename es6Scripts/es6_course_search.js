"use strict"

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

console.log("--------All the questions other than Classroom 1--------");

// When does the PROG200 course start?

// used the find method and passed an arrgument, grabing the startDate form the courses
let prog200StartDate = courses.find(findProg200).StartDate;

function findProg200(courses){
    // finding if the courses with the Course Id === to "Prog200"
    return courses.CourseId ==="PROG200";
}
console.log(`${prog200StartDate}`)

console.log('-----------------------------------------------------')




// What is the title of the PROJ500 course?
let prog500Title = courses.find(findProJ500).Title;
function findProJ500(courses){
    return courses.CourseId === "PROJ500";
}
console.log(`${prog500Title}`);

console.log('-----------------------------------------------------')




// What are the titles of the courses that cost $50 or less?

// created a new varibale, then used the filiter method, that takes back a callback function
// the callback function is executed onces for each courses array being passed
let cheapTitleOfCourses = courses.filter(function(course){

    // created a new varibale to convert a string to a number
    const fee = Number(course.Fee);
    // if the fee is less than 50 or equal to
    return fee <= 50;

});
console.log("courses less than or equal 50");
// forEach goes through each course in the array 
cheapTitleOfCourses.forEach(function(course){
    // to diplay which title are affordable
    console.log(course.Title);
})
    
console.log('-----------------------------------------------------')




// What classes meet in "Classroom 1"?
let classroom1Courses = courses.filter(classesClassroom1);

function classesClassroom1(courses){
    return courses.Location === "Classroom 1";
}
console.log(classroom1Courses[0].Title);

console.log('-----------------------------------------------------')

// Different way

function potatoTest(course){
    if(course.CourseId === "PROG200"){
        return true;
    }
    return false;
}
let prog200Course = courses.find(potatoTest)
console.log(`${prog200Course.Title} ${prog200Course.CourseId} ${prog200Course.StartDate}`);


let proj500course = courses.find( (course) => {
    if(course.CourseId === "PROJ500"){
        return true;
    }
    return false;
} )

console.log(`${proj500course.CourseId} ${proj500course.Title} `);


let coursesUnder50 = courses.filter((course) => {
    if(course.Fee <= 50){
        return true;
    }
    return false;
})

coursesUnder50.forEach((course)=>{
    console.log(`${course.Title} is 50 or less`)
});

// for( let i = 0; i< coursesUnder50.length; i++){
//     console.log(`${courses[i].Title} is 50 or less`)
// }


let classroomCourses = courses.filter((course)=>{

    if(course.Location === "Classroom 1"){
        return true;
    }
    return false;
})
classroomCourses.forEach(function (course){
    console.log(`${course.Title} is in classroom 1`)
})