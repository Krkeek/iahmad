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
                        <Image width={550} height={550} className={`${styles.Image}`} src={"/assets/photo/whatido.webp"}
                               alt={'img'}/>
                    </div>
                    <div className={`${styles.ContentContainer}`}>
                        <p className={'Text_animation'}>
                            I started playing around with code in high school, and it sparked a <span>passion</span> that stuck with me ever since. With a strong work ethic, dedication, motivation and years of experience I&apos;ve been able to give my best results, consistently exceeding expectations and pushing the boundaries of what I thought possible.
                        </p>
                    </div>
                </div>
            </SectionLayout>
        </>
    );
}
export default WhatIDoPage