import styles from './contactPage.module.css'
import SocialMediaIcons from "../../socialMediaIcons/socialMediaIcons";
import ContactForm from "./contactForm/contactForm";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {contactMeSentence} from "../../../../dataEntry";
export default function ContactPage(){
    return(
        <>

            <SectionLayout name={'Contact me'} number={5}>
                    <div className={`${styles.Content}`}>
                        <div className={`${styles.LeftSide}`}>{contactMeSentence[0]}<span style={{color: "black"}}>{contactMeSentence[1]}</span>
                            <div className={`${styles.SocialMediaDiv}`}><SocialMediaIcons isHorizontal={true}/></div>

                        </div>
                        <div className={`${styles.RightSide}`}>
                            <ContactForm/>
                        </div>
                    </div>
                    <div className={`${styles.FooterBox}`}></div>
            </SectionLayout>
        </>
    );
}