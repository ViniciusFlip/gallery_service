const API_URL =  import.meta.env.VITE_API_URL
export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`);
  return response.json();
}


