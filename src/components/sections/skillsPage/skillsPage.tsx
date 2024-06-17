'use client'
import styles from './skillsPage.module.css'
import Image from "next/image";
import gsap from "gsap";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {languageSkills, sections, techSkills} from "../../../../dataEntry";
import {useGSAP} from "@gsap/react";
import {skillsPageAnimation} from "@/lib/gsap/skillsPage";
import {useParams} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";



const SkillsPage = ()=> {

        const params = useParams<{ lng: string }>()
        // @ts-ignore
        const { t } = useTranslation(params.lng,'skillsPage')



        useGSAP(()=>{
                const ctx = gsap.context(()=>{
                        skillsPageAnimation();
                })

                return ()=> ctx.revert()
        })



return(
    <>

        <SectionLayout name={sections.mySkillPage.title} number={2} id={sections.mySkillPage.id}>
                <p className={`${styles.LanguageTitle} LanguageTitle_animation`}>{t('lang')}</p>
                <div className={`${styles.LanguageContainer} LanguageContainer_animation`}>
                    {
                        languageSkills.map((skill, index)=>{

                                if (skill.name === 'Empty')
                                        return <div key={index} className={`${styles.skill} ${styles.EmptySkill}`}></div>
                                        return(
                                            <div key={index} className={`${styles.skill} Skill_animation`}><div className={`${styles.Border} Border_animation`}><Image className={`SkillIcon_animation`} width={100} height={100} src={skill.url} alt={skill.name}/><span className={'SkillIcon_Title'}>{skill.name}</span></div></div>
                                        )


                        })}
                </div>
                <p className={`${styles.TechnologiesTitle} TechnologiesTitle_animation`}>{t('tech')}</p>
                <div className={`${styles.LanguageContainer} TechnologiesContainer_animation`}>
                    {
                        techSkills.map((skill,index)=> {

                                if (skill.name === 'Empty')
                                        return <div key={index} className={`${styles.skill} ${styles.EmptySkill}`}></div>
                                        return (
                                            <div key={index} className={`${styles.skill} Skill_animation`}>
                                                    <div className={`${styles.Border} Border_animation`}>
                                                    <Image
                                                className={`SkillIcon_animation`} width={100} height={100}
                                                src={skill.url} alt={skill.name}/><span className={'SkillIcon_Title'}>{skill.name}</span>
                                                    </div></div>
                                        )

                        })
                    }

                </div>
        </SectionLayout>

    </>
);
}
export default SkillsPage