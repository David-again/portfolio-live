import React from 'react';
const myVillains = require('supervillains');
myVillains.all;
// document.write(myVillains.random());

function ContactForm() {
    return (
      <div>

        <form name="feedback" method="POST" data-netlify="true" className="feedback-form">
            <div className="feedback-form-content">
                {/* <label for="feedback-name">Your Name</label> */}
                <input type="text" name="feedback-name" id="" placeholder="Name" />
                
                {/* <label for="feedback-email"> Your email address</label> */}
                <input type="email" name="feedback-email" id="" placeholder="Your email address" />

                {/* <label for="feedback-subject"> Subject </label> */}
                <input type="text" name="feedback-subject" id="" placeholder="Subject"/>

                {/* <label for="feedback-message"> Your message </label> */}
                <textarea name="feedback-message" id="" cols="40" rows="10" placeholder="Your message here" />

                <button type="submit" className="feedback-submit-button">Send Feedback</button>
            </div>
        </form>

        {/* <p>{myVillains.random()}</p> */}
      </div>
    )
  }

  export default ContactForm;