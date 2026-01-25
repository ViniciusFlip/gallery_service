import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsPath = path.join(__dirname, '../data/projects.json');

function getProjectsData() {
  const data = fs.readFileSync(projectsPath, 'utf-8');
  return JSON.parse(data);
}

export function getAllProjects(req, res) {
  const projects = getProjectsData();
  res.json(projects);
}

export function getProjectById(req, res) {
  const projects = getProjectsData();
  const project = projects.find(p => p.id == req.params.id);
  res.json(project);
}
