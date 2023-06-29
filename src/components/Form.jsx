import "./Form.css"

import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form action="">
                <label htmlFor="">Curently Form  is not Working, Send me an Email </label>
                <label htmlFor="">Your Name</label>
                <input type="text" name="yname" id="" placeholder=" Name" disabled />
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" id="" placeholder=" E-Mail" disabled />
                <label htmlFor="">Message</label>
                <textarea rows="6" placeholder="Type Your Message here" name="msg" id="" disabled />
                <button className="btn" disabled>Submit</button>
            </form>
        </div>
    )
}

export default Form