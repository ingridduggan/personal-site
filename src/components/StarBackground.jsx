import { useState, useEffect } from "react";

//star has id, size, x, y, opacity, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([])

    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor
            (window.innerWidth*window.innerHeight/10000); //generate no. of stars based on screen size
        
        const newStars = []

        for(let i=0; i<numberOfStars; i++){
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, //generate size between 1 and 4 px
                x: Math.random() * 100, //place in any position between 0 and 100%
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, //random opacity between 50% and 100%
                animationDuration: Math.random() * 4 + 2 //between 2-6 seconds
            });

            setStars(newStars);
        }
    }
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}/>
        ))}
    </div>
}