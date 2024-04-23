// @ts-ignore
import styles from "./header.module.css"


type props = {
    id: string,
    name: string
    number: number
}

export default function Header(props: props){
    return(
        <>
            <div className={`${styles.Header} ${props.id}_Header_animation`}>
                <div className={`${styles.Number} `}>{props.number}.</div>
                <div className={`${styles.Title}`}>{props.name}</div>
            </div>
        </>
    );
}