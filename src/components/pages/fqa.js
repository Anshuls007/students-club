import React from "react";
import './testimonial.css';
import Accordion from 'react-bootstrap/Accordion';

function Fqa() {
    return (
      <Accordion id="fqaid">
        <div className="title_head">FAQ</div>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is students club?</Accordion.Header>
          <Accordion.Body>
          Student Clubs at a college are attuned to help students get most out of their experience
           while they are enrolled at the college for their academic pursuits. These student clubs
            offer limitless opportunities for student leadership and participation beyond classroom
             setup and academic programme. They provide a great platform to usher-in the distinctive
              perspectives and life experiences that all students bring to the college.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How we can register ourself for clubs?</Accordion.Header>
          <Accordion.Body>
          To register yourself first click on register then a form will appear then
            fill out the form as it is being asked. After filling out the form head of that club will 
            review your form and if they found your response interested they will contect yours through email or what's app. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How to view recents events?</Accordion.Header>
          <Accordion.Body>
          To view recent events that are organised by clubs will be shown on the Events page.
            you have to click on events then it will direct you to recent events page where you
            can watch all pictures and their description.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
  
  export default Fqa;