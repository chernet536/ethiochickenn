import React from 'react';
import './ContactForm.css';
function ContactForm() {
  return (
    <div className='containerStyle'>
      <div className='formContainerStyle'>
        <h2 className='contact-us-header'>Contact Us</h2>
        <form className='formStyle'>
          <div className='form-part-1'>
              <label className='labelStyle'>Name:</label>
              <input className= 'inputStyle' type="text"/>
          </div>
          <div className='form-part-2'>
               <label className='labelStyle'>Email:</label>
              <input className= 'inputStyle' type="email"/>
          </div>
          
          <div className='form-part-3'>
              <label className='labelStyle'>Subject:</label>
              <input className= 'inputStyle' type="text"/>
          </div>
          <div className='form-part-4'>
              <label className='labelStyle'>Message:</label>
              <textarea className='messageStyle' ></textarea>
          </div>
          <div className='form-part-5'>
              <button className= 'buttonStyle' type="submit">Send</button>
          </div>
       
        </form>
      </div>

      <div className='infoContainerStyle'>
        <h3 className='get-in-touch'>Get in Touch</h3>
        <p>Address:  <br></br> Ethio China Street, Kadco Group Building #2, 6th floor, Addis Ababa Ethiopia</p>
        <p>Phone:  <br></br> +251-116-67-22-29 <br></br>+251-944-16-83-59</p>
        <p>Email: <br></br> info@ethiochicken.com</p>
        <h3 className='sales-enquiries'>For Any Sales Enquiries</h3>
        <p>Addis Ababa: <br></br> +251-920-42-96-97</p>
        <p>Amhara: <br></br> +251-953-59-92-62</p>
        <p>Oromia: <br></br> +251-920-42-96-97</p>
        <p>SNNPR: <br></br> +251-953-33-89-40</p>
        <p>Tigray: <br></br> +251-914-15-72-19</p>
      </div>
    </div>
  );
}


const infoStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

export default ContactForm;
