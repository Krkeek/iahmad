import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin";
import {sections} from "../../../dataEntry";

export const skillsPageAnimation = () =>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline()
        .fromTo(`.${sections.mySkillPage.id}_Header_animation`,{opacity: 0},{ opacity:1 })
        .fromTo(`.LanguageTitle_animation`,{opacity: 0},{ opacity:1 })
        .fromTo(`.TechnologiesTitle_animation`,{opacity: 0},{ opacity:1 })
        .fromTo(`.${sections.mySkillPage.id}_VerticalBarDiv_animation`,{opacity: 0},{opacity:1})
        .fromTo(`.${sections.mySkillPage.id}_ScrollDown_animation`,{opacity: 0},{opacity:1})

    ScrollTrigger.create({
        trigger: `#${sections.mySkillPage.id}`,
        start: 'top 70%',
        end: 'top middle',
        scrub: true,
        animation: tl,
    })


    const tl2 = gsap.timeline()
        .fromTo('.Border_animation',{ width: 0},{ width: "100%",duration: 0.5})
        .fromTo('.SkillIcon_animation',{ opacity: 0},{ opacity: 1 ,duration: 0.5})
        .fromTo('.SkillIcon_Title',{ opacity: 0},{ opacity: 1 ,duration: 0.5})


    ScrollTrigger.create({
        trigger: `#${sections.mySkillPage.id}`,
        start: 'top 30%',
        animation: tl2,
    })






}