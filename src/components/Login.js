import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Login.css'
function Login() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        
      emailjs.sendForm()
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        alert("Your Request has been submitted , You will recieve mail regarding your mail shortly"); 
    };
  return (
   <>
    <form className='loginform'ref={form} onSubmit={sendEmail} >
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" name="user_email" placeholder="Enter email" required/>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Mobile Number</label>
            <input type="text" class="form-control" id="exampleInputEmail1" name="message" placeholder="M.O.B number" required/>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Patient's Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" name="user_name" placeholder="Name" required/>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
            <label class="form-check-label" for="exampleCheck1">T&C</label>
        </div>
        <button type="submit" class="btn btn-large btn-outline-success" value="Send">Book My Appointment</button>
    </form>
   </>
  )
}

export default Login