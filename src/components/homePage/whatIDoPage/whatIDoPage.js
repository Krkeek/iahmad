import styles from './whatIDoPage.module.css'
import img from '../../../assets/images/whatIDo.png'
const WhatIDoPage = ()=>{
    return(
        <>
        <div className={'section'}>
            <div className={`header`}>
                <div className={`number`}>1.</div>
                <div className={`title`}>What i Do</div>
            </div>

            <div className={`${styles.Container}`}>
                <div className={`${styles.ImgContainer}`}>
                    <img src={img} alt={'img'} />

                </div>
                <div className={`${styles.ContentContainer}`}>
                    <p>A dedicated <span>web developer</span> driven by a passion for crafting elegant and functional websites. With a keen eye for design and a commitment to clean, efficient code, I bring ideas to life in the digital realm. I thrive on turning concepts into seamless user experiences and enjoy staying abreast of the latest web development trends.</p>

                </div>
            </div>



        </div>
        </>
    );
}
export default WhatIDoPage