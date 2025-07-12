import React from 'react';
import { ToggleButton } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground';
import { NavBar } from '../components/NavBar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/*Theme Toggle*/}
        <ToggleButton />

        {/*Background Effects*/}
        <StarBackground />

        {/*Navbar*/}
        <NavBar />

        {/*Main Content*/}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </main>
        
        {/*Footer*/}
        
        </div>;
}