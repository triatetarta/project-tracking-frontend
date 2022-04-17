const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  user: user ? user : null,
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  updateSuccess: false,
};
