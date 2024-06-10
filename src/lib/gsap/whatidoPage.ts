import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import {sections, whatIDoText} from "../../../dataEntry";
export const whatidoPageAnimation = () =>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline()
        .fromTo(`.${sections.whatidoPage.id}_Header_animation`,{opacity: 0},{ opacity:1 })
        .fromTo('.Image_animation',{opacity: 0},{opacity: 1})
        .fromTo('.Text_animation', {opacity: 0},{opacity:1})
        .fromTo(`.${sections.whatidoPage.id}_ScrollDown_animation`,{opacity: 0},{opacity:1})
        .fromTo(`.${sections.whatidoPage.id}_VerticalBarDiv_animation`,{opacity: 0},{opacity:1})

    const textTween = gsap.to('.Text_animation',{text: {value: whatIDoText} , ease: "none", duration: 3, scrollTrigger:{
            trigger: `#${sections.whatidoPage.id}`,
            start: 'top top',
        }})

    ScrollTrigger.create({
        trigger: `#${sections.whatidoPage.id}`,
        start: 'top 50%',
        onEnterBack: () => tl.reverse(),
        animation: tl,
        onLeaveBack: () => textTween.reverse()
    });




}