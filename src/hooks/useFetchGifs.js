import { useState,useEffect } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (category) =>{

    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getGifs(category).then((imgs)=>{
            setstate({
                data: imgs,
                loading:false
            })
        })
    },[category])


    return state;

}

export{
    useFetchGifs as default
}