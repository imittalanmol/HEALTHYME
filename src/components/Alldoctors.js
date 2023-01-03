import React from 'react'
import img1 from './imagesss/doc1.jpg'
import img2 from './imagesss/doc2.jpg'
import img3 from './imagesss/doc3.jpg'
import img4 from './imagesss/doc4.jpg'
import img5 from './imagesss/doc5.jpg'
import img6 from './imagesss/doc6.jpg'
import img7 from './imagesss/doc7.jpg'
import img8 from './imagesss/doc8.jpg'
import img9 from './imagesss/doc9.jpg'
import { useNavigate } from 'react-router-dom'
import './Doctors.css'
function Alldoctors() {
    const navigate = useNavigate()
  return (
        <div className="bg">
            <br />
            <br />
            <div className='container mt-2 doci'>
                <div className="row ">
                    <div className="col-md-4 docimg">
                        <img src={img1} alt="" />
                    </div>
                    <div className="col-md-4 side mt-4">
                        <h5>
                            CARDIOLOGIST
                        </h5>
                        <h1>
                        Dr. Ashish Govil
                        </h1>
                        <p>
                        MBBS, MD - General Medicine, DM - Cardiology <br />
                        Cardiologist <br />
                        19 Years Experience Overall  (9 years as specialist)
                        </p>
                        <button  onClick={()=>navigate('book-my-appointment')}  className="btn btn-outline-success">Take Apointment</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4 side">
                        <h5>
                            PHYSICIAN
                        </h5>
                        <h1>
                            Dr. Sushma Chawla
                        </h1>
                        <p>
                        MBBS <br />
                        General Physician, General Practitioner <br />
                        50 Years Experience Overall 
                        </p>
                        <button  onClick={()=>navigate('book-my-appointment')}  className="btn btn-outline-success">Take Apointment</button>
                    </div>
                    <div className="col-md-4 docimg mt-4">
                        <img src={img4} alt="" />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4 docimg ">
                        <img src={img3} alt="" />
                    </div>
                    <div className="col-md-4 side mt-4">
                        <h5>
                            ORTHOPEDIC SURGEON
                        </h5>
                        <h1>
                            Dr. Vimal Kumar Dakour
                        </h1>
                        <p>MBBS, Diploma in Orthopaedics, DNB - Orthopedics/Orthopedic Surgery <br />
                        Orthopedic surgeon <br />
                        18 Years Experience Overall  (13 years as specialist) 
                        </p>
                        <button  onClick={()=>navigate('book-my-appointment')}  className="btn btn-outline-success">Take Apointment</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4 side">
                        <h5>
                            OPTHALMOLOGIST
                        </h5>
                        <h1>
                            DR. Shweta Jain 
                        </h1>
                        <p>
                        MBBS, DNB - Ophthalmology <br />
                        Ophthalmologist/ Eye Surgeon <br />
                        10 Years Experience Overall <br /> (8 years as specialist)</p>
                        <button  onClick={()=>navigate('book-my-appointment')}  className="btn btn-outline-success">Take Apointment</button>
                    </div>
                    <div className="col-md-4 docimg mt-4">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <hr />
                <div className="row ">
                    <div className="col-md-4 docimg">
                        <img src={img5} alt="" />
                    </div>
                    <div className="col-md-4 side mt-4">
                        <h5>
                            OPTHALMOLOGIST
                        </h5>
                        <h1>
                        Dr. Jatin Ashar
                        </h1>
                        <p>
                        MBBS, MD - Ophthalmology, DNB - Ophthalmology, FAICO (Fellow of All India Collegium of Ophthalmology) <br />
                        Ophthalmologist/ Eye Surgeon <br />
                        13 Years Experience Overall <br />
                        </p>
                        <button  onClick={()=>navigate('book-my-appointment')}  className="btn btn-outline-success">Take Apointment</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4 side">
                        <h5>
                            LAPAROSCOPIC SURGEON
                        </h5>
                        <h1>                                               Dr. Pranay Kapadia
                        </h1>
                        <p>
                        MBBS, DNB General Surgery <br />
                        General Physician, General Practitioner <br />
                        16 Years Experience Overall 
                        </p>
                        <button  onClick={()=>navigate('book-my-appointment')}  className="btn btn-outline-success">Take Apointment</button>
                    </div>
                    <div className="col-md-4 docimg mt-4">
                        <img src={img6} alt="" />
                    </div>
                </div>
                <hr /><div className="row ">
                    <div className="col-md-4 docimg">
                        <img src={img7} alt="" />
                    </div>
                    <div className="col-md-4 side mt-4">
                        <h5>
                            UROLOGIST
                        </h5>
                        <h1>
                        
Dr. Samir Bagadia
                        </h1>
                        <p>
                        MBBS, MS - General Surgery, DNB - Urology/Genito - Urinary Surgery <br />
Urologist, Andrologist, Laparoscopic Surgeon <br />
8 Years Experience Overall  (5 years as specialist) <br />
                        </p>
                        <button  onClick={()=>navigate('book-my-appointment')}  className="btn btn-outline-success">Take Apointment</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4 side">
                        <h5>
                            ORTHOPEDIST
                        </h5>
                        <h1>
                        Dr. Santosh Patil
                        </h1>
                        <p>
                        MBBS, MS - Orthopaedics <br />

Joint Replacement Surgeon, Spine Surgeon (Ortho), Orthopedic surgeon <br />
19 Years Experience Overall  (13 years as specialist) <br />
                        </p>
                        <button  onClick={()=>navigate('book-my-appointment')}  className="btn btn-outline-success">Take Apointment</button>
                    </div>
                    <div className="col-md-4 docimg mt-4">
                        <img src={img8} alt="" />
                    </div>
                </div>
                <hr /><div className="row ">
                    <div className="col-md-4 docimg">
                        <img src={img9} alt="" />
                    </div>
                    <div className="col-md-4 side mt-4">
                        <h5>
                            General Physician
                        </h5>
                        <h1>
                        
Dr. Raman Shenoy
                        </h1>
                        <p>
                        MBBS, MD - General Medicine <br />

General Physician <br />
23 Years Experience Overall <br />
                        </p>
                        <button  onClick={()=>navigate('book-my-appointment')}  className="btn btn-outline-success">Take Apointment</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Alldoctors