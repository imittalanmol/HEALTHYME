import React from 'react'
import img1 from './imagesss/doc1.jpg'
import img2 from './imagesss/doc2.jpg'
import img3 from './imagesss/doc3.jpg'
import img4 from './imagesss/doc4.jpg'
import { useNavigate } from 'react-router-dom'
import './Doctors.css'
function Doctors() {
    const navigate = useNavigate()

  return (
    <div className="bg">
    <div className='container mt-2 doci'>
        <h1>
            GLIMPSE OF DOCTORS!
        </h1>
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
                <button onClick={()=>navigate('book-my-appointment')} className="btn btn-outline-success">Take Apointment</button>
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
                <button onClick={()=>navigate('book-my-appointment')} className="btn btn-outline-success">Take Apointment</button>
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
                <button onClick={()=>navigate('book-my-appointment')} className="btn btn-outline-success">Take Apointment</button>
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
                <button onClick={()=>navigate('book-my-appointment')} className="btn btn-outline-success">Take Apointment</button>
            </div>
            <div className="col-md-4 docimg mt-4">
                <img src={img2} alt="" />
            </div>
        </div>
        
    <hr />
    </div>
    </div>
  )
}

export default Doctors