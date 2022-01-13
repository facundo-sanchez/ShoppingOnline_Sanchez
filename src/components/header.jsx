import React from 'react'
import Styles from '../css/header.module.css'
export default function header() {
    return (
        <header>
            <div className={Styles.conteiner__header__first}>
                <div className={Styles.title__header}>
                    <h2>ShoppingOnline</h2>
                </div>
                
                <div className={Styles.search}>
                    <input type="text" placeholder='Search'/>
                    <button className={Styles.button__search}>Icon</button>
                </div>

                <div className={Styles.user__account}>
                    <ul>
                        <li>Register</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>

           <div className={Styles.conteiner__header__second}>
               <div className={Styles.item__1}>
                    <p>#ShoppingOnline</p>
               </div>

                <nav className={Styles.nav__menu}>
                    <ul>
                        <li>Home</li>
                        <li>Categories</li>
                        <li>Offers</li>
                        <li>Contact</li>
                        <li>Help</li>
                    </ul>
                </nav>
                
                <div className={Styles.item__2}>
                    <p>Favorites</p>
                </div>
           </div>
        </header>
    )
}
