import ProjectCard from './ProjectCard'
import './ProjectList.css'


export default function ProjectList({projects=[]}){

   if(!projects.length){
    return <p>Nenhum projeto encontrado</p>
   }
    return (
        <section className="containerFlex"> 
           {projects.map(project=>(
             <ProjectCard key={project.id} project={project} />
           ))}
        </section>
    )
}