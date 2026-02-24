import './ProjectCard.css'
 

export default function ProjectCard({project}){

 
    return (

        <article className='card' 
        
        style={{
            backgroundImage:`url(${project.coverImage})`
        }}
        
        >
            <h3>{project.title}</h3>
          

            {project.url && 
            
            (<a href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"

            >Visite</a>)}
        </article>
    )
}