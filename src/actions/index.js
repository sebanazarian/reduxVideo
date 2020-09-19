// payload la infor que vamos transmitir; type es el nombre de lo que vamos a realizar

export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload,
});

export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});


export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload,
});


export const getVideoSource = (payload) => ({
  type: "GET_VIDEO_SOURCE",
  payload,
});


