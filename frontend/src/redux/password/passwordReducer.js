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

    default:
      return {
        ...state,
      };
  }
};

export default passwordReducer;
