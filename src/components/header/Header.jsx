import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
    return (
        <div className='hd_top'>
            <div className="hd_header max_container">
                <div className="hd_logo">
                    <img src="https://static.emaktab.uz/img/logotypes/uzlogotype.png" alt="" />
                </div>
                <div className="hd_links">
                    <NavLink to='about'>Tashkilot</NavLink>
                    <NavLink to='chances'>Imkoniyatlar</NavLink>
                    <NavLink to='forpartners'>Hamkorlarga</NavLink>
                    <NavLink to='help'>Yordam</NavLink>
                </div>
                <div className="hd_actions">
                    <div className="hd_lang">
                        <p id='hd_langName'>O'zb</p>
                        <span id='hd_langIcon'><RiArrowDropDownLine /></span>
                    </div>
                    <div className="hd_login btn">
                        Kirish
                    </div>
                    <div className="hd_connect btn">
                        Ulash
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header