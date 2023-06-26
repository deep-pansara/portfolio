import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h1>About Me</h1>
                        <p>This is Deep Pansara,
                            MERN stack magician weaving robust applications with captivating UI. Unyielding learner dedicated to crafting exceptional projects.</p>
                    </div>
                    <div className="col">
                        <h1>Contact</h1>
                        <div className="social">
                            <div className="social-icons">
                                <Link to="https://github.com/deep-pansara">
                                    <FaGithub />
                                </Link>
                            </div>
                            <div className="social-icons">
                                <Link to="https://www.linkedin.com/in/deep-pansara">
                                    <FaLinkedin />
                                </Link>
                            </div>
                            <div className="social-icons">
                                <Link to="https://twitter.com/Deep_pansara">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                        <div className="email">
                            <div className="social-icons">
                                <FaMailBulk />&nbsp;&nbsp; pansaradeep@gmail.com
                            </div>
                        </div>
                        <div className="phone">
                            <div className="social-icons">
                                <FaPhone />&nbsp;&nbsp; +91 9687812014
                            </div>
                        </div>
                    </div>
                </div>
            </div >



        </>
    )
}

export default Footer