import React from 'react'
import Styles from '../css/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faHome ,faList,faShoppingCart,faHeart,faTags,faIdBadge,faQuestionCircle} from '@fortawesome/free-solid-svg-icons'



export default function header() {
    
    return (
        
        <header>
            <div className={Styles.conteiner__header__first}>
                <div className={Styles.title__header}>
                    <h2>ShoppingOnline</h2>
                </div>
                
                <div className={Styles.search}>
                    <input type="text" placeholder='Search'/>
                    <button className={Styles.button__search}><FontAwesomeIcon icon={faSearch} className={Styles.icon__search}/></button>
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
                        <li><a href="home"><FontAwesomeIcon icon={faHome} className={Styles.icon}/>Home</a></li>
                        <li><a href="categories"><FontAwesomeIcon icon={faList} className={Styles.icon}/>Categories</a></li>
                        <li><a href="offers"><FontAwesomeIcon icon={faTags} className={Styles.icon}/>Offers</a></li>
                        <li><a href="contact"><FontAwesomeIcon icon={faIdBadge} className={Styles.icon}/>Contact</a> </li>
                        <li><a href="help"><FontAwesomeIcon icon={faQuestionCircle} className={Styles.icon}/>Help</a></li>
                    </ul>
                </nav>
                
                <div className={Styles.user__item}>
                    <ul className={Styles.nav__user}>
                        <li><a href="shopping"><FontAwesomeIcon icon={faShoppingCart} className={Styles.icon_user}/><span className={Styles.user__shopping}>2</span></a></li>
                        <li><a href="favorites">   <FontAwesomeIcon icon={faHeart} className={Styles.icon_user}/><span className={Styles.user__favorites}>2</span></a></li>
                    </ul>
         
                </div>
           </div>
        </header>
       
    )
}
