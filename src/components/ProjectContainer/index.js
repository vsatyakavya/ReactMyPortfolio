import React from "react"
import Project from "../../pages/Project.js"
import login from '../../Assets/login.png'; 

const projects =[
   { id :1,
      title : "Employee Directory",
      deployed: "https://vsatyakavya.github.io/EmployeeDirectory/",
      github:"https://github.com/vsatyakavya/EmployeeDirectory"
   
    },
    {
      id :2,
      title :"Budget Tracker",
      deployed:"https://whispering-mesa-23895.herokuapp.com/",
      github:"https://github.com/vsatyakavya/BudgetTracker"
   },
{
 id : 3,
 title :"Fur Family",
 deployed : "https://fur-family-34.herokuapp.com/",
 github :"https://github.com/vsatyakavya/FurFamily",
 image : {login}
},



 {
    id : 4,
    title :"GetMeOutOfHere",
    deployed :"https://drop-g.github.io/GetMeOutOfHereApp/",
    github :"https://github.com/vsatyakavya/GetMeOutOfHereApp"
 },
 {
    id : 5,
    title :"Quiz Game",
    deployed :"https://vsatyakavya.github.io/QuizGame.github.io/.",
    github :"https://github.com/vsatyakavya/QuizGame.github.io"
 },
 {
    id : 6,
    title :" Password Generator",
    deployed :"https://vsatyakavya.github.io/PasswordGenerator.github.io/",
    github :"https://github.com/vsatyakavya/PasswordGenerator.github.io"
 },

 { id :7,
   title : "Weather Dashboard",
   deployed: "https://vsatyakavya.github.io/WeatherDashBoard.github.io/Develop",
   github:"https://github.com/vsatyakavya/WeatherDashBoard.github.io"

 }


];


function ProjectContainer(){
    return <Project project = {projects} />
}

export default ProjectContainer;



