import styles from './socialMediaIcons.module.css'
import {NavLink} from "react-router-dom";
import instagram from '../../assets/images/socialMediaIcons/instagram.png'
import facebook from '../../assets/images/socialMediaIcons/facebook.png'
import github from '../../assets/images/socialMediaIcons/github.png'
import linkedin from '../../assets/images/socialMediaIcons/linkedin.png'
const SocialMediaIcons = ()=>{
    return(
        <>
            <div className={`${styles.Container}`}>
                <NavLink to={'#'}><img className={`${styles.Icons}`} src={instagram} alt={'instagram'}/></NavLink>
                <NavLink to={'#'}><img className={`${styles.Icons}`} src={facebook} alt={'instagram'}/></NavLink>
                <NavLink to={'#'}><img className={`${styles.Icons}`} src={github} alt={'instagram'}/></NavLink>
                <NavLink to={'#'}><img className={`${styles.Icons}`} src={linkedin} alt={'instagram'}/></NavLink>
            </div>

        </>
    );
}
export default SocialMediaIcons