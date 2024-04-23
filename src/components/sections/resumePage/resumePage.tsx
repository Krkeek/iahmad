import styles from './resumePage.module.css'
import ScrollDown from "../../scrollDown/scrollDown";
import ResumeBox from "./resumeBox/resumeBox";
import {educations, experiences, sections} from "../../../../dataEntry";
import Image from "next/image";
import Header from "@/components/header/header";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
export default function ResumePage(){
    return(
        <>

            <SectionLayout id={sections.resumePage.id} name={sections.resumePage.title} number={4} >
                        <div className={`${styles.Content}`}>
                            <div className={`${styles.Div}`}>
                                <div className={`${styles.Title}`}><Image width={100} height={100} src={"/images/resume/education.webp"} alt={'icon'}/>Education</div>
                                {
                                    educations.map(((education,index) =>(
                                        <div className={`${styles.ResumeBoxDiv}`} key={index}>
                                            <ResumeBox data={education}/>
                                        </div>
                                    )))
                                }

                            </div>
                            <div className={`${styles.Div}`}>
                                <div className={`${styles.Title}`}><Image width={100} height={100} src={"/images/resume/experience.webp"} alt={'icon'}/>Experience</div>
                                {
                                    experiences.map(((experience, index) =>(
                                        <div className={`${styles.ResumeBoxDiv}`} key={index}>
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