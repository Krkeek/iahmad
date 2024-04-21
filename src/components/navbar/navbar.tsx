'use client'
import styles from './navbar.module.css'
import Link from "next/link";
import Image from "next/image";
import {CONTACT_ME, HOME, MY_LIFE, WORK} from "../../../dataEntry";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {navbarAnimation} from "@/lib/gsap/navbar";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const Navbar = ()=>{

    const { contextSafe } = useGSAP(); // we can pass in a config object as the 1st parameter to make scoping simple
    const handleNavigation = contextSafe((element: string)=>{
        console.log(element);
        gsap.to(window, { duration: 2, scrollTo: "#test" });
    })


    const NavElements = [HOME,WORK,MY_LIFE,CONTACT_ME]

    return(
        <>
            <div className={`${styles.Navbar} Navbar_animation`}>
                <div className={`${styles.NavbarBrand}`}>
                    <Image width={45} height={45} src={'/images/brand.webp'} alt={'brand'} className={`${styles.Brand} Brand_animation`}/>
                </div>
                <div className={`${styles.NavbarElements}`}>
                    {
                        NavElements.map((element, index)=>(
                            <div onClick={() => handleNavigation(element.name)} key={index} className={`${styles.NavbarElement} NavElement_animation`}><Link  className={`${styles.NavLink} ${index === 0 && styles.NavLinkActive}`} href={'#'}>{element.name}</Link></div>
                        ))
                    }
                </div>

            </div>
        </>
    );
}
export default Navbar;