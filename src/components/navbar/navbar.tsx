import styles from './navbar.module.css'
import Link from "next/link";
import Image from "next/image";
const Navbar = ()=>{
    return(
        <>
            <div className={`${styles.Navbar}`}>
                <div className={`${styles.NavbarBrand}`}>
                    <Image width={140} height={140} src={'/images/brand.png'} alt={'brand'} className={`${styles.Brand}`}/>
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