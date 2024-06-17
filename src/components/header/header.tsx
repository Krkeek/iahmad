// @ts-ignore
import styles from "./header.module.css"
import {useParams} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";


type props = {
    id: string,
    name: string
    number: number
}

export default function Header(props: props){
    const params = useParams<{ lng: string }>()
    // @ts-ignore
    const { t } = useTranslation(params.lng,'sectionHeaders')



    return(
        <>
            <div className={`${styles.Header} ${props.id}_Header_animation`}>
                <div className={`${styles.Number} `}>{props.number}.</div>
                <div className={`${styles.Title}`}>{t(props.name)}</div>
            </div>
        </>
    );
}