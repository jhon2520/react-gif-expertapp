import React,{useState} from "react"
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp =()=>{



    const [categorias, setcategorias] = useState(["Naruto"]);

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setcategorias={setcategorias}/>
            <hr/>
            <ol>
                {
                    categorias.map((category)=>{
                        return(
                            <GifGrid 
                            key={category} 
                            category={category}
                            />
                        )
                    })
                }
            </ol>

        </>
    );
}


export{
    GifExpertApp as default
}