import React, { useContext } from "react";
import UserContext from "./userContext";

function ChildComponent(){

    const {name,age}=useContext(UserContext);
    return(
        <div className='rightDiv'>

        <h2>Registered Information: </h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>

      </div>
    );
}

export default ChildComponent;