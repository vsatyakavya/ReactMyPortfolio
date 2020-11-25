import React from "react"
import login from '../Assets/login.png'; 
import petform from '../Assets/petform.png'; 

import videos from '../Assets/videos.png'; 
import gmoh from '../Assets/gmoh.png'; 

import mapandplaces from '../Assets/mapandplaces.png'; 
import employeeList from '../Assets/employeelist.png'; 

import quiz from '../Assets/quiz.png'; 
import weather from '../Assets/weather.png'; 

import passwordGenerator from '../Assets/passwordGenerator.png'; 
import graph from '../Assets/graph.png'; 
import Row from "../components/Row"
import Container from "../components/Container"
import Col from "../components/Col"

const styles ={
    img:{
        height:250,
        width:400,
        padding:10,
        borderRadius : 10
    }
}


function Portfolio() {
    return (
        <Container>
        <Row>
            <Col size="md-12">
                <h1>Portfolio</h1>
                <img src={login} class="img-fluid" alt="login" style={styles.img} />
                <img src={petform} class="img-fluid" alt ="petform" style={styles.img} />
                <img src={videos} class="img-fluid" alt="videos page" style={styles.img} />
                <img src={gmoh} class="img-fluid" alt="welcome page"style={styles.img} />
                <img src={mapandplaces} class="img-fluid" alt="mapandplaces" style={styles.img} />
                <img src={employeeList} class="img-fluid" alt="login" style={styles.img} />
                <img src={graph} class="img-fluid" alt="login" style={styles.img} />

                <img src={quiz} class="img-fluid" alt="quiz" style={styles.img}/>
                <img src={weather} class="img-fluid" alt="weather dashboard" style={styles.img}/>
                <img src={passwordGenerator} class="img-fluid" alt="password Generator"style={styles.img} />
                
            </Col>
        </Row>
    </Container>
    )

}

export default Portfolio;

