import styles from './landingPage.module.css'
import Navbar from "../../navbar/navbar";
import ScrollDown from "../../scrollDown/scrollDown";
import SocialMediaIcons from "../../socialMediaIcons/socialMediaIcons";
import Image from "next/image";

const LandingPage = ()=>{

    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.Top}`}>
                    <Navbar />
                </div>
                <div className={`${styles.ContentContainer}`}>
                    <div className={`${styles.LeftSide}`}>
                        <div className={`${styles.Content}`}>
                            <div className={`${styles.Title}`}>
                                <div className={`${styles.Line}`}></div>
                                HELLO
                            </div>
                            <div className={`${styles.Name}`}>I'm Ahmad Hijazi</div>
                            <div className={`${styles.Description}`}>
                                This is Ahmad Hijazi a software developer more specifically in web development located
                                in Germany, Welcome to my portoflio go take a look.
                            </div>
                            <a download={'Ahmad_Hijazi_Resume.pdf'}
                               href={'https://drive.google.com/uc?export=download&id=14iXawVsZrsLm-Q1gvyV8wYZv0AZvBMun'}
                                  className={`${styles.DownloadCvButton}`}>DOWNLOAD CV</a>

                        </div>
                    </div>
                    <div className={`${styles.RightSide}`}>
                        <Image width={4000} height={4000} className={`${styles.Image}`} src={'/images/landingPageBG2.PNG'} alt={'landingPageBG'}/>
                    </div>
                    <div className={`${styles.MobileSocialDiv}`}>
                        <SocialMediaIcons isHorizontal={false}/>
                    </div>

                    <div className={`${styles.ScrollDown}`}>
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