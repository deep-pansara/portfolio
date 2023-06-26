import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h1>About Me</h1>
                        <p>This is Deep Pansara, MERN FullStack WebDeveloper.</p>
                    </div>
                    <div className="col">
                        <h1>Contact</h1>
                        <div className="social">
                            <div className="social-icons">
                                <FaGithub />
                            </div>
                            <div className="social-icons">
                                <FaLinkedin />
                            </div>
                            <div className="social-icons">
                                <FaTwitter />
                            </div>
                        </div>

                        <div className="email">
                            <div className="social-icons">
                                <FaMailBulk /> pansaradeep@gmail.com
                            </div>
                        </div>
                        <div className="phone">
                            <div className="social-icons">
                                <FaPhone /> +91 9687812014
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Footer