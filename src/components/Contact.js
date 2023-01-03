import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <>
    <div className="ramramji container">
    <div className="contact__wrapper shadow-lg mt-n9">
        <div className="row no-gutters">
            <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                <h3 className="color--white mb-5">Get in Touch</h3>
    
                <ul className="contact-info__list list-style--none position-relative z-index-101">
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="fas fa-envelope"></i></span> support@healthyme.com
                    </li>
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="fas fa-phone"></i></span> (021)-241454-545
                    </li>
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="fas fa-map-marker-alt"></i></span> Healthyme.PVT.LTD  
                        <br/> NH 24 Ghaziabad IN
                        <br/> 99161
                    </li>
                </ul>
    
                <figure className="figure position-absolute m-0 opacity-06 z-index-100" >
                        <defs>
                            <linearGradient id="PSgrad_1" x1="0%" x2="81.915%" y1="57.358%" y2="0%">
                                <stop offset="0%" stop-color="rgb(255,255,255)" stop-opacity="1"></stop>
                                <stop offset="100%" stop-color="rgb(0,54,207)" stop-opacity="0"></stop>
                            </linearGradient>
    
                        </defs>
                        <path fill-rule="evenodd" opacity="0.302" fill="rgb(72, 155, 248)" d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"></path>
                        <path fill="url(#PSgrad_1)" d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"></path>
                </figure>
            </div>
    
            <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                <form action="#" className="contact-form form-validate" novalidate="novalidate">
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Wendy"/>
                            </div>
                        </div>
    
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Appleseed"/>
                            </div>
                        </div>
    
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="email">Email</label>
                                <input type="text" className="form-control" id="email" name="email" placeholder="wendy.apple@seed.com"/>
                            </div>
                        </div>
    
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" className="form-control" id="phone" name="phone" placeholder="(021)-454-545"/>
                            </div>
                        </div>
    
                        <div className="col-sm-12 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="message">How can we help?</label>
                                <textarea className="form-control" id="message" name="message" rows="4" placeholder="Hi there, I would like to....."></textarea>
                            </div>
                        </div>
    
                        <div className="col-sm-12 mb-3">
                            <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                        </div>
    
                    </div>
                </form>
            </div>
    
        </div>
    </div>
</div>
    </>
  )
}

export default Contact