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
                        <div class="skill-per-html" per="90%"></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">CSS</div>
                    <div class="skill-bar">
                        <div class="skill-per-css" per="70%"></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">Javascript</div>
                    <div class="skill-bar">
                        <div class="skill-per-javascript" per="65%"></div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">React.js</div>
                    <div class="skill-bar">
                        <div class="skill-per-react" per="65%"></div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">Node.js</div>
                    <div class="skill-bar">
                        <div class="skill-per-node" per="55%"></div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">Express.js</div>
                    <div class="skill-bar">
                        <div class="skill-per-express" per="60%"></div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">MongoDB</div>
                    <div class="skill-bar">
                        <div class="skill-per-mongo"></div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Skills