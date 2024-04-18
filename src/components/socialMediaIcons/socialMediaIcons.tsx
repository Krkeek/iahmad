import styles from './socialMediaIcons.module.css'
import Link from "next/link";

interface props {
    isHorizontal: boolean
}
const SocialMediaIcons = (props: props)=>{
    return(
        <>
            <div className={`${styles.Container} ${props.isHorizontal ? styles.HorizontalContainer : " "}`}>
                <Link target={'_blank'} href={'https://www.linkedin.com/in/ahmadhijazii'}><img className={`${styles.Icons}`} src={"/images/socialMediaIcons/linkedin.png"} alt={'linkedin'}/></Link>
                <Link target={'_blank'} href={'https://www.github.com/Krkeek'}><img className={`${styles.Icons}`} src={"/images/socialMediaIcons/github.png"} alt={'github'}/></Link>
                <Link target={'_blank'} href={'https://www.instagram.com/ahmad_hijazii_/'}><img className={`${styles.Icons}`} src={"/images/socialMediaIcons/instagram.png"} alt={'instagram'}/></Link>

            </div>

        </>
    );
}
export default SocialMediaIcons