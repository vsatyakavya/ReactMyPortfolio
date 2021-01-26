import React from "react"
import resume from "../../Assets/resume.pdf"

const styles = {
    foot: {
        background: "#9198e5",
        display: "flex",
        justifyContent: "center",
        
        padding : 5
    },

}
function Footer() {
    return (
        <footer className="fixed-bottom" style={styles.foot}>
            
                <a href={resume} target="blank"><i class="fa fa-file fa-2x" style={{ color: "blue",marginRight:"20px" }}></i></a>
        
                <a href="https://github.com/vsatyakavya" target="blank"><i class="fa fa-github-square fa-2x" style={{ color: "black"  }}></i></a>
                {/* <a href="your link here"> <i class="fa fa-dribbble fa-4x"></i></a> */}

        </footer>

    )
}
export default Footer


