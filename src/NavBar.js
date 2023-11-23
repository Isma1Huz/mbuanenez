import React from "react";
import Comment from "./Comment";

 function NavBar(props){
    return(
        <>
           <Comment name={props.name}  />
            <h1>Navigation</h1>
            <p>The logo section</p>
        </>
    )
}
export default NavBar
 