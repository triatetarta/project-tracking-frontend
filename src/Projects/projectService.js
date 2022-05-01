import axios from "axios";
import { API_GLOBAL_URL } from "../constants/api_url";

const API_URL = `${API_GLOBAL_URL}/api/projects/`;

// Create new project
const createProject = async (projectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, projectData, config);

  return response.data;
};

// Get all projects
const getAllProjects = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const projectService = {
  createProject,
  getAllProjects,
};

export default projectService;
