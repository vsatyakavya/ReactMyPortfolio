import React from "react"
import Row from "../components/Row"
import Container from "../components/Container"
import Col from "../components/Col"



function Project(props){
    return (
        <Container>
        <Row>
            <Col size="md-10">
                <Row>
                    <Col size="md-10" >
                        <h1 style={{textAlign :"center"}} id="aboutme" >Projects Details</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <ol className="list" >
                            {props.project.map(item =>(
                                <div>
                                 <ul>
                                  <li className="list-group" key={item.id} style={{fontSize : 30}}>{item.title}</li>
                                 <li className="list-group"><a href={item.deployed}>Deployed Version</a></li>
                                 <li className="list-group"><a href={item.github}>Github Repository</a></li>
 
                             </ul>
                             </div>

                            ))}
                           

                

                        </ol>

                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    )
    
}

export default Project;