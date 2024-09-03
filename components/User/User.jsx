import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userId} = useParams();
    return (
        <div>it's user page and user id is -: {userId} </div>
    )
}

export default User; 