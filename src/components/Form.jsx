import "./Form.css"

import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form action="">
                <label htmlFor="">Your Name</label>
                <input type="text" name="yname" id="" placeholder=" Name" />
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" id="" placeholder=" E-Mail" />
                <label htmlFor="">Message</label>
                <textarea rows="6" placeholder="Type Your Message here" name="msg" id="" />
                <button className="btn">Submit</button>

            </form>
        </div>
    )
}

export default Form