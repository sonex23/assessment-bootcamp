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

const savePassword = (password, website, history) => async (dispatch) => {
  try {
    const data = {
      password: password,
      website: website,
    };
    const accessToken = localStorage.getItem("accessToken");
    const passwordData = await assestmenBootcampClient({
      method: "POST",
      url: "/password",
      headers: {
        Authorization: accessToken,
      },
      data: data,
    });
    console.log(passwordData);
    dispatch(fetchPassword());
    history.push("/password");
  } catch (error) {
    console.log(error);
  }
};

const deletePassword = (id) => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const deletePassword = await assestmenBootcampClient({
      method: "DELETE",
      url: `/password/${id}`,
      headers: {
        Authorization: accessToken,
      },
    });
    alert(deletePassword.data.status);
    dispatch(fetchPassword());
  } catch (error) {
    console.log(error);
  }
};

const setWebsite = (website) => {
  return {
    type: "SET_DATA_WEBSITE",
    payload: {
      website: website,
    },
  };
};

const setPassword = (password) => {
  return {
    type: "SET_DATA_PASSWORD",
    payload: {
      password: password,
    },
  };
};
const passwordAction = {
  fetchPassword,
  savePassword,
  setWebsite,
  setPassword,
  deletePassword,
};

export default passwordAction;
