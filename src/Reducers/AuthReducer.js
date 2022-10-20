const AuthReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      console.log(action.data);
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true };
    case "UPDATING_START":
      return { ...state, updateloading: true, error: false };
    case "UPDATING_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        updateloading: false,
        error: false,
      };
    case "UPDATING_FAIL":
      return { ...state, updateloading: false, error: true };
    case "FOLLOW_USER":
      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            following: [...state.authData.user.following, action.data._id],
          },
        },
      };
    case "UNFOLLOW_USER":
      const filteredfollowing = state.authData[0].user.following.filter(
        (personId) => personId !== action.data._id
      );
      console.log(filteredfollowing, "filtre");
      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            following: [
              ...state.authData.user.following.filter(
                (personID) => personID !== action.data._id
              ),
            ],
          },
        },
      };
    case "LOG_OUT":
      localStorage.clear();
      console.log("Hitted the logout");
      return { ...state, authData: null, loading: false, error: false };
    default:
      return state;
  }
};

export default AuthReducer;
