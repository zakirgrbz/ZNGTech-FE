import React from 'react';

function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="row mt-3">
            <div className="col-6 mx-auto">
              <p className="text-center" style={{fontSize: "1.25rem"}}>
                Design By ZNGTech © {new Date().getFullYear()}{" "}
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>{"  "}
                <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>{"  "}
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>{"  "}
                <a href="https://www.linkedin.com/in/"><i className="fab fa-linkedin"></i></a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
      
export default Footer;
