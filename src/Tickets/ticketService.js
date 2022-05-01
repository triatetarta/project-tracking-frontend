import axios from "axios";
import { API_GLOBAL_URL } from "../constants/api_url";

const API_URL = `${API_GLOBAL_URL}/api/tickets/`;

// Create new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, ticketData, config);

  return response.data;
};

// Get tickets
const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get single Ticket
const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}${ticketId}`, config);

  return response.data;
};

// Get all tickets
const getAllTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}allTickets`, config);

  return response.data;
};

// Delete single ticket
const deleteTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}${ticketId}`, config);

  return response.data;
};

// Update single ticket
const updateTicket = async (ticketId, ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${API_URL}${ticketId}`, ticketData, config);

  return response.data;
};

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
  getAllTickets,
  updateTicket,
  deleteTicket,
};

export default ticketService;
