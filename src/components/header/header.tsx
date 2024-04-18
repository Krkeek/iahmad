// @ts-ignore
import styles from "./header.module.css"


type props = {
    name: string
    number: number
}

export default function Header(props: props){
    return(
        <>
            <div className={`${styles.Header}`}>
                <div className={`${styles.Number}`}>{props.number}.</div>
                <div className={`${styles.Title}`}>{props.name}</div>
            </div>
        </>
    );
}