import React, { useState } from "react";
function ImagesComponent(props) {
    const numOfImages = React.Children.count(props.children);
    const images = React.Children.toArray(props.children);
    const [numOfPage, setNumOfPage] = useState(0);
    function ShowImg(index) {
        return (
            <>{images[index]}</>
        )
    }
    return (
        <>
            {ShowImg(numOfPage)}
            <br></br>
            <div>
                <button className="btn btn-danger" onClick={() => { setNumOfPage(numOfPage - 1); console.log(numOfPage); }}
                    disabled={numOfPage == 0} >&lt;Previous</button>
                <button className="btn btn-danger" onClick={() => { setNumOfPage(numOfPage + 1); console.log(numOfPage); }}
                    disabled={numOfPage == numOfImages - 1}>Next&gt;</button>
            </div>
        </>
    )



}
export default ImagesComponent;