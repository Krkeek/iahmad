import styles from './socialMediaIcons.module.css'
import Link from "next/link";
import Image from "next/image";
import {socialMedia} from "../../../dataEntry";

interface props {
    isHorizontal: boolean
}
const SocialMediaIcons = (props: props)=>{

    return(
        <>
            <div className={`${styles.Container} ${props.isHorizontal ? styles.HorizontalContainer : " "}`}>
                {
                    socialMedia.map((platform,index)=>(
                        <Link key={index} target={'_blank'} href={platform.url}><Image width={100} height={100} className={`${styles.Icons}`} src={`/images/socialMediaIcons/${platform.name}.webp`} alt={platform.name}/></Link>
                    ))
                }

            </div>
        </>
    );
}
export default SocialMediaIcons