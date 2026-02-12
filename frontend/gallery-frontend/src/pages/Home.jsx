import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectList from "../components/ProjectList";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then(data => setProjects(data))
      .finally(() => setLoading(false));
  }, []);

   console.log('PROJECTS:', projects);

  return (
    <main>
      <h1>Meu Portfólio</h1>

      {loading && <p>Carregando projetos...</p>}

      {!loading && <ProjectList projects={projects} />}
    </main>
  );
}
