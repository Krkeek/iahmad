import styles from './navbar.module.css'
import Link from "next/link";
import Image from "next/image";
const Navbar = ()=>{

    const NavElements = ['HOME','WORK','MY LIFE', 'CONTACT']

    return(
        <>
            <div className={`${styles.Navbar}`}>
                <div className={`${styles.NavbarBrand}`}>
                    <Image width={140} height={140} src={'/images/brand.png'} alt={'brand'} className={`${styles.Brand}`}/>
                </div>
                <div className={`${styles.NavbarElements}`}>
                    {
                        NavElements.map((element, index)=>(
                            <div key={index} className={`${styles.NavbarElement}`}><Link className={`${styles.NavLink} ${index === 0 && styles.NavLinkActive}`} href={'#'}>{element}</Link></div>
                        ))
                    }
                </div>

            </div>
        </>
    );
}
export default Navbar;