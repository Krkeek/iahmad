import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {contactMeSentence, sections, whatIDoText} from "../../../dataEntry";
export const connectPageAnimation = () =>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline()
        .fromTo(`.${sections.connectPage.id}_Header_animation`,{opacity: 0},{ opacity:1 })
        .fromTo(`.ContactText_animation`,{opacity: 0},{ opacity:1 })
        .fromTo(`.ContactBox_animation`,{opacity: 0},{ opacity:1 })
        .fromTo(`.${sections.connectPage.id}_VerticalBarDiv_animation`,{opacity: 0},{opacity:1})
        .fromTo(`.${sections.connectPage.id}_ScrollDown_animation`,{opacity: 0},{opacity:1})

    ScrollTrigger.create({
        trigger: `#${sections.connectPage.id}`,
        start: 'top 50%',
        onLeaveBack: () => tl.reverse(),
        animation: tl,
    })


}