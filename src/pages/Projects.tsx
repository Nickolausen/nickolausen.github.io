import ProjectCard from "../components/ProjectCard"

function Projects() 
{
    return <>
        <section id="projects" className="pt-20">
            <h1 className="text-5xl font-bold uppercase">Projects</h1>
            <div className="pt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-8">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </section>
    </>
}

export default Projects