'use client'
import styles from './landingPage.module.css'
import Navbar from "../../navbar/navbar";
import ScrollDown from "../../scrollDown/scrollDown";
import SocialMediaIcons from "../../socialMediaIcons/socialMediaIcons";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {landingPageAnimation} from "@/lib/gsap/landingPage";
import gsap from "gsap";
import {useParams} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";
import {getOptions} from "@/app/i18n/settings";
// @ts-ignore
const LandingPage = ()=>{

    const params = useParams<{ lng: string }>()
        // @ts-ignore
    const { t } = useTranslation(params.lng,'landingPage')


    useGSAP(()=>{
        const ctx = gsap.context(()=>{
            landingPageAnimation();
        })
        return () =>  ctx.revert();
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
                                {t('Hello')}
                            </div>
                            <div className={`${styles.Name} Name_animation`}>{t('Iam')} Ahmad Hijazi</div>
                            <div className={`${styles.Description} Desc_animation`}>{t('LandingPageParagraph')}</div>
                            <a download={'Ahmad_Hijazi_Resume.pdf'}
                               href={'https://drive.google.com/uc?export=download&id=14iXawVsZrsLm-Q1gvyV8wYZv0AZvBMun'}
                                  className={`${styles.DownloadCvButton} Button_animation`}>{t('DownloadCV')}</a>

                        </div>
                    </div>
                    <div className={`${styles.RightSide}`}>
                        <Image priority={true} width={700} height={700} className={`${styles.Image} Photo_animation`} src={'/images/photo/landing.webp'} alt={'landingPageBG'}/>
                    </div>
                    <div className={`${styles.MobileSocialDiv}`}>
                        <SocialMediaIcons isHorizontal={false}/>
                    </div>

                    <div className={`${styles.ScrollDown} Scroll_animation`}>
                        <ScrollDown />
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