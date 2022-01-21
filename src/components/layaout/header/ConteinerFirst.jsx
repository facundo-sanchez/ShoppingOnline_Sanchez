import Styles from '../../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

export default function ConteinerFirst() {

  return (
    <div className={Styles.conteiner__header__first}>
        <TitleHeader/>
        <Search/>
        <UserAcount/>
    </div>
  );
}

const TitleHeader = ()=>{
    return (
        <div className={Styles.title__header}>
            <h2>ShoppingOnline</h2>
        </div>
    );
}

const Search = ()=>{
    return (
        <div className={Styles.search}>
            <input type="text" placeholder='Search'/>
            <button className={Styles.button__search}><FontAwesomeIcon icon={faSearch} className={Styles.icon__search}/></button>
        </div>

    );
}

const UserAcount = ()=>{
    return (
        <div className={Styles.user__account}>
            <ul>
                <li>Register</li>
                <li>Login</li>
            </ul>
        </div>
    );
}
