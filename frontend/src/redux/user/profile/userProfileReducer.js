const initialState = {
  id: "",
  fullname: "",
  address: "",
  email: "",
  errorMessage: "",
  isLoading: false,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_PROFILE_SET_ID":
      return {
        ...state,
        id: action.payload.id,
      };
    case "USER_PROFILE_SET_EMAIL":
      return {
        ...state,
        email: action.payload.email,
      };
    case "USER_PROFILE_SET_FULLNAME":
      return {
        ...state,
        fullname: action.payload.fullname,
      };
    case "USER_PROFILE_SET_ADDRESS":
      return {
        ...state,
        address: action.payload.address,
      };
    case "USER_PROFILE_SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };

    case "USER_PROFILE_START_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "USER_PROFILE_STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "USER_LOGOUT":
      localStorage.removeItem("accessToken");
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
