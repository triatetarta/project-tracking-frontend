const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
