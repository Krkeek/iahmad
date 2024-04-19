import styles from './sectionLayout.module.css'
import Header from "@/components/header/header";
import ScrollDown from "@/components/scrollDown/scrollDown";
import {Children, ReactNode} from "react";
import VerticalNavbar from "@/components/verticalNavbar/verticalNavbar";
import {CONTACT_ME} from "../../../dataEntry";

type props = {
    name: string,
    number: number,
    children?: ReactNode
}

export default function SectionLayout({name,number,children}: props){
    return(
        <>
            <div className={`${name === CONTACT_ME.name && styles.ContainerContactPage} ${styles.Section}`}>
                <Header name={name} number={number} />
                <div className={`${styles.Container}`}>
                    <div className={`${styles.VerticalBarDiv}`}>
                        <VerticalNavbar />
                    </div>
                    <div className={`${styles.ContentContainer}`}>
                        {children}
                    </div>
                    <div className={`${styles.ScrollDown}`}>
                        <ScrollDown/>
                    </div>
                </div>
            </div>
        </>
    );
}