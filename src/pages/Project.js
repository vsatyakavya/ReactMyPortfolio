import React from "react"
import Row from "../components/Row"
import Container from "../components/Container"
import Col from "../components/Col";

const styles ={
    img:{
        height:"200px",
        width:"100%",
        borderRadius : 10,
        boxShadow: "15px 15px 10px grey",
        

    },
    test: {
        // height: "180px",
        overflow: "hidden",
        marginBottom:"10px"
        // borderRadius: "10px"
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
                <Row>
                    <Col size="md-12">
                        <ol className="list" >
                            {props.project.map(item =>(
                                <Row>

                                <Col size="md-6">
                                <div className="test" style={styles.test}>

                                <a href={item.deployed} target="_blank"><img src={item.image} alt="satyakavya" style={styles.img} /></a>
                                </div>

                                </Col>
                                <Col size="md-6">
                                    {/* <div> */}
                                 <ul style={{marginLeft:0,padding :0}}>
                                  <li className="list-group" key={item.id} style={{fontSize : 25,fontWeight: "bold", color : "white"}}>{item.title}</li>
                                 {/* <li className="list-group"><a href={item.deployed}>Deployed VersionDeployed VersionDeployed VersionDeployed VersionDeployed VersionDeployed Version</a></li> */}
                                 <li className="list-group" ><a href={item.github} target="blank" style={{color:"white",textDecoration : "underline"}}>Github Repository</a></li>
                                 <li className="list-group" style={{color:"white"}}>{item.description}</li>
                                 <h6 style={{color : "#00fff3", textDecoration : "underline overline",marginTop : 20,marginBottom:"20px"}}>Click on the image to experience the app</h6>

 
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