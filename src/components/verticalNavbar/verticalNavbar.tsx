// @ts-ignore
import styles from './verticalNavbar.module.css'
import {CONTACT_ME, HOME, MY_LIFE, WORK} from "../../../dataEntry";
import Link from "next/link";
import Image from "next/image";

const VerticalNavbar = ()=>{

    const NavElements = [HOME,WORK, MY_LIFE,CONTACT_ME]

    return(
        <>
        <div className={`${styles.Container}`}>

            {
                NavElements.map((element,index)=>{
                    return(
                        <Link key={index} className={`${styles.Nav}`}  href={'#'}><Image width={35} height={20} className={`${styles.Icons}`} src={element.url} alt={element.name}/></Link>
                    )
                })
            }
        </div>
        </>
    );
}

export default VerticalNavbar