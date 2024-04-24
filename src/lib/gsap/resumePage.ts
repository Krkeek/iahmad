import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {sections} from "../../../dataEntry";
export const resumePageAnimation = () =>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline()
        .fromTo(`.${sections.resumePage.id}_Header_animation`,{opacity: 0},{ opacity:1 })
        .fromTo('.ExperienceTitle_animation',{opacity: 0},{opacity:1})
        .from('.ExperienceBoxDiv_animation',{x: '-50vw', stagger: 0.5},'<')
        .from('.EducationBoxDiv_animation',{x: '50vw', stagger: 0.5},'<')
        .fromTo(`.${sections.resumePage.id}_VerticalBarDiv_animation`,{opacity: 0},{opacity:1})
        .fromTo(`.${sections.resumePage.id}_ScrollDown_animation`,{opacity: 0},{opacity:1})


    ScrollTrigger.create({
        trigger: `#${sections.resumePage.id}`,
        start: 'top 50%',
        onLeaveBack: () => tl.reverse(),
        animation: tl,
    })



}