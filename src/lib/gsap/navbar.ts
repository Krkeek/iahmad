import gsap from "gsap";


export const navbarAnimation  = () =>{
    gsap.fromTo('.animation',{opacity:0},{opacity:1, duration:2})

}