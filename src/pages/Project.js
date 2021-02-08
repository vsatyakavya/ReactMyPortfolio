import React from "react"
import Row from "../components/Row"
import Container from "../components/Container"
import Col from "../components/Col";
import { findByLabelText } from "@testing-library/react";


const styles = {
    img: {
        height: "350px",
        width: "100%",
        // boxShadow: "15px 15px 10px grey",


    },
    test: {
        overflow: "hidden",
        marginBottom: "30px",

    },
    
    row: {
        display: "flex",
        flexWrap: "wrap",

        // justifyContent: "flex-end"



    }
}




function Project(props) {
    return (
        // <Container>
        <Row>
            <Col size="md-12">
                <Row>
                    <Col size="md-12" >
                        <h1 style={{ textAlign: "center", color: "white" }} id="aboutme" >Projects Details</h1>
                    </Col>
                </Row>
                {/* <ol className="list" > */}
                <div classname="row" style={styles.row}>

                    {props.project.map(item => (

                        <Col size="md-4" >
                            <div class="card text-center" style={styles.test} >
                                <img class="card-img-top" src={item.image} style={styles.img} alt="projects" />
                                <div class="card-body text-center" style={{ backgroundColor: "#eee" }}>
                                    <h4 class="card-title " style={{ color: "blue", textDecoration: "underline" }}>{item.title}</h4>
                                    <p class="card-text">
                                        {item.description}
                                    </p>
                                    <p class="card-text"><strong>Stack</strong></p>
                                    <p class="card-text" >
                                        {item.languages}
                                    </p>
                                    </div>


                                    <div className="card-footer" style={{margin:"0px"}}>
                                        <a href={item.github} target="_blank"><i class="fa fa-github-square fa-2x" style={{ color: "black", marginRight: "20px" }}></i></a>

                                        <a href={item.deployed} target="_blank"><i class="fa fa-link fa-2x" style={{ color: "blue", }}></i></a> </div>
                            </div>

                        </Col>

                    ))}

                </div>




            </Col>
        </Row>
    )

}

export default Project;