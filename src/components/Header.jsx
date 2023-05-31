import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${style.navContainer}`}>
    <div className="container-fluid">
        <a className={`navbar-brand ${style.logo}`} href="/">Visualise</a>
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link to="/"><img className={style.exit} src="exit.png" /></Link>
            </li>
        </ul>

    </div>
    </nav>
    
  )
}

export default Header