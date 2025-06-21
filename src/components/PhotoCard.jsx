import React from "react";
import "./PhotoCard.css";

function PhotoCard({image, title, description}){
    return(
        <div className="photo-card">
            <img src={image} alt="사진" className="photo-img"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="photo-action">
                <button>view</button>
                <button>edit</button>
            </div>
        </div>
    )

}

export default PhotoCard