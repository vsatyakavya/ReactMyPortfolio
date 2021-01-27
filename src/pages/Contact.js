import React from "react"
import Row from "../components/Row"
import Container from "../components/Container"
import Col from "../components/Col"
import resume from "../Assets/resume.pdf";
const styles ={
    flex:{
        display: "flex",
        alignItems:" center",
        minHeight: "24px",
        width:"50%",
        marginLeft:0

    }
  

}

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
                <div class="col-sm-10 " style={{boxSizing:"borderBox", padding:"58px",display: "flex",flexDirection :"column",alignItems: "center"}}>
                    <h3 style={styles.flex}>Contact Information</h3>
                    <p style={styles.flex}><i class="fa fa-file" style={{ fontSize: "50px", color: "green" }}> </i>
                        <a href={resume} target="blank" style={{ color: "white", fontSize: "25px",marginLeft:"5px"}}> Resume</a></p>

                    <p style={styles.flex}><i class="fa fa-envelope-square" style={{ fontSize: "55px", color: "red" }}>  </i>
                        <a href="mailto:satyakavya24@gmail.com" target="blank" style={{ color: "white", fontSize: "25px",marginLeft:"5px"}}>  Gmail</a></p>

                    <p style={styles.flex}><i class="fa fa-github-square" style={{ fontSize: "50px", color: "black" }}></i>
                        <a href="https://github.com/vsatyakavya" target="blank" style={{ color: "white", fontSize: "25px",marginLeft:"5px" }}>   Github</a></p>
                    <p style={styles.flex}><i class="fa fa-linkedin-square" style={{ fontSize: "50px", color: "blue" }}></i>
                        <a href="https://www.linkedin.com/in/satyakavyavarri/" target="blank" style={{ color: "white", fontSize: "25px",marginLeft:"5px"}} >  Linkedin</a></p>
                </div>
                {/* </Col> */}
            </Row>
        </Container>

    )




}

export default Contact;

