import styles from './resumeBox.module.css'
import {EducationType} from "../../../../../declarations";


type props = {
    data: EducationType
}
export default function ResumeBox(props: props){

    const data = props.data

    return(
        <>

            <div className={`${styles.Container}`}>
                <div className={`${styles.Date}`}>{data.date}</div>
                <div className={`${styles.Title}`}>{data.title}</div>
                <div className={`${styles.Description}`}>{data.description}</div>
            </div>
        </>
    );
}