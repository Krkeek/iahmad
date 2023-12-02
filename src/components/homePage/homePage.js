import Navbar from "../navbar/navbar";
import LandingPage from "./landingPage/landingPage";
import WhatIDoPage from "./whatIDoPage/whatIDoPage";
import SkillsPage from "./skillsPage/skillsPage";

const HomePage = ()=>{
    return(
        <>
            <Navbar />
            <LandingPage />
            <WhatIDoPage />
            <SkillsPage />
        </>
    )
}
export default HomePage;