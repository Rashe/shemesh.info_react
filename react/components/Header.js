import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav id="outside">
                    <div className="nav-wrapper">
                        <ul id="mobile-demo" className="top_list nav_center">
                            <li className="top_menu">
                                <Link to={"/"} >Home</Link>
                            </li>
                            <li className="top_menu">
                                <Link to={"/"} >Blog</Link>
                            </li>
                            <li className="top_menu">
                                <Link to={"/"} >Services</Link>
                            </li>
                            <li className="top_menu about_menu">
                                <Link to={"/about"} >About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;