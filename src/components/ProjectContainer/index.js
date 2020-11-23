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
    title :"Employee Management system",
    deployed :"https://drive.google.com/file/d/1OQMRRwzNPcQeWAARzk0grEq9WAVYsfXl/view",
    github :"https://github.com/vsatyakavya/Employee_Tracker"
 },


 {
    id : 3,
    title :"GetMeOutOfHere",
    deployed :"https://drop-g.github.io/GetMeOutOfHereApp/",
    github :"https://github.com/vsatyakavya/GetMeOutOfHereApp"
 },
 {
    id : 4,
    title :"Quiz Game",
    deployed :"https://vsatyakavya.github.io/QuizGame.github.io/.",
    github :"https://github.com/vsatyakavya/QuizGame.github.io"
 },
 {
    id : 5,
    title :" Password Generator",
    deployed :"https://vsatyakavya.github.io/PasswordGenerator.github.io/",
    github :"https://github.com/vsatyakavya/PasswordGenerator.github.io"
 }

];


function ProjectContainer(){
    return <Project project = {projects} />
}

export default ProjectContainer;



