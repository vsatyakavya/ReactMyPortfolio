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
                        <Col size="md-4">
                            <img src={kavya} className=" img-fluid "  alt="satyakavya"
                            />
                        </Col>
                        <Col size="md-6">
                            <h5>Hello! </h5>
                               <h5> I'm Satya kavya</h5>
                            <p>Welcome to my profile. I live in Austin. I have done my under graduation in computer Science.
                                I have recently done my certification from UT Austin Coding BootCamp as a Full-Stack Web Developer. 
                                I have learned so many new technologies and programming languages like JavaScript, Github, (MERN)MongoDB, Express.js, React, Node.js, HTML, CSS, JQuery, Bootstrap in BootCamp.</p>
                                
                               <p> Now I'm looking forward to start my carrer as a junior full-stack web developer. I’m a quick learner with good problem solving skills and leveraging the skills learnt in 
                                education and applying them wherever applicable.I aspire for a challenging position in an organization, which provides me with a great opportunity to utilize my skills 
                                towards the development of the organization as well as  for my bright future. I like to play ping pong, carroms and board games like sequence.</p>
                            {/* <h6> */}
                            {/* <li><strong>Resume:   </strong> <a href={resume}>satyakavyavarri</a></li>
                            <li><strong>Email Address:</strong> <a href="mailto:satyakavya24@gmail.com">satyakavya24@gmail.com</a></li>
                            <li><strong>GithubLink:</strong> <a href="https://github.com/vsatyakavya">Github</a></li>
                            <li><strong>Linkedin Link:</strong> <a href="https://www.linkedin.com/in/satyakavyavarri/">linkedin</a></li> */}
                            {/* </h6> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default About;
