const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS_ERROR":
      console.log("login failed");
      return {
        ...state,
        authError: "Login Failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };

    default:
      return state;
  }
};

export default authReducer;
