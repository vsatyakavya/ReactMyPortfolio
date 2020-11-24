import React from "react"
import resume from "../Assets/resume.pdf";
import kavya from "../Assets/kavya.jpg"
import Row from "../components/Row"

function About() {
    return (
        <div class="container">
            <Row>
                <div class="col-md-10">
                    <Row>
                        <div class="col-md-12">
                            <h1 id="aboutme">About Me</h1>
                        </div>
                        </Row>


                       <Row>
                        <div class="col-md-12">
                            <img src={kavya} className=" img-fluid rounded mx-auto d-block rounded-circle" alt="satyakavya"
                            />
                            <h5>Satya kavya</h5>
                            <p>I have done my under graduation in computer Science in India. I have done my college project in
                            vb.net about my college.
                            I have 1 year experience as a computer trainer. I'm a student of UT Austin coding
                            bootcamp.
                                My dream is to work in software industry. My goal is to become a great web developer.</p>
                            <p>I like to play ping pong, carroms and board games like sequence. </p>
                            <li><strong>Resume:   </strong> <a href={resume}>satyakavyavarri</a></li>
                            <li><strong>Email Address:</strong> <a href="mailto:satyakavya24@gmail.com">satyakavya24@gmail.com</a></li>
                            <li><strong>GithubLink:</strong> <a href="https://github.com/vsatyakavya">Github</a></li>
                            <li><strong>Linkedin Link:</strong> <a href="https://www.linkedin.com/in/satyakavyavarri/">linkedin</a></li>
                            <li><strong>Mobile Number:</strong> (512)-986-1095</li>

                        </div>
                    </Row>
                </div>
            </Row>
        </div>
    )

}

export default About;

