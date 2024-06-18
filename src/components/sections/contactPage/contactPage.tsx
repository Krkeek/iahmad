'use client'
import styles from './contactPage.module.css'
import SocialMediaIcons from "../../socialMediaIcons/socialMediaIcons";
import ContactForm from "./contactForm/contactForm";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {sections} from "../../../../dataEntry";
import {useGSAP} from "@gsap/react";
import {connectPageAnimation} from "@/lib/gsap/connectPage";
import {useParams} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";
export default function ContactPage(){


    const params = useParams<{ lng: string }>()
    // @ts-ignore
    const { t } = useTranslation(params.lng,'contactPage')



    useGSAP(()=>{
        connectPageAnimation();
    })

    return(
        <>

            <SectionLayout id={sections.connectPage.id} name={sections.connectPage.title} number={5}>
                    <div className={`${styles.Content}`}>
                        <div className={`${styles.LeftSide} ContactText_animation`}>{t('Sentence')}<span style={{color: "black"}}>{t('Word')}</span>
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