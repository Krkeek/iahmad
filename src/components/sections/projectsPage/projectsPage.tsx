'use client'
import styles from './projectPage.module.css'
import ScrollDown from "../../scrollDown/scrollDown";
import Project from "./project/project";
import {projects} from "../../../../dataEntry";
import {useState} from "react";

export default function ProjectsPage(){

    const [isFirstExpanded, setIsFirstExpanded] = useState(true);

    return(
        <>
            <div className={`${styles.Container} section`}>
                <div className={`header`}>
                    <div className={'number'}>3.</div>
                    <div className={'title'}>My Projects</div>
                </div>
                <div className={`${styles.ContentContainer}`}>
                    <div className={`${styles.VerticalBarDiv}`}>
                        {/*<VerticalNavbar setActiveNavElement={props.setActiveNavElement}*/}
                        {/*                activeNavElement={props.activeNavElement}/>*/}
                    </div>
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
                    <div className={`${styles.ScrollDown}`}>
                        <ScrollDown/>
                    </div>

                </div>
            </div>
        </>
    );
}