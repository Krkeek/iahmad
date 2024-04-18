import styles from './skillsPage.module.css'
import ScrollDown from "../../scrollDown/scrollDown";
import Image from "next/image";
import Header from "@/components/header/header";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {languageSkills, techSkills} from "../../../../dataEntry";



const SkillsPage = ()=> {


return(
    <>

        <SectionLayout name={'My Skills'} number={2}>
                <p className={`${styles.LanguageTitle}`}>Languages</p>
                <div className={`${styles.LanguageContainer}`}>
                    {
                        languageSkills.map((skill, index)=>{

                                if (skill.name === 'Empty')
                                        return <div key={index} className={`${styles.skill} ${styles.EmptySkill}`}></div>
                                        return(
                                            <div key={index} className={`${styles.skill}`}><Image width={100} height={100} src={skill.url} alt={skill.name}/>{skill.name}</div>
                                        )


                        })}
                </div>
                <p className={`${styles.TechnologiesTitle}`}>Technologies</p>
                <div className={`${styles.LanguageContainer}`}>
                    {
                        techSkills.map((skill,index)=> {

                                if (skill.name === 'Empty')
                                        return <div key={index} className={`${styles.skill} ${styles.EmptySkill}`}></div>
                                        return (
                                            <div key={index} className={`${styles.skill}`}><Image width={100} height={100} src={skill.url} alt={skill.name}/>{skill.name}</div>
                                        )

                        })
                    }

                </div>
        </SectionLayout>

    </>
);
}
export default SkillsPage