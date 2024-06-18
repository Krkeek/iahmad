import {useParams} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";

export const sections = {
    landingPage: {
        id: "landingPage",
        title: 'Landing Page'
    },
    whatidoPage: {
        id: "whatidoPage",
        title: 'WhyMe?'
    },
    mySkillPage: {
        id: "mySkillPage",
        title: 'MySkills'
    },
    myProjectPage: {
        id: "myProjectPage",
        title: 'MyProjects'
    },
    resumePage: {
        id: "resumePage",
        title: 'Resume'
    },
    connectPage: {
        id: "connectPage",
        title: 'Connect'
    },
}



export const HOME = {
    id: 'home',
    name: 'Home',
    url: '/assets/verticalbarIcons/home.webp'
};
export const WORK = {
    id: 'whatidoPage',
    name: 'Work',
    url: '/assets/verticalbarIcons/work.webp'
};
export const MY_LIFE = {
    id: 'myLife',
    name: 'MyLife',
    url: '/assets/verticalbarIcons/life.webp'
};
export const CONTACT_ME = {
    id: 'connectPage',
    name: 'Connect',
    url: '/assets/verticalbarIcons/contact.webp'
};


export const projects = [
    {
        date: "May 2024",
        title: "Finanzu",
        description: "Revolutionize your financial journey with my Money Management Web Application, combining seamless expense tracking, intuitive budgeting, and sleek design.",
        demo: "https://www.finanzu.me/"
    },
    {
        date: "Nov 2023",
        title: "My Portfolio",
        description: "My personal portfolio - explore my professional journey, education, and skills in one place. Connect with me easily through the contact page for opportunities or collaborations.",
        demo: "https://www.iahmad.de"
    },
    {
        date: "Nov 2023",
        title: "FRIENDS",
        description: "Creating a vibrant online community for international students in Chemnitz, Germany, fostering connections and organizing weekly events.",
        demo: "https://tucfriends.de/"
    },
    {
        date: "Sep 2023",
        title: "Korbinian's Portfolio",
        description: "Crafted a personalized portfolio website for my Manager Korbinian Mifka. This platform showcases his culinary journey, achievements, and expertise in a visually compelling and professional manner.",
        demo: "https://drive.google.com/file/d/1kBW3J2Vhh089gDn_JXz3lNPJzJuKlyVH/view"
    },
    {
        date: "Dec 2023",
        title: "ClosetHub",
        description: "A user-friendly solution for efficient closet organization. Quickly categorize, assess item status, and make decisions effortlessly. Experience the ease of managing your closet like never before!",
        demo: "https://closethub-7dde7.web.app"
    },
    {
        date: "Mar 2022",
        title: "RecipeBook",
        description: "It's a simple recipe book website where friends can contribute their favorite recipes. Feel free to add your recipes and join in - still in progress.",
        demo: "https://recipebook-krkeek.web.app/auth"
    }
    ,
    {
        date: "Oct 2020",
        title: "Customized Shopping Website",
        description: "It allows users to customize their clothes before buying it. Gone are the days of settling for ready-made options—here, customers create their own designs, ensuring a personalized and satisfying shopping experience.",
        demo: "https://github.com/Krkeek/Bachelors-Senior-Project"
    }

];


export const educations = [ 'ASE','CE' ]
export const experiences = ['FD','WE' ]

export const languageSkills = [
        {
            name: 'Html',
            url: '/assets/skills/html.webp'
        },
        {
            name: 'CSS',
            url: '/assets/skills/css.webp'
        },
        {
            name: 'Javascript',
            url: '/assets/skills/javascript.webp'
        },
        {
            name: 'Typescript',
            url: '/assets/skills/typescript.webp'
        },
        {
            name: 'Java',
            url: '/assets/skills/java.webp'
        },
        {
            name: 'PHP',
            url: '/assets/skills/php.webp'
        },
    ];


export const techSkills = [
    {
        name: 'Next JS',
        url: '/assets/skills/nextjs.webp'
    },
    {
        name: 'React JS',
        url: '/assets/skills/reactjs.webp'
    },
    {
        name: 'MongoDB',
        url: '/assets/skills/mongo.webp'
    },
    {
        name: 'Bootstrap',
        url: '/assets/skills/bootstrap.webp'
    },
    {
        name: 'Gsap',
        url: '/assets/skills/gsap.webp'
    },
    {
        name: 'Restful API',
        url: '/assets/skills/restapi.webp'
    },
    {
        name: 'Firebase',
        url: '/assets/skills/firebase.webp'
    },
    {
        name: 'Github,Git',
        url: '/assets/skills/github.webp'
    },
    {
        name: 'MYSQL',
        url: '/assets/skills/mysql.webp'
    },
    {
        name: 'JQuery',
        url: '/assets/skills/jquery.webp'
    },
    {
        name: 'Angular 2+',
        url: '/assets/skills/angular.webp'
    },
    {
        name: 'Docker',
        url: '/assets/skills/docker.webp'
    },
    {
        name: 'Figma',
        url: '/assets/skills/figma.webp'
    },
    {
        name: 'Empty',
        url: '/assets/skills/jetbrains.webp'
    },
    {
        name: 'Space jetbrains',
        url: '/assets/skills/jetbrains.webp'
    },
];


export const socialMedia = [
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/ahmadhijazii'
    },
    {
        name: 'github',
        url: 'https://www.github.com/Krkeek'
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/ahmad_hijazii_/'

    }
];
