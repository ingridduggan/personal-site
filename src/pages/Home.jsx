import React from 'react';
import { ToggleButton } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground';

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/*Theme Toggle*/}
        <ToggleButton />

        {/*Background Effects*/}
        <StarBackground />

        {/*Navbar*/}

        {/*Main Content*/}
        
        {/*Footer*/}
        
        </div>;
}