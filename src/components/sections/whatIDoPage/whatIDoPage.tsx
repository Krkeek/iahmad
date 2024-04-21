'use client'
import styles from './whatIDoPage.module.css'
import Image from "next/image";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {useGSAP} from "@gsap/react";
import {whatidoPageAnimation} from "@/lib/gsap/whatidoPage";
const WhatIDoPage = ()=>{
    useGSAP(()=>{
        whatidoPageAnimation();
    })


    return(
        <>
            <SectionLayout name={'What i do'} number={1} >
                <div id={'test'} className={`${styles.Content}`}>
                    <div className={`${styles.ImgContainer}`}>
                        <Image width={550} height={550} className={`${styles.Image}`} src={"/images/photo/whatido.webp"}
                               alt={'img'}/>
                    </div>
                    <div className={`${styles.ContentContainer}`}>
                        <p>A dedicated <span>web developer</span> driven by a passion for crafting elegant and
                            functional websites. With a keen eye for design and a commitment to clean, efficient code, I
                            bring ideas to life in the digital realm. I thrive on turning concepts into seamless user
                            experiences and enjoy staying abreast of the latest web development trends.</p>
                    </div>
                </div>
            </SectionLayout>
        </>
    );
}
export default WhatIDoPage