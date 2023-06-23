import React,{useEffect, useState} from "react";
import axios from "axios";
let apiKey="DFiiUXVxH8w0pjOmPyOIOEieJDLi_FvX1Agqbdr8acM";
let Search_image = ({addImage})=>{
    let [searchImage,setSearchImage]=useState("nature");
    //console.log(process.env.REACT_APP_ACCESS_KEY);

    useEffect(()=>{
        getImage();
    },[])

    function getImage(){
        console.log("hehejb")
        axios.get("https://api.unsplash.com/search/photos",{
            params:{
                client_id:apiKey,//process.env.REACT_APP_ACCESS_KEY,
                query:searchImage
            }
        }).then((respone)=>{
            console.log(respone.data.results);
            addImage(respone.data.results)
        })
        .catch(err=>console.log("errr",err))
    }

     function clearData(){
        setSearchImage("nature");

     }

    return(
        <div className="search">
            <h1>Find Images</h1>
            <input type="text" placeholder="find images" onChange={(e)=>setSearchImage(e.target.value)} value={searchImage}/>
            <button onClick={getImage}>Get Image</button>
            <button onClick={clearData}>Reset</button>
        </div>
    )
}
export default Search_image;