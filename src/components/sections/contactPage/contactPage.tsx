'use client'
import styles from './contactPage.module.css'
import SocialMediaIcons from "../../socialMediaIcons/socialMediaIcons";
import ContactForm from "./contactForm/contactForm";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {CONTACT_ME, contactMeSentence, sections} from "../../../../dataEntry";
import {useGSAP} from "@gsap/react";
import {connectPageAnimation} from "@/lib/gsap/connectPage";
export default function ContactPage(){


    useGSAP(()=>{
        connectPageAnimation();
    })

    return(
        <>

            <SectionLayout id={sections.connectPage.id} name={sections.connectPage.title} number={5}>
                    <div className={`${styles.Content}`}>
                        <div className={`${styles.LeftSide} ContactText_animation`}>{contactMeSentence[0]}<span style={{color: "black"}}>{contactMeSentence[1]}</span>
                        </div>
                        <div className={`${styles.RightSide} ContactBox_animation`}>
                            <ContactForm/>
                        </div>
                    </div>
                <div className={`${styles.FooterBox}`}>
                    <div className={`${styles.SocialMediaDiv}`}><SocialMediaIcons isHorizontal={true}/></div>
                </div>
            </SectionLayout>
        </>
    );
}