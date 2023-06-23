import React from "react";

let DisplayImage=({images})=>{
    console.log(images)
    return(
        <div className="cont">
            {images.map((el,indexd)=>{
                return(
                    <div className="box" key={indexd}>
                        <img  src={el.urls.small} alt={el.alt_description}/>
                        <p className="description">{el.alt_description}.</p>
                    </div>
                )
            })}
        </div>
    )
}
export default DisplayImage;