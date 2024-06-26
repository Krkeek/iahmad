'use client'
import styles from './projectPage.module.css'
import Project from "./project/project";
import {projects, sections} from "../../../../dataEntry";
import {useState} from "react";
import gsap from "gsap";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {useGSAP} from "@gsap/react";
import {projectsPageAnimation} from "@/lib/gsap/projectsPage";

export default function ProjectsPage(){


    useGSAP(()=>{
        const ctx = gsap.context(()=>{
            projectsPageAnimation()
        })

        return () => ctx.revert()

    })

    const [isFirstExpanded, setIsFirstExpanded] = useState(true);

    return(
        <>
            <SectionLayout name={sections.myProjectPage.title} id={sections.myProjectPage.id} number={3} >
                        <div className={`${styles.Content}`}>
                                <div className={`${styles.Col}`}>
                                    <Project project={projects[0]} isExpand={isFirstExpanded}/>
                                    <Project project={projects[1]} isExpand={!isFirstExpanded}/>
                                    <Project project={projects[6]} isExpand={!isFirstExpanded}/>

                                </div>
                                <div id={'test'} className={`${styles.Col}`}>
                                    <Project project={projects[4]} isExpand={!isFirstExpanded}/>
                                    <Project project={projects[2]} isExpand={isFirstExpanded}/>
                                </div>
                                <div className={`${styles.Col}`}>
                                    <Project project={projects[3]} isExpand={isFirstExpanded}/>
                                    <Project project={projects[5]} isExpand={!isFirstExpanded}/>
                                </div>
                        </div>
            </SectionLayout>

        </>
    );
}