import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1 style={{color: "green"}}>Contact Page</h1>
      <p>
      Email: anentitymusic@gmail.com
      </p>
      <form id="contact-form">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email"  />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message"  />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  );
}