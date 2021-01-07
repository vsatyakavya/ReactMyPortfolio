import React from "react"
import Project from "../../pages/Project.js"
import petform from '../../Assets/petform.png';
import mapandplaces from "../../Assets/mapandplaces.png"
import passwordGenerator from "../../Assets/passwordGenerator.png"
import quiz from "../../Assets/quiz.png"
import weather from "../../Assets/weather.png"
import employeelist from "../../Assets/employeelist.png"
 import thought  from "../../Assets/thought.png"





const projects = [
   {
    id :1 ,
    title : "ThoughtBubble",
    deployed :"https://secret-reaches-35397.herokuapp.com/",
    github : "https://github.com/vsatyakavya/ThoughtBubble",
    description : "This is a full-stack Journal application developed using the MERN tech stack. User can save activities and pictures in to there own account",
    image : thought


   },

   {
      id: 2,
      title: "Employee Directory",
      deployed: "https://vsatyakavya.github.io/EmployeeDirectory/",
      github: "https://github.com/vsatyakavya/EmployeeDirectory",
      description : "This is a react application of Employee details.So, User can have quick access to employee details.",
      image: employeelist


   },

   {
      id: 3,
      title: "Fur Family",
      deployed: "https://fur-family-34.herokuapp.com/",
      github: "https://github.com/vsatyakavya/FurFamily",
      description : "This is a full stack application about pets.This applicatin can be used by any pet lovers to manage their pet details.",

      image: petform
   },



   {
      id: 4,
      title: "GetMeOutOfHere",
      deployed: "https://drop-g.github.io/GetMeOutOfHereApp/",
      github: "https://github.com/vsatyakavya/GetMeOutOfHereApp",
      description : "This is an application to search for nearby places like Lake, Beach, Pool, Zoo,Campsites",

      image: mapandplaces

   },
   {
      id: 5,
      title: "Quiz Game",
      deployed: "https://vsatyakavya.github.io/QuizGame.github.io/.",
      github: "https://github.com/vsatyakavya/QuizGame.github.io",
      description : "This is a quiz game with multiple questions with timer, show high score and user can save the name ",

      image: quiz

   },
   {
      id: 6,
      title: " Password Generator",
      deployed: "https://vsatyakavya.github.io/PasswordGenerator.github.io/",
      github: "https://github.com/vsatyakavya/PasswordGenerator.github.io",
      description : "This application can generate a password which is a combination of numbers, lowerCase, UpperCase and special characters based on the given length from the user.",

      image: passwordGenerator

   },

   {
      id: 7,
      title: "Weather Dashboard",
      deployed: "https://vsatyakavya.github.io/WeatherDashBoard.github.io/Develop",
      github: "https://github.com/vsatyakavya/WeatherDashBoard.github.io",
      description : "This applcation shows the weather details of the city and gives 5 days weather forecast ",

      image: weather


   }


];


function ProjectContainer() {
   return <Project project={projects} />
}

export default ProjectContainer;



