import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="contact-info">
                <h3 className="contact phone-number">(209) 914 - 9720</h3>
                <h3 className="contact berkeley-email">jadrineda@berkeley.edu</h3>
                <h3 className="contact tech-email">jnsa.tech@gmail.com</h3>
                <h3 className="contact music-email">jnsa.music@gmail.com</h3>
            </div>
            <div className="social-icons">
                <a target="_blank" href="https://www.facebook.com/josiah.adrineda/" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-link facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/jnsa.fr/" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-link instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UC2FC8paRTw3YRBNAkzdxVmQ" rel="noopener noreferrer" aria-label="Youtube" className="social-icon-link youtube">
                    <i className="fab fa-youtube"></i>
                </a>
                <a target="_blank" href="https://twitter.com/j_adrineda" rel="noopener noreferrer" aria-label="Twitter" className="social-icon-link twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a target="_blank" href="https://linkedin.com/in/josiah-adrineda-2250481a6" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-link linkedin">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
