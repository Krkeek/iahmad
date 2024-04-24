import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import {sections, whatIDoText} from "../../../dataEntry";
export const whatidoPageAnimation = () =>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline()
        .fromTo(`.${sections.whatidoPage.id}_Header_animation`,{opacity: 0},{ opacity:1 })
        .to('.Image_animation',{opacity: 1},'<')
        .fromTo('.Text_animation', {opacity: 0},{opacity:1})
        .fromTo(`.${sections.whatidoPage.id}_ScrollDown_animation`,{opacity: 0},{opacity:1})
        .fromTo(`.${sections.whatidoPage.id}_VerticalBarDiv_animation`,{opacity: 0},{opacity:1})
        // .to(`.${sections.whatidoPage.id}_SectionLayout_animation`,{opacity:0})

    ScrollTrigger.create({
        trigger: `#${sections.whatidoPage.id}`,
        start: 'top 70%',
        end: 'top middle',
        scrub: true,
        animation: tl
    });


    gsap.to('.Text_animation',{text: {value: whatIDoText} , ease: "none", duration: 5, scrollTrigger:{
            trigger: `#${sections.whatidoPage.id}`,
            start: 'top top',
        }})


}