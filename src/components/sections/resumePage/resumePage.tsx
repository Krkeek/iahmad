import gsap from "gsap";
import styles from './resumePage.module.css'
import ResumeBox from "./resumeBox/resumeBox";
import {educations, experiences, sections} from "../../../../dataEntry";
import Image from "next/image";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {useGSAP} from "@gsap/react";
import {resumePageAnimation} from "@/lib/gsap/resumePage";
import {useParams} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";
import {EducationType} from "../../../../declarations";
export default function ResumePage(){

    const params = useParams<{ lng: string }>()
    // @ts-ignore
    const { t } = useTranslation(params.lng,'resumePage')



    useGSAP(()=>{
        const ctx = gsap.context(()=>{
            resumePageAnimation();
        })
        return () => ctx.revert();
    })

    return(
        <>

            <SectionLayout id={sections.resumePage.id} name={sections.resumePage.title} number={4} >
                        <div className={`${styles.Content}`}>
                            <div className={`${styles.Div}`}>
                                <div className={`${styles.Title} ExperienceTitle_animation`}><Image width={100} height={100} src={"/assets/resume/education.webp"} alt={'icon'}/>{t('Education')}</div>
                                {
                                    educations.map(((education: string,index) =>(
                                        <div className={`${styles.ResumeBoxDiv} ExperienceBoxDiv_animation`} key={index}>
                                            <ResumeBox dataID={education}/>
                                        </div>
                                    )))
                                }

                            </div>
                            <div className={`${styles.Div}`}>
                                <div className={`${styles.Title} ExperienceTitle_animation`}><Image width={100} height={100} src={"/assets/resume/experience.webp"} alt={'icon'}/>{t('Experience')}</div>
                                {
                                    experiences.map(((experience: string, index) =>(
                                        <div className={`${styles.ResumeBoxDiv} EducationBoxDiv_animation`} key={index}>
                                            <ResumeBox dataID={experience}/>
                                        </div>
                                    )))
                                }
                            </div>

                        </div>
            </SectionLayout>

        </>
    );
}