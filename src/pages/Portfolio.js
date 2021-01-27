import React from "react"
import login from '../Assets/login.png';
import home from "../Assets/home.png"
import dayplanner from "../Assets/dayplanner.png"
import gmoh from "../Assets/gmoh.png"
import MyTeam from "../Assets/MyTeam.png"
import videos from "../Assets/videos.png"




import Row from "../components/Row"
import Container from "../components/Container"
import Col from "../components/Col"

//applying  css  effects to images using internal stylesheet
const styles = {
    img: {
        height: 250,
        width: "450px",
        borderRadius: 10,
        margin: 20,
        boxShadow: "10px 10px 5px grey"


    }
}



function Portfolio() {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <h3 style={{textAlign:"center"}}>Some web page interfaces from my projects</h3>

                    <img src={home} class="img-fluid" alt="home" style={styles.img} />
                    <img src={login} class="img-fluid" alt="login" style={styles.img} />
                    <img src={dayplanner} class="img-fluid" alt="home" style={styles.img} />
                    <img src={gmoh} class="img-fluid" alt="home" style={styles.img} />

                    <img src={MyTeam} class="img-fluid" alt="home" style={styles.img} />
                    <img src={videos} class="img-fluid" alt="home" style={styles.img} />

                   </Col>
            </Row>
        </Container >
    )

}

export default Portfolio;

