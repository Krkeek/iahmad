import styles from './resumeBox.module.css'
import {EducationType} from "../../../../../declarations";
import {useParams} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";


type props = {
    dataID: string
}
export default function ResumeBox(props: props){

    const params = useParams<{ lng: string }>()
    // @ts-ignore
    const { t } = useTranslation(params.lng,'resumePage')



    const dataID = props.dataID

    return(
        <>

            <div className={`${styles.Container}`}>
                <div className={`${styles.Date}`}>{t(`${dataID}.date`)}</div>
                <div className={`${styles.Title}`}>{t(`${dataID}.title`)}</div>
                <div className={`${styles.Description}`}>{t(`${dataID}.description`)}</div>
            </div>
        </>
    );
}