import * as Authapi from "../api/Authrequest";
export const Login = (FormData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await Authapi.LoginRoute(FormData);
    await dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};
export const SignUp = (FormData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await Authapi.SignUpRoute(FormData);
    console.log(data);
    dispatch({
      type: "AUTH_SUCCESS",
      data: data,
    });
  } catch (error) {
    // console.log(error.response.data);

    dispatch({ type: "AUTH_FAIL" });
  }
};

export const Logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
