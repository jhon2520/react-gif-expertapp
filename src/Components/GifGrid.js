import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
// import getGifs from "../helpers/getGifs";
import GifGridItem from "./GifGridItem"

const GifGrid = ({category}) =>{


    const {data,loading} = useFetchGifs(category);

    return(
        <>
            <h3 className="animate__animated animate__bounceInLeft">{category}</h3>

            {loading && <p>Cargando...</p>}

            <div className="card-grid">
                    {
                        data.map((img)=>{
                            return(
                                <>
                                    <GifGridItem 
                                    key={img.id}
                                    img={img}
                                    />
                                </>
                            );
                        })
                    }
            </div>
        </>
    )
}

export{
    GifGrid as default
}