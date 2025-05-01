const BasicFigure=({src,caption,onRemove})=>{
    return(
        <div className="image-card">
            <img src={src} alt="Gallery"/>
            <div className="caption">{caption}</div>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};
export default BasicFigure;
