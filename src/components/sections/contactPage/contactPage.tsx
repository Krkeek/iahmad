import styles from './contactPage.module.css'
import SocialMediaIcons from "../../socialMediaIcons/socialMediaIcons";
import ContactForm from "./contactForm/contactForm";
export default function ContactPage(){
    return(
        <>
            <div className={` ${styles.Container} section`}>
                <div className={`header`}>
                    <div className={'number'}>5.</div>
                    <div className={'title'}>Contact me</div>
                </div>

                <div className={`${styles.ContentContainer}`}>
                    <div className={`${styles.VerticalBarDiv}`}>
                        {/*<VerticalNavbar setActiveNavElement={props.setActiveNavElement}*/}
                        {/*                activeNavElement={props.activeNavElement}/>*/}
                    </div>
                    <div className={`${styles.Content}`}>
                        <div className={`${styles.LeftSide}`}>
                            Lets do somthing new, different and more meaningfull or make things more practical or
                            coneptual ? <span style={{color: "black"}}>Just say hello !</span>
                            <div className={`${styles.SocialMediaDiv}`}><SocialMediaIcons isHorizontal={true}/></div>

                        </div>
                        <div className={`${styles.RightSide}`}>
                            <ContactForm/>
                        </div>

                    </div>
                </div>
                <div className={`${styles.FooterBox}`}></div>

            </div>
        </>
    );
}