import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center
    justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ingrid</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Duggan</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    A backend developer working in cybersecurity and
                    learning frontend technologies in my free time :)
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">View My Work</a>
                    </div>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="https://github.com/ingridduggan/personal-site" target="_blank" 
                        className="cosmic-button">View Website Code</a>
                    </div>
                </div>
            </div>

        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
        flex flex-col items-center animate-bounce">
            <span className="text-small text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}