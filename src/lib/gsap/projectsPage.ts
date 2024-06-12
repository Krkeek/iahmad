import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {sections} from "../../../dataEntry";
export const projectsPageAnimation = ()=>{
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline()
        .from('.Project_animation',{y: "100vh", stagger: 0.1, duration:1})


    ScrollTrigger.create({
        trigger: `#${sections.myProjectPage.id}`,
        start: 'top 80%',
        onLeaveBack: () => {
            tl.reverse();
        },
        animation: tl,
    })


}