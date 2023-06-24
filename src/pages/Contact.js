import React, { useState } from "react";
import { api } from "../services/httpService";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const createEmail = async (e) => {
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      sendEmail(e);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const emailContent = {
      name: name,
      email: email,
      message: message,
    };
    try {
      const response = await api.post(`/contact/`, emailContent);
      setName("");
      setEmail("");
      setMessage("");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="container home1 Contact Bgg">
      <div className="row">
        <div className="col-10 mt-5 offset-1">
          <br />
          <br />
          <h1>Contact Us</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                value={message}
                placeholder="Enter your message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => createEmail(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
