import React from 'react'
import logo from '../../../assets/svgs/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <h2 className="site-title">React</h2>
            <img className="site-logo" src={logo} alt="React Logo" />
            <h2 className="site-title">Todo</h2>
        </header >
    )
}

export default Header