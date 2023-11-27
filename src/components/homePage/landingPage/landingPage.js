import styles from './landingPage.module.css'
import landingPageBG from '../../../assets/images/landingPageBG.png'

import SocialMediaIcons from "../../socialMediaIcons/socialMediaIcons";

const LandingPage = ()=>{
    return(
        <>
            <div className={`section ${styles.LandingPageSection}`}>
                <div className={`${styles.Content}`}>
                    <div className={`${styles.Title}`}>
                        <div className={`${styles.Line}`}></div>HELLO
                    </div>
                    <div className={`${styles.Name}`}>I'm Ahmad Hijazi</div>
                    <div className={`${styles.Description}`}>
                        This is Ahmad Hijazi a software developer more specifically in web development located in Germany, Welcome to my portoflio go take a look.
                    </div>
                    <div className={`${styles.ButtonDiv}`}>
                        <button type={'button'} className={`${styles.DownloadCvButton}`}>DOWNLOAD CV</button>
                    </div>
                </div>
                <div className={`${styles.BackgroundPhoto}`}>
                    <img src={landingPageBG} alt={'landingPageBG'} />
                </div>
                <div className={`${styles.SocialMediaIcons}`}>
                    <SocialMediaIcons />
                </div>
            </div>
        </>
    );
}
export default LandingPage