import React from "react";

let DisplayImage=({images,setPageCount,count})=>{
    console.log(images)
    return(
        <div>

            <div className="cont">
                {images.map((el,indexd)=>{
                    return(
                        <div className="box" key={indexd}>
                            <img  src={el.urls.small} alt={el.alt_description}/>
                        </div>
                    )
                })}
            </div>
            <div>
            <button onClick={()=>setPageCount(count+1)}>See More</button>
            </div>
        </div>    
    )
}
export default DisplayImage;