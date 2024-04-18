import styles from './sectionLayout.module.css'
import Header from "@/components/header/header";
import ScrollDown from "@/components/scrollDown/scrollDown";
import {Children, ReactNode} from "react";

type props = {
    name: string,
    number: number,
    children?: ReactNode
}

export default function SectionLayout({name,number,children}: props){
    return(
        <>
            <div className={`${name === 'Contact me' && styles.ContainerContactPage} ${styles.Section}`}>
                <Header name={name} number={number} />
                <div className={`${styles.Container}`}>
                    <div className={`${styles.VerticalBarDiv}`}>
                        {/*<VerticalNavbar setActiveNavElement={props.setActiveNavElement} activeNavElement={props.activeNavElement} />*/}
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