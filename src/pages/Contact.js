import React from "react"
import Row from "../components/Row"
import Container from "../components/Container"
import Col from "../components/Col"
import resume from "../Assets/resume.pdf";


function Contact(props) {
    return (
        <Container>
            {/* <Row>
                <Col size="md-9">
                    <Col size="md-12">
                        <h1>Contact</h1>
                        <hr />
                    </Col>
                    <Col size="md-6">
                        {/* <form>
                            <div class="form-group">
                                <label for="formGroupExampleInput">Name</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="FullName"
                                    required />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    placeholder="name@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    required />
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-info">Submit</button>
                            <h1>Hello</h1>
                            
                                <i class="fab fa-linkedin"></i>
                                <i class="fa fa-car"></i>
                                <i class="fa fa-linkedin"></i>

                            
                        </form> */}

                    {/* </Col>
                </Col>
            </Row> */}
            <Row>
                {/* <Col size =" offset-3 md-9"> */}
                <div class="col-sm-10 ">
                    <h1>Contact Information</h1>
     <p><i class="fa fa-file" style={{fontSize:"50px",color: "green"}}></i>
 <a href={resume}  target="blank" style= {{color :"white", fontSize : "25px"}}>    satyakavyavarri(resume)</a></p>

 <p><i class="fa fa-envelope-square" style={{fontSize:"55px",color:"red"}}></i>
 <a href ="mailto:satyakavya24@gmail.com" target="blank" style= {{color :"white", fontSize : "25px"}}>  satyakavya24@gmail.com</a></p>

           <p><i class="fa fa-github-square" style={{fontSize:"50px",color: "black"}}></i>
           <a href="https://github.com/vsatyakavya" target="blank"  style= {{color :"white", fontSize : "25px"}}>  Github</a></p>
            <p><i class="fa fa-linkedin-square" style={{fontSize : "50px",color : "blue"}}></i>
            <a href="https://www.linkedin.com/in/satyakavyavarri/" target="blank" style= {{color :"white", fontSize : "25px"}} >  Linkedin</a></p>
            </div>
            {/* </Col> */}
            </Row>
        </Container>
        
    )




}

export default Contact;

