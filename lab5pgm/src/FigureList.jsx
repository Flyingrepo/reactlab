import { useState } from "react"; 
import BasicFigure from "./BasicFigure"; 
import "./FigureList.css"; // Import CSS for styling 
const initialImages = [ 
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",  caption: "Image 1" }, 
    { src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",  caption: "Image 2" }, 
    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",  caption: "Image 3" } 
]; 
const FigureList = () => { 
    const [images, setImages] = useState(initialImages); 
    const addImage = () => { 
        const randomId = Math.floor(Math.random() * 1000); 
        const newImage = { 
            src: `https://picsum.photos/400/300?random=${randomId}`, caption: `Image ${images.length + 1}` 
        }; 
        setImages([...images, newImage]); 
    }; 
const removeImage = (index) => { 
    setImages(images.filter((_, i) => i !== index)); 
}; 
return ( 
    <div className="container"> 
        <h1>Dynamic Image Gallery</h1> 
        <div className="buttons"> 
            <button onClick={addImage}>Add Image</button> 
        </div> 
        <div className="gallery"> 
            {images.map((image, index) => ( 
                <BasicFigure key={index} src={image.src} caption={image.caption} onRemove={() => removeImage(index)} /> 
            ))} 
        </div> 
    </div> 
    ); 
}; 
export default FigureList;
