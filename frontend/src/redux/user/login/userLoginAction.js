import assestmenBootcampClient from "../../../../API/assesment-bootcamp";
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

    const accessToken = user.data.data.token;

    localStorage.setItem("accessToken", accessToken);

    const userProfile = await assestmenBootcampClient({
      method: "GET",
      url: "/user_details",
      headers: {
        Authorization: user.data.data.token,
      },
    });

    dispatch(userProfileAction.setProfileData(userProfile.data.data));

    history.push("/profile");

    dispatch(stopLoading());
  } catch (error) {
    console.log(error);
    // dispatch(setErrorMessage(error.response.data.data.errors || ["internal server error"]));
    dispatch(stopLoading());
  }
};

const userLoginAction = {
  setEmail,
  setPassword,
  login,
};

export default userLoginAction;
