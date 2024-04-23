import styles from './sectionLayout.module.css'
import Header from "@/components/header/header";
import ScrollDown from "@/components/scrollDown/scrollDown";
import {Children, ReactNode} from "react";
import VerticalNavbar from "@/components/verticalNavbar/verticalNavbar";
import {CONTACT_ME, sections} from "../../../dataEntry";

type props = {
    id: string,
    name: string,
    number: number,
    children?: ReactNode
}

export default function SectionLayout({id,name,number,children}: props){
    return(
        <>
            <div id={id} className={`${name === sections.connectPage.title && styles.ContainerContactPage} ${styles.Section} ${id}_SectionLayout_animation`}>
                <Header id={id} name={name} number={number} />
                <div className={`${styles.Container}`}>
                    <div className={`${styles.VerticalBarDiv} ${id}_VerticalBarDiv_animation`}>
                        <VerticalNavbar />
                    </div>
                    <div className={`${styles.ContentContainer}`}>
                        {children}
                    </div>
                    <div className={`${styles.ScrollDown} ${id}_ScrollDown_animation`}>
                        <ScrollDown/>
                    </div>
                </div>
            </div>
        </>
    );
}