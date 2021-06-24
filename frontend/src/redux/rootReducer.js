import { combineReducers } from "redux";

import userRegisterReducer from "./user/register/userRegisterReducer";
import userLoginReducer from "./user/login/userLoginReducer";
import userProfileReducer from "./user/profile/userProfileReducer";
import passwordReducer from "./password/passwordReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  passwordList: passwordReducer,
});

export default rootReducer;
