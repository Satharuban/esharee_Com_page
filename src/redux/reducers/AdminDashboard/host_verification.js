
// import ACTIONS from '../../actions/index';


export const HOST_verification = (state = false, action) => {
    if (action.type === 'ACTIVE') {
        state = true;
    } if(action.type === 'NON_ACTIVE'){
        state = false;
    }
    return state;
}

export const CLIENT_verification = (state = false, action) => {
    if (action.type === 'CLIENT') {
        state = true;
    } if(action.type === 'NON_ACTIVE'){
        state = false;
    }
    return state;
}

export const USER_management = (state = false, action) => {
    if (action.type === 'USER') {
        state = true;
    } if(action.type === 'NON_ACTIVE'){
        state = false;
    }
    return state;
}

// export default HOST_verification;