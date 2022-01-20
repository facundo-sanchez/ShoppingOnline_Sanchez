import Styles from '../../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

export default function Conteiner_first() {

  return (
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
  );
}
