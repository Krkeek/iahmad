import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin";

export const landingPageAnimation = () =>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(TextPlugin)
    const tl = gsap.timeline()
        .fromTo('.Title_animation',{opacity: 0},{opacity:1, duration:0.5})
        .fromTo('.Name_animation',{opacity: 0, yPercent: 30},{opacity:1, yPercent: 0, duration:0.5},'<')
        .fromTo('.Photo_animation',{opacity: 0},{opacity:1, duration:0.5},'<')
        .fromTo('.Desc_animation',{opacity: 0},{opacity:1,duration:0.7})
        .fromTo('.Button_animation',{opacity: 0},{opacity:1, duration:1})
        .fromTo('.Social_animation',{x: "-10vw"},{x: 0, duration:1, stagger: 0.2},'<-1')
        .fromTo('.Brand_animation',{y: "-10vh"},{y:0, duration:1},'-=2.5')
        .fromTo('.NavElement_animation',{y: "-10vh"},{y:0, stagger: 0.3 , duration:0.5}, '<')
        .fromTo('.Scroll_animation',{opacity: 0},{opacity:1, duration: 1},'<')
        .fromTo('.Container_animation',{ opacity: 1},{opacity: 0, scrollTrigger:{
                trigger: '.Container_animation',
                start: 'middle top',
                end: 'bottom top',
                scrub: true
            }})
    tl.play();

}