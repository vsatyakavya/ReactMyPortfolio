import React from "react"
import Project from "../../pages/Project.js"
import petform from '../../Assets/petform.png';
import mapandplaces from "../../Assets/mapandplaces.png"
import passwordGenerator from "../../Assets/passwordGenerator.png"
import quiz from "../../Assets/quiz.png"
import weather from "../../Assets/weather.png"
import employeelist from "../../Assets/employeelist.png"
 import thought  from "../../Assets/thought.png"



//contains all the projects details and passing to the projects page//

const projects = [
   {
    id :1 ,
    title : "ThoughtBubble",
    deployed :"https://secret-reaches-35397.herokuapp.com/",
    github : "https://github.com/vsatyakavya/ThoughtBubble",
    description : "This full-stack journal application is a solution to save everyday activities and memories with pictures, and useful for future reference",
   languages:"MERN(MongoDB, Expressjs, React, Nodejs),CSS3 , Bootstrap, Cloudinary, Multer, Neumorphism",
    image : thought


   },

  

   {
      id: 2,
      title: "Fur Family",
      deployed: "https://fur-family-34.herokuapp.com/",
      github: "https://github.com/vsatyakavya/FurFamily",
      description : "A very useful full stack application for pet lovers to save their pet details and activities. User can create personal account, watch grooming and, training videos",
      languages: "HTML5, CSS3, BOOTSTRAP, Javascript, Jquery, Expressjs, Nodejs, ES6, passport, sequelize, MySql",
      image: petform
   },



   {
      id: 3,
      title: "GetMeOutOfHere",
      deployed: "https://drop-g.github.io/GetMeOutOfHereApp/",
      github: "https://github.com/vsatyakavya/GetMeOutOfHereApp",
      description : "An application to save users time to search for nearby places and see the weather conditions of the selected place. So, user can plan according to their interest and helps get out of here.",
      languages:"HTM5L, CSS3, Materialize, Javascript, JQuery, openweather API , mapbox API ",
      image: mapandplaces

   },
   {
      id: 4,
      title: "Employee Directory",
      deployed: "https://vsatyakavya.github.io/EmployeeDirectory/",
      github: "https://github.com/vsatyakavya/EmployeeDirectory",
      description : "A react application to store employee details. User can find the information of a particular employee based on the name, and able to sort all the employees based on their information",
      languages : " React , Bootstrap, axios, css3",
      image: employeelist


   },
   {
      id: 5,
      title: "Quiz Game",
      deployed: "https://vsatyakavya.github.io/QuizGame.github.io/.",
      github: "https://github.com/vsatyakavya/QuizGame.github.io",
      description : "A quiz game to test the users javascript knowledge with multiple questions. User has to answer the questions with in the time and able to save the highscores.",
      languages: "HTML5, CSS3, JavaScript",

      image: quiz

   },
  

   {
      id: 6,
      title: "Weather Dashboard",
      deployed: "https://vsatyakavya.github.io/WeatherDashBoard.github.io/Develop",
      github: "https://github.com/vsatyakavya/WeatherDashBoard.github.io",
      description : "An applcation helps users to plan a day by showing the weather conditions of a particular city and gives 5 days weather forecast ",
      languages: "HTML5, CSS3, JavaScript, JQuery",

      image: weather


   }


];


function ProjectContainer() {
   return <Project project={projects} />
}

export default ProjectContainer;



