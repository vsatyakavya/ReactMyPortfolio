import React from "react"
import resume from "../Assets/resume.pdf";
import kavya from "../Assets/satyakavya.jpg"
import Row from "../components/Row"
import Container from "../components/Container"
import Col from "../components/Col"

function About() {
    return (
        <Container>
            <Row>
                <Col size="md-12" >
                    <Row>
                        <div class="col-md-12">
                            <h1 id="aboutme">About Me</h1>
                        </div>
                    </Row>


                    <Row>
                   {/*embedded an image and content about my information */}
                        <Col size="md-4">
                            <img src={kavya} className=" img-fluid "  alt="satyakavya"
                               style={{marginBottom:"10px"}}/>
                        </Col>
                        <Col size="md-6">
                        
                            <div style={{color :"ivory" ,fontsize:"large",fontFamily:"Arial,Georgia,Times New Roman",fontWeight:"oblique",filter:"brightness(100%)" }}>
                            <h5>Hello! </h5>
                               <h5> I'm Satya kavya Varri</h5>
                            <p>Welcome to my profile. I live in Austin, Texas.I have received a degree in computer Science from CH.S.D.St.Theresa's College, and I have also recently received a Certificate from UT Austin Coding BootCamp as a Full-Stack Web Developer.
                            
                                Skilled in technologies and programming languages like JavaScript, Github, (MERN)MongoDB, Express.js, React, Node.js, HTML5, CSS3, JQuery, MySql, Bootstrap.</p>
                                
                               <p> Now I'm looking forward to starting my career as a full-stack web developer. I’m a quick learner with good problem solving skills and leveraging the skills learnt in 
                                education and applying them wherever applicable.I aspire for a challenging position in an organization, to utilize my skills 
                                towards the development of the organization as well as  for my bright future. I like to play ping pong, carroms and board games like sequence.</p>
                           
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default About;

