import gsap from "gsap";
import styles from './resumePage.module.css'
import ResumeBox from "./resumeBox/resumeBox";
import {educations, experiences, sections} from "../../../../dataEntry";
import Image from "next/image";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {useGSAP} from "@gsap/react";
import {resumePageAnimation} from "@/lib/gsap/resumePage";
export default function ResumePage(){

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
                                <div className={`${styles.Title} ExperienceTitle_animation`}><Image width={100} height={100} src={"/images/resume/education.webp"} alt={'icon'}/>Education</div>
                                {
                                    educations.map(((education,index) =>(
                                        <div className={`${styles.ResumeBoxDiv} ExperienceBoxDiv_animation`} key={index}>
                                            <ResumeBox data={education}/>
                                        </div>
                                    )))
                                }

                            </div>
                            <div className={`${styles.Div}`}>
                                <div className={`${styles.Title} ExperienceTitle_animation`}><Image width={100} height={100} src={"/images/resume/experience.webp"} alt={'icon'}/>Experience</div>
                                {
                                    experiences.map(((experience, index) =>(
                                        <div className={`${styles.ResumeBoxDiv} EducationBoxDiv_animation`} key={index}>
                                            <ResumeBox data={experience}/>
                                        </div>
                                    )))
                                }
                            </div>

                        </div>
            </SectionLayout>

        </>
    );
}