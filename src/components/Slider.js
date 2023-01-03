import React from 'react';
import './Slider.css'
import img1 from './imagesss/1.jpg';
import img3 from './imagesss/2.jpg';
import img2 from './imagesss/3.jpg';
function Slider() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={img3} alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Third slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>

        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>

        </a>
    </div>
    </>
  )
}

export default Slider