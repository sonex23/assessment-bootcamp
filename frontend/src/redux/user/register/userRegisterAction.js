import assestmenBootcampClient from "../../../API/assesment-bootcamp";

const resetForm = () => {
  return {
    type: "USER_REGISTER_RESET_FORM",
  };
};

const setFullname = (fullname) => {
  return {
    type: "USER_REGISTER_SET_FULLNAME",
    payload: {
      fullname: fullname,
    },
  };
};

const setAddress = (address) => {
  return {
    type: "USER_REGISTER_SET_ADDRESS",
    payload: {
      address: address,
    },
  };
};

const setEmail = (email) => {
  return {
    type: "USER_REGISTER_SET_EMAIL",
    payload: {
      email: email,
    },
  };
};

const setPassword = (password) => {
  return {
    type: "USER_REGISTER_SET_PASSWORD",
    payload: {
      password: password,
    },
  };
};

const register = (fullname, address, email, password) => async (dispatch) => {
  try {
    const submitData = {
      fullname: fullname,
      address: address,
      email: email,
      password: password,
    };

    const user = await assestmenBootcampClient({
      method: "POST",
      url: "/users/register",
      data: submitData,
    });

    console.log(user);
    alert("Registrasi Berhasil, silahkan login");
  } catch (error) {
    console.log(error);
  }
};
const userRegisterAction = {
  resetForm,
  setFullname,
  setAddress,
  setEmail,
  setPassword,
  register,
};

export default userRegisterAction;
