import React from "react"
import Project from "../../pages/Project.js"

const projects =[
{
 id : 1,
 title :"Fur Family",
 deployed : "https://fur-family-34.herokuapp.com/",
 github :"https://github.com/vsatyakavya/FurFamily"
},



 {
    id : 2,
    title :"GetMeOutOfHere",
    deployed :"https://drop-g.github.io/GetMeOutOfHereApp/",
    github :"https://github.com/vsatyakavya/GetMeOutOfHereApp"
 },
 {
    id : 3,
    title :"Quiz Game",
    deployed :"https://vsatyakavya.github.io/QuizGame.github.io/.",
    github :"https://github.com/vsatyakavya/QuizGame.github.io"
 },
 {
    id : 4,
    title :" Password Generator",
    deployed :"https://vsatyakavya.github.io/PasswordGenerator.github.io/",
    github :"https://github.com/vsatyakavya/PasswordGenerator.github.io"
 },
 {
    id :5,
    title :"Budget Tracker",
    deployed:"https://whispering-mesa-23895.herokuapp.com/",
    github:"https://github.com/vsatyakavya/BudgetTracker"
 },
 { id :6,
   title : "Employee Directory",
   deployed: "https://vsatyakavya.github.io/EmployeeDirectory/",
   github:"https://github.com/vsatyakavya/EmployeeDirectory"

 }


];


function ProjectContainer(){
    return <Project project = {projects} />
}

export default ProjectContainer;



