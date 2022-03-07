import React,{useState} from "react";
import "../index.css"


const AddCategory=({setcategorias})=>{

    const [inputValue,setinputValue] = useState("")

    const handleIpuntChange = (e) =>{
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
            if(inputValue.trim().length > 2){
                setcategorias((cats)=>[inputValue,...cats])
                setinputValue("")
            }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                value={inputValue}
                onChange={handleIpuntChange}
            />
        </form>
    )

}


export{
    AddCategory as default
}