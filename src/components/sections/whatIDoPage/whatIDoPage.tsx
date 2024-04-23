'use client'
import styles from './whatIDoPage.module.css'
import Image from "next/image";
import SectionLayout from "@/components/sectionLayout/sectionLayout";
import {useGSAP} from "@gsap/react";
import {whatidoPageAnimation} from "@/lib/gsap/whatidoPage";
import {sections, WORK} from "../../../../dataEntry";
import gsap from "gsap";
const WhatIDoPage = ()=>{
    useGSAP(()=>{
        const ctx = gsap.context(()=>{
            whatidoPageAnimation();

        })
        return () => ctx.revert();
    })


    return(
        <>
            <SectionLayout id={sections.whatidoPage.id} name={sections.whatidoPage.title} number={1} >
                <div className={`${styles.Content}`}>
                    <div className={`${styles.ImgContainer} Image_animation`}>
                        <Image width={550} height={550} className={`${styles.Image}`} src={"/images/photo/whatido.webp"}
                               alt={'img'}/>
                    </div>
                    <div className={`${styles.ContentContainer}`}>
                        <p className={'Text_animation'}></p>
                    </div>
                </div>
            </SectionLayout>
        </>
    );
}
export default WhatIDoPage