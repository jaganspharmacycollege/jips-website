import React from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import Introduction from '@/components/home/Introduction';
//import VisionMission from '@/components/home/VisionMission';
import AcademicCells from '@/components/home/AcademicCells';
import PedagogyFramework from '@/components/home/PedagogyFramework';
import Departments from '@/components/home/Departments';
import PlacementStats from '@/components/home/PlacementStats';
import CampusGlimpse from '@/components/home/CampusGlimpse';
import TopRecruiters from '@/components/home/TopRecruiters';
import ResearchInnovation from '@/components/home/ResearchInnovation';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Introduction />
      {/*<VisionMission />*/}
      <AcademicCells />
      <PedagogyFramework />
      <Departments />
      <CampusGlimpse />
      <PlacementStats />
      <ResearchInnovation />
      <TopRecruiters />

      <WhyChooseUs />
    </>
  );
}