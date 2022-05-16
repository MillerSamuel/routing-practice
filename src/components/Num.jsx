import React from "react";
import{useParams} from "react-router"



const Num=()=>{
    const {number}=useParams();
    const {col1}=useParams();
    const {col2}=useParams(); 

    return(
        isNaN(number)?
        <h1 style={{color:col1, backgroundColor: col2}}>The Word is: {number}</h1>:
        <h1 style={{color:col1, backgroundColor: col2}}> The number is: {number}</h1>
        
    )
}


export default Num