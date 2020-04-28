import React, { useState, useEffect } from "react";
import axios from "axios";

function PhotoList() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then((response) => {
                console.log(response);
                setPhotos(response.data);
            })
            .catch((error) => {
                console.log(`An error occurred: ${error}`);
            });
    }, []);

    return (
        <div className="photos">

        </div>
    )
}

export default PhotoList;