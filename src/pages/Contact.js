import React from "react"
import Row from "../components/Row"
import Container from "../components/Container"
import Col from "../components/Col"
import resume from "../Assets/resume.pdf";
const styles = {
    //align contact details to center using display flex//
    flex: {
        display: "flex",
        alignItems: " center",
        minHeight: "24px",
         width: "40%",
        marginLeft: 0,


    },

    word:{
        color: "white", 
        fontSize: "25px",
         marginLeft: "5px" ,

    }


}

function Contact(props) {
    return (
        <Container>
            <Row>
                {/* <Col size =" offset-3 md-9"> */}
                <div class="col-sm-10 " 
                style={{ boxSizing: "border-box", paddingTop: "30px",paddingBottom:"200px", display: "flex", flexDirection: "column",justifyContent : "center", alignItems: "center",width :"50%"}}
                >
                
                    <h3 style={styles.flex}>Contact Information</h3>
                    <p style={styles.flex}><i class="fa fa-file" style={{ fontSize: "50px", color: "green" }}> </i>
                        <a href={resume} target="blank" style={ styles.word}> Resume</a></p>

                    <p style={styles.flex}><i class="fa fa-envelope-square" style={{ fontSize: "55px", color: "red" }}>  </i>
                        <a href="mailto:satyakavya24@gmail.com" target="blank" style={styles.word}>  Gmail</a></p>

                    <p style={styles.flex}><i class="fa fa-github-square" style={{ fontSize: "50px", color: "black" }}></i>
                        <a href="https://github.com/vsatyakavya" target="blank" style={styles.word}>   Github</a></p>
                    <p style={styles.flex}><i class="fa fa-linkedin-square" style={{ fontSize: "50px", color: "blue" }}></i>
                        <a href="https://www.linkedin.com/in/satyakavyavarri/" target="blank" style={styles.word} >  Linkedin</a></p>
                </div>
            </Row>
        </Container>

    )




}

export default Contact;

