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
                            <h5>Satya kavya</h5>
                            <p>I have done my under graduation in computer Science.Now I'm a certified Full-Stack web Developer. 
                                I have learned so many new technologies and programming languages in UT Austin Coding BootCamp.
                                I'm looking forward to start my carrer as a junior full-stack web developer.
                                My dream is to work in software industry to become a great full-stack web developer.
                            I like to play ping pong, carroms and board games like sequence.</p>
                            <h6>
                            <li><strong>Resume:   </strong> <a href={resume}>satyakavyavarri</a></li>
                            <li><strong>Email Address:</strong> <a href="mailto:satyakavya24@gmail.com">satyakavya24@gmail.com</a></li>
                            <li><strong>GithubLink:</strong> <a href="https://github.com/vsatyakavya">Github</a></li>
                            <li><strong>Linkedin Link:</strong> <a href="https://www.linkedin.com/in/satyakavyavarri/">linkedin</a></li>
                            </h6>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default About;

