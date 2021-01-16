import React, { useState } from "react"
import "./Navbar.css"

function Navbar({bgColor}) {
    const [click, setClick] = useState(false)

    const handleClick = () => {setClick(!click); lockScroll()}
    const closeMobileMenu = () => {if (click) {setClick(false); lockScroll()}}

    const lockScroll = () => {
        document.getElementsByTagName('html')[0].classList.toggle('lock-scroll')
        document.getElementsByTagName('body')[0].classList.toggle('lock-scroll')
    }
    const delay = (url, time) => setTimeout(() => {window.location = url}, time)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <h1><a href="#" className="navbar-title" onClick={() => {closeMobileMenu(); delay('#student', 50); return false}}>Josiah Adrineda</a></h1>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" + (bgColor === "black" ? " white" : "") : "nav-menu"}>
                        <li className="nav-item">
                            <a href="#" className={"nav-anchors" + (bgColor === "black" ? " white" : "")} onClick={() => {closeMobileMenu(); delay("#student", 50); return false}}>student</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={"nav-anchors" + (bgColor === "black" ? " white" : "")} onClick={() => {closeMobileMenu(); delay("#developer", 50); return false}}>developer</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={"nav-anchors" + (bgColor === "black" ? " white" : "")} onClick={() => {closeMobileMenu(); delay("#game creator", 50); return false}}>game creator</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={"nav-anchors" + (bgColor === "black" ? " white" : "")} onClick={() => {closeMobileMenu(); delay("#composer", 50); return false}}>composer</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={"nav-anchors" + (bgColor === "black" ? " white" : "")} onClick={() => {closeMobileMenu(); delay("#transcriber", 50); return false}}>transcriber</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
