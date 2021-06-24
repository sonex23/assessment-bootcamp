import assestmenBootcampClient from "../../API/assesment-bootcamp";

const setPasswordList = (password) => {
  return {
    type: "SET_PASSWORD_LIST",
    payload: {
      passwordList: password,
    },
  };
};
const fetchPassword = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const passwordList = await assestmenBootcampClient({
      method: "GET",
      url: "/password",
      headers: {
        Authorization: accessToken,
      },
    });
    dispatch(setPasswordList(passwordList.data));
  } catch (error) {
    console.log(error);
  }
};

const passwordAction = {
  fetchPassword,
};

export default passwordAction;
