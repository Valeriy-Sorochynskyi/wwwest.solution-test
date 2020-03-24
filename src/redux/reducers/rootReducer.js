import { AUTHENTICATE, UNAUTHENTICATE } from '../actions/actions';

const initState = {
  isAuthenticated: false,
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }

    case UNAUTHENTICATE: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }
};

// const newsReducer = (state = [], action) => {
//   if (action.type === LOAD_NEWS) {
//     return [...state, ...action.payload];
//   }

//   return state;
// };

// export const rootReducer = combineReducers({
//   auth: AuthReducer,
//   news: newsReducer,
// });
