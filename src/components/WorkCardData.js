import React from 'react'

const WorkCardData = () => {
    return (
        <div>
            <div className="project-card">
                <img src={pro1} alt="" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>this is text</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCardData