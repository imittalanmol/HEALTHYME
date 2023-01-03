import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Formit() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_j954w22', 'template_dx4cq7l', form.current, 'QiFY6VHtLXl0YeUfc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
    </form>
  )
}

export default Formit