'use client'
 import styles from './calisthenicsPage.module.css'
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {sections} from "../../../../dataEntry";
import Image from "next/image";

export default function CalisthenicsPage(){
    return(
        <>
            <SectionLayout id={sections.calisthenicsPage.id} name={sections.calisthenicsPage.title} number={5} >
                <div className={`${styles.Container}`}>
                    <div className={`${styles.LeftSide}`}>
                        <div className={`${styles.Content}`}>
                            I am passionate about calisthenics and enjoy the physical and mental benefits it provides.
                            It&apos;s a great sport for strength training and flexibility.
                            I particularly like mastering new skills like pull-ups, push-ups, and various bodyweight exercises.
                        </div>

                    </div>
                    <div className={`${styles.RightSide}`}>
                        <Image priority={true} width={700} height={700} className={`${styles.Image} Photo_animation`}
                               src={'/assets/photo/sport.webp'} alt={'landingPageBG'}/>
                    </div>
                </div>
            </SectionLayout>
        </>
    );
}