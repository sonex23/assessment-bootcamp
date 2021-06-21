import { combineReducers } from "redux";

import userRegisterReducer from "./user/register/userRegisterReducer";
import userLoginReducer from "./user/login/userLoginReducer";
import userProfileReducer from "./user/profile/userProfileReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
