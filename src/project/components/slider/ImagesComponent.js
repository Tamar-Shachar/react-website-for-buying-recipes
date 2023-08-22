
import React, { useEffect, useState } from "react";
function ImagesComponent(props) {


    const numOfImages = React.Children.count(props.children);
    const images = React.Children.toArray(props.children);
    const [numOfPage, setNumOfPage] = useState(0);
    const [clicked, setClicked] = useState(false);
    function ShowImg(index) {
        return (
            images[index]
        )
    }
    // let intervalId = setInterval(() => {
    //     clicked ? clearInterval(intervalId) :
    //         (numOfPage == numOfImages - 1 ? setNumOfPage(0) : setNumOfPage(numOfPage + 1));
    // }, 2000);
    var circles = document.querySelectorAll(".circle");
    if (circles.length > 0) {
        circles.forEach(c => { c.id = "" });
        circles[numOfPage].id = "current-circle";
    }
    useEffect(() => {
        // const intervalId = setInterval(() => {
        //     (numOfPage == numOfImages - 1 ? setNumOfPage(0) : setNumOfPage(numOfPage + 1));
        // }, 2000);
        // if(clicked) {return () => {
        //   clearInterval(intervalId);
        // };}
      }, []);
    return (
        <div style={{ position: "relative", width: "62vw", height: "36vw", margin: "10vh auto", padding: "1vw", boxShadow: "2px 2px 6px rgb(18, 18, 18)" }}>
            {ShowImg(numOfPage)}
            <button className="slider-button sb-1"
                onClick={() => {
                    setClicked(true);
                    numOfPage == numOfImages - 1 ?
                        setNumOfPage(0) :
                        setNumOfPage(numOfPage + 1);
                }}
            >›</button>
            <button className="slider-button sb-2"
                onClick={() => {
                    setClicked(true);
                    numOfPage == 0 ?
                        setNumOfPage(numOfImages - 1) :
                        setNumOfPage(numOfPage - 1);
                }}
            >‹</button>
            <div className="circles-wrapper" onClick={() => setClicked(true)} >
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
            </div>
        </div >
    );
}
export default ImagesComponent;