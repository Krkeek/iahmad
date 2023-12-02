import styles from './skillsPage.module.css'
import html from '../../../assets/images/skills/html.png'
import css from '../../../assets/images/skills/css.png'
import javascript from '../../../assets/images/skills/javascript.png'
import typescript from '../../../assets/images/skills/typescript.png'
import java from '../../../assets/images/skills/java.png'
import php from '../../../assets/images/skills/php.png'
import reactjs from '../../../assets/images/skills/reactjs.png'
import bootstrap from '../../../assets/images/skills/bootstrap.png'
import gsap from '../../../assets/images/skills/gsap.png'
import firebase from '../../../assets/images/skills/firebase.png'
import github from '../../../assets/images/skills/github.png'
import mysql from '../../../assets/images/skills/mysql.png'
import jquery from '../../../assets/images/skills/jquery.png'
import angular from '../../../assets/images/skills/angular.png'
import docker from '../../../assets/images/skills/docker.png'
import jetbrains from '../../../assets/images/skills/jetbrains.png'












const SkillsPage = ()=> {
return(
    <>

        <div className={'section'}>
            <div className={`${styles.Header} header`}>
                <div className={'number'}>2.</div>
                <div className={'title'}>My Skills</div>
            </div>
            <p className={`${styles.LanguageTitle}`}>Languages</p>
            <div className={`${styles.LanguageContainer}`}>
                <div className={`${styles.skill}`}><img src={html} alt={'img'}/>HTML</div>
                <div className={`${styles.skill}`}><img src={css} alt={'img'}/>CSS</div>
                <div className={`${styles.skill}`}><img src={javascript} alt={'img'}/>Javascript</div>
                <div className={`${styles.skill}`}><img src={typescript} alt={'img'}/>Typescript</div>
                <div className={`${styles.skill}`}><img src={java} alt={'img'}/>Java</div>
                <div className={`${styles.skill}`}><img src={php} alt={'img'}/>PHP</div>
            </div>
            <p className={`${styles.TechnologiesTitle}`}>Technologies</p>
            <div className={`${styles.LanguageContainer}`}>
                <div className={`${styles.skill}`}><img src={reactjs} alt={'img'}/>React JS</div>
                <div className={`${styles.skill}`}><img src={bootstrap} alt={'img'}/>Bootstrap</div>
                <div className={`${styles.skill}`}><img src={gsap} alt={'img'}/>Gsap</div>
                <div className={`${styles.skill}`}><img src={firebase} alt={'img'}/>Firebase</div>
                <div className={`${styles.skill}`}><img src={github} alt={'img'}/>Github,Git</div>
                <div className={`${styles.skill}`}><img src={mysql} alt={'img'}/>MYSQL</div>
                <div className={`${styles.skill}`}><img src={jquery} alt={'img'}/>JQuery</div>
                <div className={`${styles.skill}`}><img src={angular} alt={'img'}/>Angular 2+</div>
                <div className={`${styles.skill}`}><img src={docker} alt={'img'}/>Docker</div>
                <div className={`${styles.skill} ${styles.EmptySkill}`}></div>
                <div className={`${styles.skill}`}><img src={jetbrains} alt={'img'}/>Space jetbrains</div>
                <div className={`${styles.skill} ${styles.EmptySkill}`}></div>


            </div>

        </div>

    </>
);
}
export default SkillsPage