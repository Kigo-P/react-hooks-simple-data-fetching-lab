// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [image, setImage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    //using useEffect to fetch data from the server
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=> response.json())
        .then(data =>{
            setImage(data.message)
            setIsLoading(true)
        })
    }, [])

    //conditon for the isLoading
    if(!isLoading){
        return <p>Loading...</p>
    }

    return(
        <>
        <img src={image} alt="A Random Dog"/>
        </>
    )
}

export default App