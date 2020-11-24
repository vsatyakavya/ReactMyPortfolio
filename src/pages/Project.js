import React from "react"
import Row from "../components/Row"

function Project(props){
    return (
        <div class="container">
        <Row>
            <div class="col-md-10" >
                <Row>
                    <div class="col-md-12">
                        <h1 id="aboutme" >Projects Details</h1>
                    </div>
                </Row>
                <Row>
                    <div class="col-md-12">
                        <ol className="list-group">
                            {props.project.map(item =>(
                                <div>
                                    <ul>
                                 
                                 <li className="list-group-item" key={item.id}>{item.title}</li>
                            
                             
                                 <li className="list-group-item"><a href={item.deployed}>Deployed Version</a></li>
                                 <li className="list-group-item"><a href={item.github}>Github Repository</a></li>
 
                             </ul>
                             </div>

                            ))}
                           

                

                        </ol>

                    </div>
                </Row>
            </div>
        </Row>
    </div>
    )
    
}

export default Project;

