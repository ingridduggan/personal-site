import { Guitar, ShieldUser, AppWindow } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="px-4 py-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Software Engineer</h3>
                    <p className="text-muted-foreground">
                        I'm a 23 year old junior developer working in the field of container security,
                        building systems to manage container vulnerabilities in both the 
                        private and public cloud.
                    </p>

                    <p className="text-muted-foreground">
                        I mainly work with Python, Java (Spring Boot), and Kubernetes, and 
                        am currently learning frontend technologies like ReactJS on the side.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cv-button">
                            Get In Touch!
                        </a>

                        <a href="https://github.com/ingridduggan" target="_blank" className="cosmic-button">
                            My Github
                        </a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <ShieldUser className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Cybersecurity</h4>
                                <p className="text-muted-foreground">
                                    I work in container image scanning and help customers to
                                    identify and remediate their app's vulnerabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <AppWindow className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    I have experience building web apps using ReactJS, 
                                    Tailwind CSS, SCSS, and Supabase.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Guitar className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Hobbies</h4>
                                <p className="text-muted-foreground">
                                    I'm also interested in graphic design, playing the guitar,
                                    baking, and running!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}