import assestmenBootcampClient from "../../../API/assesment-bootcamp";
import userProfileAction from "../profile/userProfileAction";

const setEmail = (email) => {
  return {
    type: "USER_LOGIN_SET_EMAIL",
    payload: {
      email: email,
    },
  };
};

const setPassword = (password) => ({
  type: "USER_LOGIN_SET_PASSWORD",
  payload: {
    password: password,
  },
});

const setErrorMessage = (errorMessage) => ({
  type: "USER_LOGIN_SET_ERROR_MESSAGE",
  payload: {
    errorMessage: errorMessage,
  },
});

const startLoading = () => ({
  type: "USER_LOGIN_START_LOADING",
});

const stopLoading = () => ({
  type: "USER_LOGIN_STOP_LOADING",
});

const login = (email, password, history) => async (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(setErrorMessage(""));

    const loginData = {
      email: email,
      password: password,
    };
    const user = await assestmenBootcampClient({
      method: "POST",
      url: "/users/login",
      data: loginData,
    });

    const accessToken = user.data.authorization;

    localStorage.setItem("accessToken", accessToken);

    dispatch(userProfileAction.setProfileData(user.data));

    history.push("/password");

    dispatch(stopLoading());
  } catch (error) {
    console.log(error);
    dispatch(stopLoading());
  }
};

const userLoginAction = {
  setEmail,
  setPassword,
  login,
};

export default userLoginAction;
