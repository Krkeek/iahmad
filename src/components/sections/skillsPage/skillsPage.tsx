import styles from './skillsPage.module.css'
import ScrollDown from "../../scrollDown/scrollDown";



const SkillsPage = ()=> {
return(
    <>

        <div className={'section'}>
            <div className={`header`}>
                <div className={'number'}>2.</div>
                <div className={'title'}>My Skills</div>
            </div>
            <div className={`${styles.ContentContainer}`}>
                <div className={`${styles.VerticalBarDiv}`}>
                    {/*<VerticalNavbar setActiveNavElement={props.setActiveNavElement} activeNavElement={props.activeNavElement}/>*/}
                </div>
                <div className={`${styles.Content}`}>
                    <p className={`${styles.LanguageTitle}`}>Languages</p>
                    <div className={`${styles.LanguageContainer}`}>
                        <div className={`${styles.skill}`}><img src={"/images/skills/html.png"} alt={'img'}/>HTML</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/css.png"} alt={'img'}/>CSS</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/javascript.png"} alt={'img'}/>Javascript</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/typescript.png"} alt={'img'}/>Typescript</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/java.png"} alt={'img'}/>Java</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/php.png"} alt={'img'}/>PHP</div>
                    </div>
                    <p className={`${styles.TechnologiesTitle}`}>Technologies</p>
                    <div className={`${styles.LanguageContainer}`}>
                        <div className={`${styles.skill}`}><img src={"/images/skills/reactjs.png"} alt={'img'}/>React JS</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/bootstrap.png"} alt={'img'}/>Bootstrap</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/gsap.png"} alt={'img'}/>Gsap</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/firebase.png"} alt={'img'}/>Firebase</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/github.png"} alt={'img'}/>Github,Git</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/mysql.png"} alt={'img'}/>MYSQL</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/jquery.png"} alt={'img'}/>JQuery</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/angular.png"} alt={'img'}/>Angular 2+</div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/docker.png"} alt={'img'}/>Docker</div>
                        <div className={`${styles.skill} ${styles.EmptySkill}`}></div>
                        <div className={`${styles.skill}`}><img src={"/images/skills/jetbrains.png"} alt={'img'}/>Space jetbrains</div>
                        <div className={`${styles.skill} ${styles.EmptySkill}`}></div>
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
export default SkillsPage