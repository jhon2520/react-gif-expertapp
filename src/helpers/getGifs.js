import React from "react";

const getGifs = async (category) =>{
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bjLvGacSfII1RsXBKH8DxpbcxKgQxQ0c&q=${encodeURI(category)}&limit=20`;
    const respuesta = await fetch(url);
    const data = await respuesta.json();


    const gifs = data.data.map((img)=>{
        return{
            id: img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}

export{
    getGifs as default
}