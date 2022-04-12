import axios from "axios";

const API_URL = "/api/tickets/";

// Get ticket comments
const getComments = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}${ticketId}/comments`, config);

  return response.data;
};

// Create ticket comment
const createComment = async (commentText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${API_URL}${ticketId}/comments`,
    {
      text: commentText,
    },
    config
  );

  return response.data;
};

// Delete ticket comment
const deleteComment = async (ticketId, commentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `${API_URL}${ticketId}/comments/${commentId}`,
    config
  );

  return response.data;
};

// Update ticket comment
const updateComment = async (ticketId, commentId, commentText, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}${ticketId}/comments/${commentId}`,
    { commentText },
    config
  );

  return response.data;
};

const commentService = {
  getComments,
  createComment,
  deleteComment,
  updateComment,
};

export default commentService;
