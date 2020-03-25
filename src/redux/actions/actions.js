export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';
export const LOAD_NEWS = 'LOAD_NEWS';

function authenticate() {
  return {
    type: AUTHENTICATE,
  };
}

function unauthenticate() {
  return {
    type: UNAUTHENTICATE,
  };
}

export const logIn = () => async(dispatch) => {
  await window.localStorage.setItem('authenticated', 'true');
  dispatch(authenticate());
};

export const logOut = () => async(dispatch) => {
  await window.localStorage.setItem('authenticated', 'false');
  dispatch(unauthenticate());
};

export function checkAuthentication() {
  return async(dispatch) => {
    const auth = await window.localStorage.getItem('authenticated');
    const formattedAuth = typeof auth === 'string'
      ? JSON.parse(auth)
      : null;

    formattedAuth ? dispatch(authenticate()) : dispatch(unauthenticate());
  };
}
