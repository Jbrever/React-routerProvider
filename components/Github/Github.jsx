import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

 function Github(){
     let data = useLoaderData();
    //  const [loading , setLoading] = useState(true);
    //  const [data , setApi] = useState([]); 

//    useEffect(()=>{
        // first way to fetch api

        // fetch('https://api.github.com/users/jbrever')
        //    .then(response => response.json())
        //    .then((data) => {
        //      setApi(data);
        //      console.log('ssssssssssssss',data);
        //    })
        //    .catch((error)=> console.log("data fetching error from githup api -: " ,error));
        
        
        // second way to fetch api
    //     let fetchData = async ()=>{
    //         try{
    //             const response = await fetch('https://api.github.com/users/jbrever');
    //             if(response.ok){
    //                 const data = response.json();
    //                 setApi(data);
    //             }
    //         }catch(err){
    //             console.log("data fetching error from githup api -: " , err );
    //         }finally{
    //            setLoading(false);
    //         }
    //     }
    //     fetchData();

    //},[]);
   
    console.log(data , 'hhhhhhh');
    return (
        <>
         <div>it's  {data.login} Github page</div>
         <div>Followers-: {data.followers}</div>
         <div>Following-: {data.following}</div>
        </>
    )
}

export default Github;

export const getInfoGithubApi = async () => {
  const response = await fetch('https://api.github.com/users/jbrever');
  return response.json();
}