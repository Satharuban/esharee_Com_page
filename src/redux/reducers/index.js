import { combineReducers } from 'redux';
import auth from './authReducer';
import token from './tokenReducer';
import { HOST_verification, CLIENT_verification, USER_management } from './AdminDashboard/host_verification';
// import CLIENT_verification from './AdminDashboard/client_verification';
// import USER_MANAGEMENT from './AdminDashboard/user_management';
// import users from './usersReducer'

export default combineReducers({
    auth,
    token,
    HOST_verification,
    CLIENT_verification,
    USER_management,
})