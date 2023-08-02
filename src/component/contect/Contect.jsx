
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

import "./contect.css";
const Contect = () => {
  const form = useRef();

//when form submit then all input value will be empty
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  //form submit
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r7s2v9o', 'template_hzup45f', form.current, 'VZN-A-1KdYZV5O6ks')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      // handle form submission logic here
    setFormData({
      userName: '',
      userEmail: '',
      message: ''
    });
  }

  return (
    <div className="contect section" id="contect">
        
      <div className="contect-left">
       <div className="c-l-map">
        <iframe title={"map"} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2100.9073847482646!2d89.90672383986751!3d24.282877856016313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1684092251046!5m2!1sbn!2sbd" width="570" height="370" loading="lazy" ></iframe>
       </div>
      </div>
      <div className="contect-right ">
         <div className="my-title-style contect-tytle">
          <h1>Get in Touch</h1>
          <h1><span>Contact Me</span></h1>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail} >
          <input  type="text" placeholder="Name" name='userName'
          value={formData.userName}
          onChange={handleChange} />

          <input  type="email" name="userEmail"
          value={formData.userEmail}
          onChange={handleChange} placeholder="Email" />

          <textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Message"></textarea>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
        <div
          className="i-blur"
          style={{
            top: "8rem",
            left: "7rem",
          }}></div>
      </div>
    </div>
  );
};

export default Contect;


// import "./contect.css";

// function Contect() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // handle form submission logic here
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="contect section">

//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Message:
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//     </div>
//   );
// }

// export default Contect;

