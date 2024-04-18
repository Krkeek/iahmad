import styles from './navbar.module.css'
import Link from "next/link";
const Navbar = ()=>{
    return(
        <>
            <div className={`${styles.Navbar}`}>
                <div className={`${styles.NavbarBrand}`}>
                    <img src={'/images/brand.png'} alt={'brand'} className={`${styles.Brand}`}/>
                </div>
                <div className={`${styles.NavbarElements}`}>
                    <div className={`${styles.NavbarElement}`}><Link className={`${styles.NavLink} ${styles.NavLinkActive}`} href={'#'}>HOME</Link></div>
                    <div className={`${styles.NavbarElement}`}><Link className={`${styles.NavLink}`} href={'#'}>WORK</Link></div>
                    <div className={`${styles.NavbarElement}`}><Link className={`${styles.NavLink}`} href={'#'}>MY LIFE</Link></div>
                    <div className={`${styles.NavbarElement}`}><Link className={`${styles.NavLink}`} href={'#'}>CONTACT</Link></div>
                </div>

            </div>
        </>
    );
}
export default Navbar;