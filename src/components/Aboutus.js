import React from 'react';
import img1 from './imagesss/anm.JPG';
import img2 from './imagesss/hsk.jpg';
import img3 from './imagesss/ays.jpg';
function Aboutus() {
  return (
    <div>

        <div class="bg-light">
        <div class="container py-5">
            <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
                <h1 class="display-4">About Us</h1>
                <p class="lead text-muted mb-0">
                Our objective is to ease the patient consultation process. Hours of waiting can turn out tedious. Considering this, our application will allow easy consultation and hence save time. <br />
•The application has three interfaces patients interface, doctor's interface and managing staff's interface. <br />
•Patient can enter his symptoms on the portal and he will be asked about the type of consultation he prefers i.e. online or offline. <br />
•For online consultations, a doctor will be assigned to the patient who will be prescribing the medicine according to diagnosis done. <br />
•For offline consultations, the patient will be linked to the managing staff interface where date and time of consultation will be provided. <br />
•This will save long hours of waiting and eases the consultation process.
                </p>
            </div>
            <div class="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid"/></div>
            </div>
        </div>
        </div>

        <div class="bg-white py-5">
        <div class="container py-5">
            <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h2 class="font-weight-light">How to Benefit from the Services</h2>
                <p class="font-italic text-muted mb-4">
                •  Enter your symptoms  <br />
•Answer some simple questions   <br />
•Done! Your assessment will reveal:  the possible causes of your symptoms  <br />
•Enter your symptoms to share with the on-board doctor and receive the prescription you need. <br />
• It is a telemedicine service that provides care on-demand and by appointment, for various physical and mental health issues, via highly rated iOS and Android app.
                </p>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
            </div>
            <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
            <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                <h2 class="font-weight-light">HEALTHYME for Doctors</h2>
                <p class="font-italic text-muted mb-4">
                •The symptoms of the patients will be diagnosed by the doctors. <br />
•The expected disease will not be disclosed to the patient in order to provide panic situations. <br />
•After diagnosis, the doctor will provide a prescription to the patient, along with the method of taking medicines. <br />
•The patient will be given options: whether he can consider the prescription correct and move ahead with it otherwise he has the choice of taking an offline appointment.
                </p>
            </div>
            </div>
        </div>
        </div>

        <div class="bg-light py-5">
        <div class="container py-5">
            <div class="row mb-4">
            <div class="col-lg-5">
                <h2 class="display-4 font-weight-light">Our team</h2>
                <p class="font-italic text-muted">Gems in our Team </p>
            </div>
            </div>

            <div class="row text-center">
            <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={img1} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Anmol Mittal</h5><span class="small text-uppercase text-muted">CEO - Founder</span><br /><span class="small text-uppercase text-muted">Technical Head</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="https://www.instagram.com/imittalanmol/" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="https://www.linkedin.com/in/anmol-mittal-88790822a/" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={img2} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Harshita Khurana</h5><span class="small text-uppercase text-muted">CEO - Founder</span><br /><span class="small text-uppercase text-muted">Research Head</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="https://www.instagram.com/khurana_harshita_khurana/" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="/" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Aboutus