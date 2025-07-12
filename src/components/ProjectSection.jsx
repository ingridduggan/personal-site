import { Construction } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Website source code",
        description: "Source code of this portfolio site",
        image: "image path",
        tags: ["Skill 1", "Skill 2", "Skill 3"],
        demoUrl: "#",
        githubUrl: "#"
    },
        {
        id: 2,
        title: "Project 2",
        description: "Example",
        image: "image path",
        tags: ["Skill 1", "Skill 2", "Skill 3"],
        demoUrl: "#",
        githubUrl: "#"
    },
        {
        id: 3,
        title: "Project 3",
        description: "Example",
        image: "image path",
        tags: ["Skill 1", "Skill 2", "Skill 3"],
        demoUrl: "#",
        githubUrl: "#"
    }
]

export const ProjectSection = () => {
    return <section id="projects">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Under construction / coming soooooon
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, key) => (
                    <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                        <h3 className=" px-24 justify-center"><Construction/></h3>
                    </div>
                ))}
            </div>

            <div className='text-center mt-12'>

            </div>
        </div>
    </section>
}