import React from 'react'
import './Testimonial.css'
import img1 from './imagesss/pat1.jpg'
import img2 from './imagesss/pat2.jpg'
import img3 from './imagesss/pat3.jpg'
function Testimonial() {
  return (
    <div>
        <div class="container testim">
            <h1>
                Patient's Happy Stories !
            </h1>
    <div class="row">
        <div class="col-md-4 mt-5">
            <div class="card"> <i class="fa fa-quote-left u-color"></i>
                <p>Had irritation in the eyes. Dr. Atul Singh did the check up. Very satisfied with the diagnosis and treatment. The doctor was very professional and efficient and explained everything. Charu Sharma from the reception assisted me. She was extremely helpful, sweet and polite.</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="user-about"> <span class="font-weight-bold d-block">Alex Smith</span> <span class="u-color">Designer | Developer</span>
                        <div class="d-flex flex-row mt-1"> <i class="fa fa-star u-color"></i> <i class="fa fa-star u-color"></i> <i class="fa fa-star-o u-color"></i> <i class="fa fa-star-o u-color"></i> <i class="fa fa-star-o u-color"></i> </div>
                    </div>
                    <div class="user-image"> <img src={img1} class="rounded-circle" width="70" alt='lk'/> </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 mt-5">
            <div class="card"> <i class="fa fa-quote-left u-color"></i>
                <p>Had irritation in the eyes. Dr. Atul Singh did the check up. Very satisfied with the diagnosis and treatment. The doctor was very professional and efficient and explained everything. Charu Sharma from the reception assisted me. She was extremely helpful, sweet and polite.</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="user-about"> <span class="font-weight-bold d-block">Sophia T.</span> <span class="u-color">Designer | Architect</span>
                        <div class="d-flex flex-row mt-1"> <i class="fa fa-star u-color"></i> <i class="fa fa-star u-color"></i> <i class="fa fa-star u-color"></i> <i class="fa fa-star-o u-color"></i> <i class="fa fa-star-o u-color"></i> </div>
                    </div>
                    <div class="user-image"> <img src={img2} class="rounded-circle" width="70" alt='lk'/> </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 mt-5 mb-5">
            <div class="card"> <i class="fa fa-quote-left u-color"></i>
                <p>Had irritation in the eyes. Dr. Atul Singh did the check up. Very satisfied with the diagnosis and treatment. The doctor was very professional and efficient and explained everything. Charu Sharma from the reception assisted me. She was extremely helpful, sweet and polite.</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="user-about"> <span class="font-weight-bold d-block">Mike Vincent</span> <span class="u-color">Designer | Developer</span>
                        <div class="d-flex flex-row mt-1"> <i class="fa fa-star u-color"></i> <i class="fa fa-star u-color"></i> <i class="fa fa-star u-color"></i> <i class="fa fa-star u-color"></i> <i class="fa fa-star-o u-color"></i> </div>
                    </div>
                    <div class="user-image"> <img src={img3} class="rounded-circle" width="70" alt='lk'/> </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Testimonial