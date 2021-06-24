const initialState = {
  passwordList: [],
  passwordData: {
    website: "",
    password: "",
  },
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PASSWORD_LIST":
      return {
        ...state,
        passwordList: action.payload.passwordList,
      };
    case "SET_DATA_WEBSITE":
      return {
        ...state,
        passwordData: {
          ...state.passwordData,
          website: action.payload.website,
        },
      };

    case "SET_DATA_PASSWORD":
      return {
        ...state,
        passwordData: {
          ...state.passwordData,
          password: action.payload.password,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default passwordReducer;
