import express from 'express';
import cors from 'cors';
import projectsRoutes from './routes/projects.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/projects', projectsRoutes);

export default app;
