import React from "react";
import './fqa.css';

function Fqa() {
    return <>
        <div id="fqa"className="title_head">FQA</div>
        <div className="accordion w-100" id="basicAccordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
                        what is students club?
                    </button>
                </h2>
                <div id="basicAccordionCollapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#basicAccordion" >
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default,
                        until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How can we register for clubs?
                    </button>
                </h2>
                <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-mdb-parent="#basicAccordion" >
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
                        can we see recent clubs events?
                    </button>
                </h2>
                <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#basicAccordion" >
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Fqa;