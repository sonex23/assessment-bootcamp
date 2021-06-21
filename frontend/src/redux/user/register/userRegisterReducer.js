const initialState = {
  fullname: "",
  address: "",
  email: "",
  password: "",
  errorMessage: "",
  isLoading: false,
};

const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGISTER_SET_FULLNAME":
      return {
        ...state,
        fullname: action.payload.fullname,
      };
    case "USER_REGISTER_SET_ADDRESS":
      return {
        ...state,
        address: action.payload.address,
      };
    case "USER_REGISTER_SET_EMAIL":
      return {
        ...state,
        email: action.payload.email,
      };
    case "USER_REGISTER_SET_PASSWORD":
      return {
        ...state,
        password: action.payload.password,
      };
    case "USER_REGISTER_SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };

    case "USER_REGISTER_START_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "USER_REGISTER_STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userRegisterReducer;
