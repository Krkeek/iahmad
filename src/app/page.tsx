'use client'
import LandingPage from "@/components/sections/landingPage/landingPage";
import WhatIDoPage from "@/components/sections/whatIDoPage/whatIDoPage";
import SkillsPage from "@/components/sections/skillsPage/skillsPage";
import ProjectsPage from "@/components/sections/projectsPage/projectsPage";
import ResumePage from "@/components/sections/resumePage/resumePage";
import ContactPage from "@/components/sections/contactPage/contactPage";
import { ReactLenis } from '@studio-freight/react-lenis'

export default function Home() {
  return (
<>
  <ReactLenis root>
    <LandingPage />
    <WhatIDoPage />
    <SkillsPage />
    <ProjectsPage />
    <ResumePage />
    <ContactPage />
  </ReactLenis>
</>
  );
}
