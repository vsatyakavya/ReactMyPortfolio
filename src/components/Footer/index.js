import React from "react"

const styles ={
    foot :{
        background: "gray",
        display :"flex",
        justifyContent : "center",
        padding : 10
    }
}
function Footer(){
    return (
        <footer className="fixed-bottom" style ={styles.foot}>
        <small>@copyright2020</small>
    </footer>
    )
}
export default Footer


{/* <nav class="navbar fixed-bottom" style="background-color: gray;justify-content: center;">
<small>@copyright2020</small>
</nav> */}