import React from "react";
import "../index.css"

const GifGridItem=({img})=>{

    console.log(img.id)
    console.log(img.title)
    console.log(img.url)

    return(
        <div className="Card animate__animated animate__bounceInLeft">
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    );
}

export{
    GifGridItem as default
}