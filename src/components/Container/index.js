import React from "react";

const styles ={
   bg :{
     marginTop : 10,
    
     borderRadius : 20,
     padding : 60,
     background :"rgba(161, 157, 157, 0.5)",
     color : "white"
    
   }
}
function Container(props) {
  return <div className="container" style={styles.bg}>{props.children}</div>;
}

export default Container;
