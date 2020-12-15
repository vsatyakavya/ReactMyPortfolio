import React from "react"
import Row from "../components/Row"
import Container from "../components/Container"
import Col from "../components/Col";

const styles ={
    img:{
        height:"auto",
        width:"100%",
        borderRadius : 10,
        // margin : 20,
        boxShadow: "10px 10px 5px grey",
        

    },
    test: {
        height: "180px",
        overflow: "hidden",
        marginBottom : "10px",
        borderRadius: "10px"
       }
}

  


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
                <Row style={{marginBpttom : "10px"}}>
                    <Col size="md-12">
                        <ol className="list" >
                            {props.project.map(item =>(
                                <Row>

                                <Col size="md-6">
                                <div className="test" style={styles.test}>

                                <a href={item.deployed} ><img src={item.image} alt="satyakavya" style={styles.img} /></a>
                                </div>

                                </Col>
                                <Col size="md-6">
                                    {/* <div> */}
                                 <ul>
                                  <li className="list-group" key={item.id} style={{fontSize : 25}}>{item.title}</li>
                                 {/* <li className="list-group"><a href={item.deployed}>Deployed VersionDeployed VersionDeployed VersionDeployed VersionDeployed VersionDeployed Version</a></li> */}
                                 <li className="list-group"><a href={item.github}>Github Repository</a></li>
 
                             </ul>
                             {/* </div> */}

                             </Col>
                             </Row>

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