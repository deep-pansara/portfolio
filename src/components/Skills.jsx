import "./Skills.css"

import React from 'react'

function Skills() {
    return (

        <>
            <div class="skills">
                <h1>Skills</h1>
                <div class="skill">
                    <div class="skill-name">HTML</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="90%" style={{ maxWidth: 900 }}></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">CSS</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="70%" style={{ maxWidth: 700 }}></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">Javascript</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="65%" style={{ maxWidth: 650 }}></div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">React.js</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="65%" style={{ maxWidth: 650 }}></div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">Node.js</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="55%" style={{ maxWidth: 550 }}></div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">Express.js</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="60%" style={{ maxWidth: 600 }}></div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">MongoDB</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="50%" style={{ maxWidth: 500 }}></div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Skills