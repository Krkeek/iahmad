'use client'
import styles from './navbar.module.css'
import Link from "next/link";
import Image from "next/image";
import {CONTACT_ME, HOME, MY_LIFE, WORK} from "../../../dataEntry";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {useParams} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";
import i18next, {changeLanguage} from "i18next";
gsap.registerPlugin(ScrollToPlugin);
const Navbar = ()=>{

    const params = useParams<{ lng: string }>()
    // @ts-ignore
    const { t } = useTranslation(params.lng,'landingPage')


    const { contextSafe } = useGSAP();
    const handleNavigation = contextSafe((element: string)=>{
        console.log(element)
        gsap.to(window, { duration: 1, scrollTo: '#'+element });
    })


    const NavElements = [HOME,WORK,MY_LIFE,CONTACT_ME]
    const handleLang = (lang: string) =>{
        changeLanguage(lang).then()
    }

    return(
        <>
            <div className={`${styles.Navbar} Navbar_animation`}>
                <div className={`${styles.NavbarBrand}`}>
                    <Image width={45} height={45} src={'/assets/brand.webp'} alt={'brand'} className={`${styles.Brand} Brand_animation`}/>
                </div>
                <div className={`${styles.NavbarElements}`}>
                    {
                        NavElements.map((element, index) => (
                            <div onClick={() => handleNavigation(element.id)} key={index}
                                 className={`${styles.NavbarElement} NavElement_animation`}><Link
                                className={`${styles.NavLink} ${index === 0 && styles.NavLinkActive}`}
                                href={'#'}> {t(element.name)}</Link></div>
                        ))
                    }
                    <div className={`${styles.NavbarElement} ${styles.LangElement} NavElement_animation`}>
                        <Link onClick={() => handleLang('de')} className={`${styles.NavLink} ${i18next.language === 'de' &&styles.LangElementActive}`} href={'#'}>DE</Link>
                        <p>|</p>
                        <Link onClick={() => handleLang('en')} className={`${styles.NavLink} ${i18next.language === 'en' &&styles.LangElementActive}` } href={'#'}>EN </Link>
                    </div>

                </div>

            </div>
        </>
    );
}
export default Navbar;