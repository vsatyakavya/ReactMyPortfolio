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
    title :"Employee Management system",
    deployed :"https://drive.google.com/file/d/16eG2Fy_pLnbGj2lyrGEt2i30ql3v7jYo/view",
    github :"https://github.com/vsatyakavya/Employee_Tracker"
 },
 {
    id : 4,
    title :"Employee Management system",
    deployed :"https://drive.google.com/file/d/16eG2Fy_pLnbGj2lyrGEt2i30ql3v7jYo/view",
    github :"https://github.com/vsatyakavya/Employee_Tracker"
 },
 {
    id : 5,
    title :"Employee Management system",
    deployed :"https://drive.google.com/file/d/16eG2Fy_pLnbGj2lyrGEt2i30ql3v7jYo/view",
    github :"https://github.com/vsatyakavya/Employee_Tracker"
 },
 {
    id : 6,
    title :"Employee Management system",
    deployed :"https://drive.google.com/file/d/16eG2Fy_pLnbGj2lyrGEt2i30ql3v7jYo/view",
    github :"https://github.com/vsatyakavya/Employee_Tracker"
 },
 {
    id : 7,
    title :"Employee Management system",
    deployed :"https://drive.google.com/file/d/16eG2Fy_pLnbGj2lyrGEt2i30ql3v7jYo/view",
    github :"https://github.com/vsatyakavya/Employee_Tracker"
 },
 {
    id : 8,
    title :"Employee Management system",
    deployed :"https://drive.google.com/file/d/16eG2Fy_pLnbGj2lyrGEt2i30ql3v7jYo/view",
    github :"https://github.com/vsatyakavya/Employee_Tracker"
 },
];


function ProjectContainer(){
    return <Project project = {projects} />
}

export default ProjectContainer;



