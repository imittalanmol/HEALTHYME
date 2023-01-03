import React from 'react';
import './Ourservices.css';
import img1 from './imagesss/blood-tube.png';
import img2 from './imagesss/xray.png';
import img3 from './imagesss/hybrid.png';
function Ourservices() {
  return (
    <div>
<section class="service-grid pb-5 pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 text-center mb-4">
                        <div class="service-title">
                            <h4>Our Services</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 text-center mb-3">
                        <div class="service-wrap amb">
                            <div class="service-icon">
                                <i class="fa fa-ambulance"></i>
                            </div>
                            <h4>24/7 AMBULANCE SUPPORT</h4>
                            <p></p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center mb-3">
                        <div class="service-wrap nrs">
                            <div class="service-icon">
                                <i class="fa fa-user-md"></i>
                            </div>
                            <h4>Home Nursing </h4>
                            <p></p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center mb-3">
                        <div class="service-wrap em">
                            <div class="service-icon">
                                <i class="fa fa-shield"></i>
                            </div>
                            <h4>Emergency Consultancy</h4>
                            <p></p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center mb-3">
                        <div class="bdt service-wrap">
                            <div class="service-icon">
                                <img className="bd"src={img1} alt="" />
                            </div>
                            <h4>Test Laboratory</h4>
                            <p></p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center mb-3">
                        <div class="xr service-wrap">
                            <div class="service-icon">
                                <img className='bd' src={img2} alt="" />
                            </div>
                            <h4>X-Ray and MRI</h4>
                            <p></p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center mb-3">
                        <div class="hbd service-wrap">
                            <div class="service-icon">
                                <img className='bd' src={img3} alt="" />
                            </div>
                            <h4>Hybrid Appointment</h4>
                            <p></p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Ourservices