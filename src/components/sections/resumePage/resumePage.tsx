import styles from './resumePage.module.css'
import ScrollDown from "../../scrollDown/scrollDown";
import ResumeBox from "./resumeBox/resumeBox";
import {educations, experiences} from "../../../../dataEntry";
import Image from "next/image";
export default function ResumePage(){
    return(
        <>
            <div className={`section`}>
                <div className={`header`}>
                    <div className={'number'}>4.</div>
                    <div className={'title'}>Resume</div>
                </div>
                <div className={`${styles.ContentContainer}`}>
                    <div className={`${styles.VerticalBarDiv}`}>
                        {/*<VerticalNavbar setActiveNavElement={props.setActiveNavElement} activeNavElement={props.activeNavElement}/>*/}
                    </div>
                    <div className={`${styles.Content}`}>
                        <div className={`${styles.Div}`}>
                            <div className={`${styles.Title}`}><Image width={100} height={100} src={"/images/resume/education.png"} alt={'icon'}/>Education</div>
                            {
                                educations.map(((education,index) =>(
                                    <div className={`${styles.ResumeBoxDiv}`} key={index}>
                                        <ResumeBox data={education}/>
                                    </div>
                                )))
                            }

                        </div>
                        <div className={`${styles.Div}`}>
                            <div className={`${styles.Title}`}><Image width={100} height={100} src={"/images/resume/experience.png"} alt={'icon'}/>Experience</div>
                            {
                                experiences.map(((experience, index) =>(
                                    <div className={`${styles.ResumeBoxDiv}`} key={index}>
                                        <ResumeBox data={experience}/>
                                    </div>
                                )))
                            }
                        </div>

                    </div>
                    <div className={`${styles.ScrollDown}`}>
                        <ScrollDown/>
                    </div>
                </div>
            </div>
        </>
    );
}