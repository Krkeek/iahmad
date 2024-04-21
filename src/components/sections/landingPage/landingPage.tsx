'use client'
import styles from './landingPage.module.css'
import Navbar from "../../navbar/navbar";
import ScrollDown from "../../scrollDown/scrollDown";
import SocialMediaIcons from "../../socialMediaIcons/socialMediaIcons";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {landingPageAnimation} from "@/lib/gsap/landingPage";

const LandingPage = ()=>{
    useGSAP(()=>{
        landingPageAnimation();
    })


    return(
        <>

            <div className={`${styles.Container} Container_animation`}>
                <div className={`${styles.Top}`}>
                    <Navbar />

                </div>
                <div className={`${styles.ContentContainer} Content_animation`}>
                    <div className={`${styles.LeftSide}`}>
                        <div className={`${styles.Content}`}>
                            <div className={`${styles.Title} Title_animation`}>
                                <div className={`${styles.Line}`}></div>
                                HELLO
                            </div>
                            <div className={`${styles.Name} Name_animation`}>I&apos;m Ahmad Hijazi</div>
                            <div className={`${styles.Description} Desc_animation`}>
                                This is Ahmad Hijazi a software developer more specifically in web development located
                                in Germany, Welcome to my portoflio go take a look.
                            </div>
                            <a download={'Ahmad_Hijazi_Resume.pdf'}
                               href={'https://drive.google.com/uc?export=download&id=14iXawVsZrsLm-Q1gvyV8wYZv0AZvBMun'}
                                  className={`${styles.DownloadCvButton} Button_animation`}>DOWNLOAD CV</a>

                        </div>
                    </div>
                    <div className={`${styles.RightSide}`}>
                        <Image priority={true} width={700} height={700} className={`${styles.Image} Photo_animation`} src={'/images/photo/landing.webp'} alt={'landingPageBG'}/>
                    </div>
                    <div className={`${styles.MobileSocialDiv}`}>
                        <SocialMediaIcons isHorizontal={false}/>
                    </div>

                    <div className={`${styles.ScrollDown} Scroll_animation`}>
                        <ScrollDown/>
                    </div>
                </div>
                <div className={`${styles.SocialDiv}`}>
                    <SocialMediaIcons isHorizontal={false}/>
                </div>
            </div>
        </>
    );
}
export default LandingPage