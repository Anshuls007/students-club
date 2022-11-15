import React from "react";
import './testimonial.css';

const Testimonial = () => {
    return <>
        <div className="alltesti">
        <div className="title_head">DEVELOPED BY</div>
        <div className="testi12">
            <div className="testi21">
                <img className="devp1" src="anshul.jpg"/><br/>
                <a href="https://www.linkedin.com/in/anshul-singh-bb9aa11b2" target="_blank" className="devname">ANSHUL SINGH</a>
                <div className="devstatus">Btech CSE 3rd year</div><br/>
                <div className="spcerr"></div>
                <p className="devpara">
                    <i className="fas fa-quote-left pe-2"></i>
                    I'm a computer science enthusiast with a strong desire to learn
                     new technical skills that will enhance my knowledge.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
            </ul>
            </div>
            <div className="testi21">
                <img className="devp1" src="bhawanshu.jpg"/><br/>
                <a href="https://www.linkedin.com/in/anshul-singh-bb9aa11b2" target="_blank" className="devname2">BHAWANSHU SINGH CHANDA</a>
                <div className="devstatus">Btech CSE 3rd year</div><br/>
                <p className="devpara">
                    <i className="fas fa-quote-left pe-2"></i>
                    To me, mathematics, computer science, and the arts are insanely related.
                     They're all creative expressions
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="far fa-star fa-sm"></i></li>
            </ul>
            </div>
        </div>
        </div>
    </>
}

export default Testimonial;