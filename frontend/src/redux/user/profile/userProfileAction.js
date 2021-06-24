import assestmenBootcampClient from "../../../API/assesment-bootcamp";
const setId = (id) => {
  return {
    type: "USER_PROFILE_SET_ID",
    payload: {
      id: id,
    },
  };
};

const setFullname = (fullname) => {
  return {
    type: "USER_PROFILE_SET_FULLNAME",
    payload: {
      fullname: fullname,
    },
  };
};

const setAddress = (address) => {
  return {
    type: "USER_PROFILE_SET_ADDRESS",
    payload: {
      address: address,
    },
  };
};

const setEmail = (email) => {
  return {
    type: "USER_PROFILE_SET_EMAIL",
    payload: {
      email: email,
    },
  };
};

const updateProfile = (id, fullname, address) => async (dispatch) => {
  try {
    const profileData = {
      fullname: fullname,
      address: address,
    };

    const user = await assestmenBootcampClient({
      headers: { Authorization: localStorage.getItem("accessToken") },
      method: "PUT",
      url: `/users/${id}`,
      data: profileData,
    });

    console.log(user);
    alert("Profile berhasil di update");
  } catch (error) {
    console.log(error);
  }
};
const setProfileData = (data) => (dispatch) => {
  dispatch(setId(data.id));
  dispatch(setFullname(data.fullname));
  dispatch(setAddress(data.address));
  dispatch(setEmail(data.email));
};

const userProfileAction = {
  setFullname,
  setAddress,
  setProfileData,
  updateProfile,
};

export default userProfileAction;
