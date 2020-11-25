import React from "react";

const styles ={
   bg :{
     background : "blue",
    
   }
}
function Container(props) {
  return <div className="container"  style ={styles.bg}>{props.children}</div>;
}

export default Container;
