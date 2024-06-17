import {useParams} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";

export const sections = {
    landingPage: {
        id: "landingPage",
        title: 'Landing Page'
    },
    whatidoPage: {
        id: "whatidoPage",
        title: 'Why Me?'
    },
    mySkillPage: {
        id: "mySkillPage",
        title: 'My Skills'
    },
    myProjectPage: {
        id: "myProjectPage",
        title: 'My Projects'
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
    url: '/images/verticalbarIcons/home.webp'
};
export const WORK = {
    id: 'whatidoPage',
    name: 'Work',
    url: '/images/verticalbarIcons/work.webp'
};
export const MY_LIFE = {
    id: 'myLife',
    name: 'MyLife',
    url: '/images/verticalbarIcons/life.webp'
};
export const CONTACT_ME = {
    id: 'connectPage',
    name: 'Connect',
    url: '/images/verticalbarIcons/contact.webp'
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


export const educations = [
    {
        date: "Oct 2021 - April 2025 (Expected)",
        title: "Masters in Automotive Software Engineering",
        description: "Technische Universität Chemnitz"
    },
    {
        date: "Oct 2018 - Jun 2021",
        title: "Bachelors in Computer Engineering",
        description: "Lebanese International University"
    }
]

export const experiences = [
    {
        date: "Mar 2024 - current",
        title: "Frontend Developer",
        description: "Technische Universität Chemnitz - Internship"
    },  {
        date: "Sep 2023 - Mar 2024",
        title: "Web Engineer",
        description: "AI-SSISTANT"
    }
]

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


export const contactMeSentence = ['Lets do somthing new, different and more meaningfull or make things more practical or coneptual ? ','Just say hello!']


export const languageSkills = [
        {
            name: 'Html',
            url: '/images/skills/html.webp'
        },
        {
            name: 'CSS',
            url: '/images/skills/css.webp'
        },
        {
            name: 'Javascript',
            url: '/images/skills/javascript.webp'
        },
        {
            name: 'Typescript',
            url: '/images/skills/typescript.webp'
        },
        {
            name: 'Java',
            url: '/images/skills/java.webp'
        },
        {
            name: 'PHP',
            url: '/images/skills/php.webp'
        },
    ];


export const techSkills = [
    {
        name: 'Next JS',
        url: '/images/skills/nextjs.webp'
    },
    {
        name: 'React JS',
        url: '/images/skills/reactjs.webp'
    },
    {
        name: 'MongoDB',
        url: '/images/skills/mongo.webp'
    },
    {
        name: 'Bootstrap',
        url: '/images/skills/bootstrap.webp'
    },
    {
        name: 'Gsap',
        url: '/images/skills/gsap.webp'
    },
    {
        name: 'Restful API',
        url: '/images/skills/restapi.webp'
    },
    {
        name: 'Firebase',
        url: '/images/skills/firebase.webp'
    },
    {
        name: 'Github,Git',
        url: '/images/skills/github.webp'
    },
    {
        name: 'MYSQL',
        url: '/images/skills/mysql.webp'
    },
    {
        name: 'JQuery',
        url: '/images/skills/jquery.webp'
    },
    {
        name: 'Angular 2+',
        url: '/images/skills/angular.webp'
    },
    {
        name: 'Docker',
        url: '/images/skills/docker.webp'
    },
    {
        name: 'Figma',
        url: '/images/skills/figma.webp'
    },
    {
        name: 'Empty',
        url: '/images/skills/jetbrains.webp'
    },
    {
        name: 'Space jetbrains',
        url: '/images/skills/jetbrains.webp'
    },
];

export const whatIDoText =
    `I started playing around with code in high school, and it sparked a <span>passion</span> that stuck with me ever since. With a strong work ethic, dedication, motivation and years of experience I've been able to give my best results, consistently exceeding expectations and pushing the boundaries of what I thought possible `


export const landingPageText = "Ever wondered how ideas become stunning websites? I'm a web engineer who loves making that magic happen. Need a hand with your next project? Let's turn your vision into reality"

