import styles from './scrollDown.module.css'
export default function  ScrollDown() {
    return(
        <>
            <div className={`${styles.Animation}`}>
                <div className={`${styles.Scroll}`}>
                    Scroll down
                </div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                     clipRule="evenodd">
                    <path
                        d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/>
                </svg>
            </div>
        </>
    );
}
