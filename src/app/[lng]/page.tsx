'use client'
import LandingPage from "@/components/sections/landingPage/landingPage";
import WhatIDoPage from "@/components/sections/whatIDoPage/whatIDoPage";
import SkillsPage from "@/components/sections/skillsPage/skillsPage";
import ProjectsPage from "@/components/sections/projectsPage/projectsPage";
import ResumePage from "@/components/sections/resumePage/resumePage";
import ContactPage from "@/components/sections/contactPage/contactPage";
import { Analytics } from '@vercel/analytics/react';
import {useRouter} from "next/router";
import {useEffect} from "react";
import CalisthenicsPage from "@/components/sections/calisthenicsPage/calisthenicsPage";

export default function Home() {

  return (
<>
    <LandingPage />
    <WhatIDoPage />
    <SkillsPage />
    <ProjectsPage />
    <ResumePage />
    <ContactPage />
    <Analytics />
</>
  );
}
