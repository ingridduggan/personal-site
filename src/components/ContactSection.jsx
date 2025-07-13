import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    return  <section id="contact" className="px-4 py-4 relative">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Contact <span className="text-primary">Me</span>
                    </h2>

                    <div className="flex justify-center">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:duggan.ingrid@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    duggan.ingrid@gmail.com
                                </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Linkedin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                <h4 className="font-medium">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/ingrid-duggan/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                                    Ingrid Duggan
                                </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Github className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                <h4 className="font-medium">GitHub</h4>
                                <a href="https://github.com/ingridduggan" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                                    ingridduggan
                                </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                <h4 className="font-medium">Location</h4>
                                <span className="text-muted-foreground hover:text-primary transition-colors">
                                    Dublin, Ireland
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
}