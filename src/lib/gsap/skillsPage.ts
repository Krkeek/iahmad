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
        .fromTo(`.LanguageContainer_animation`,{opacity: 0},{ opacity:1 })
        .fromTo(`.TechnologiesTitle_animation`,{opacity: 0},{ opacity:1 })
        .fromTo(`.TechnologiesContainer_animation`,{opacity: 0},{ opacity:1 })
        .fromTo(`.${sections.mySkillPage.id}_VerticalBarDiv_animation`,{opacity: 0},{opacity:1})
        .fromTo(`.${sections.mySkillPage.id}_ScrollDown_animation`,{opacity: 0},{opacity:1})





    ScrollTrigger.create({
        trigger: `#${sections.mySkillPage.id}`,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: true,
        animation: tl
    })





}