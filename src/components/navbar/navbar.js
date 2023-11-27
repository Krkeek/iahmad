import styles from './navbar.module.css'
import brand from '../../assets/images/brand.png'
import {NavLink} from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
            <div className={`${styles.Navbar}`}>
                <div className={`${styles.NavbarBrand}`}>
                    <img src={brand} alt={'brand'} className={`${styles.Brand}`} />

                </div>
                <div className={`${styles.NavbarElements}`}>
                    <div className={`${styles.NavbarElement}`}><NavLink className={`${styles.NavLink} ${styles.NavLinkActive}`} to={'#'}>HOME</NavLink></div>
                    <div className={`${styles.NavbarElement}`}><NavLink className={`${styles.NavLink}`} to={'#'}>WORK</NavLink></div>
                    <div className={`${styles.NavbarElement}`}><NavLink className={`${styles.NavLink}`} to={'#'}>MY LIFE</NavLink></div>
                    <div className={`${styles.NavbarElement}`}><NavLink className={`${styles.NavLink}`} to={'#'}>CONTACT</NavLink></div>
                </div>

            </div>
        </>
    );
}
export  default Navbar;