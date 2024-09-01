import React from "react";
import { useParams } from "react-router-dom";

function Contact(){
    return (
        <>it's Contact page {useParams.userId}</>
    )
}

export default Contact;