'use client'
import styles from './projectPage.module.css'
import ScrollDown from "../../scrollDown/scrollDown";
import Project from "./project/project";
import {projects} from "../../../../dataEntry";
import {useState} from "react";
import Header from "@/components/header/header";
import SectionLayout from "@/components/sectionLayout/sectionLayout";

export default function ProjectsPage(){

    const [isFirstExpanded, setIsFirstExpanded] = useState(true);

    return(
        <>
            <SectionLayout name={'My Projects'} number={3} >
                        <div className={`${styles.Content}`}>
                                <div className={`${styles.Col}`}>
                                    <Project project={projects[0]} isExpand={isFirstExpanded}/>
                                    <Project project={projects[1]} isExpand={!isFirstExpanded}/>
                                    <Project project={projects[6]} isExpand={!isFirstExpanded}/>

                                </div>
                                <div className={`${styles.Col}`}>
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