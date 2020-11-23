import React from "react"
import login from '../Assets/login.png'; 
import petform from '../Assets/petform.png'; 

import videos from '../Assets/videos.png'; 
import gmoh from '../Assets/gmoh.png'; 

import mapandplaces from '../Assets/mapandplaces.png'; 
import MyTeam from '../Assets/MyTeam.png'; 

import quiz from '../Assets/quiz.png'; 
import weather from '../Assets/weather.png'; 

import passwordGenerator from '../Assets/passwordGenerator.png'; 
import dayplanner from '../Assets/dayplanner.png'; 



function Portfolio() {
    return (
        <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Portfolio</h1>
                <img src={login} class="img-fluid" alt="login" />
                <img src={petform} class="img-fluid" alt ="petform" />
                <img src={videos} class="img-fluid" alt="videos page" /><hr />
                <img src={gmoh} class="img-fluid" alt="welcome page" />
                <img src={mapandplaces} class="img-fluid" alt="mapandplaces" /><hr />
                <img src={MyTeam} class="img-fluid" alt="team profiles" /><hr />
                <h1 >QUIZ GAME</h1>
                <img src={quiz} class="img-fluid" alt="quiz" /><hr />
                <img src={weather} class="img-fluid" alt="weather dashboard" /><hr />
                <img src={passwordGenerator} class="img-fluid" alt="password Generator" /><hr />
                <img src={dayplanner} class="img-fluid" alt="mypicture" /><hr />
                
            </div>
        </div>
    </div>
    )

}

export default Portfolio;

