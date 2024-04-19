import styles from './navbar.module.css'
import Link from "next/link";
import Image from "next/image";
import {CONTACT_ME, HOME, MY_LIFE, WORK} from "../../../dataEntry";
const Navbar = ()=>{

    const NavElements = [HOME,WORK,MY_LIFE,CONTACT_ME]

    return(
        <>
            <div className={`${styles.Navbar}`}>
                <div className={`${styles.NavbarBrand}`}>
                    <Image width={140} height={140} src={'/images/brand.png'} alt={'brand'} className={`${styles.Brand}`}/>
                </div>
                <div className={`${styles.NavbarElements}`}>
                    {
                        NavElements.map((element, index)=>(
                            <div key={index} className={`${styles.NavbarElement}`}><Link className={`${styles.NavLink} ${index === 0 && styles.NavLinkActive}`} href={'#'}>{element.name}</Link></div>
                        ))
                    }
                </div>

            </div>
        </>
    );
}
export default Navbar;