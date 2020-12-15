import React from "react"
import Project from "../../pages/Project.js"
import petform from '../../Assets/petform.png';
import mapandplaces from "../../Assets/mapandplaces.png"
import passwordGenerator from "../../Assets/passwordGenerator.png"
import quiz from "../../Assets/quiz.png"
import weather from "../../Assets/weather.png"
import employeelist from "../../Assets/employeelistcrop2.png"
// import graph from "../../Assets/graph.png"





const projects = [
   {
      id: 1,
      title: "Employee Directory",
      deployed: "https://vsatyakavya.github.io/EmployeeDirectory/",
      github: "https://github.com/vsatyakavya/EmployeeDirectory",
      image: employeelist


   },

   {
      id: 2,
      title: "Fur Family",
      deployed: "https://fur-family-34.herokuapp.com/",
      github: "https://github.com/vsatyakavya/FurFamily",
      image: petform
   },



   {
      id: 3,
      title: "GetMeOutOfHere",
      deployed: "https://drop-g.github.io/GetMeOutOfHereApp/",
      github: "https://github.com/vsatyakavya/GetMeOutOfHereApp",
      image: mapandplaces

   },
   {
      id: 4,
      title: "Quiz Game",
      deployed: "https://vsatyakavya.github.io/QuizGame.github.io/.",
      github: "https://github.com/vsatyakavya/QuizGame.github.io",
      image: quiz

   },
   {
      id: 5,
      title: " Password Generator",
      deployed: "https://vsatyakavya.github.io/PasswordGenerator.github.io/",
      github: "https://github.com/vsatyakavya/PasswordGenerator.github.io",
      image: passwordGenerator

   },

   {
      id: 6,
      title: "Weather Dashboard",
      deployed: "https://vsatyakavya.github.io/WeatherDashBoard.github.io/Develop",
      github: "https://github.com/vsatyakavya/WeatherDashBoard.github.io",
      image: weather


   }


];


function ProjectContainer() {
   return <Project project={projects} />
}

export default ProjectContainer;



