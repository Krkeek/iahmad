import styles from './project.module.css'
import {ProjectType} from '../../../../../declarations'

type props = {
    isExpand: boolean,
    project: ProjectType
}

export default function Project(props: props){

    const project = props.project;
    return(
        <>
            <div style={props.isExpand ? { height: "60%"} : { height: "15%"}} className={`${styles.Container}`}>
                <div className={`${styles.Date}`}>{project.date}</div>
                <a target={"_blank"}  href={project.demo} className={`${styles.Title}`}>{project.title}</a>
                <div className={`${styles.Description}`}>{!props.isExpand ? " " : project.description}</div>
            </div>
        </>
    );
}