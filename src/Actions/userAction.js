import * as UserApi from "../api/UserApi";

export const UpdateUser = (id, formdata) => async (dispatch) => {
  dispatch({ type: "UPDATING_START" });
  try {
    const { data } = await UserApi.updateUserRoute(id, formdata);

    dispatch({ type: "UPDATING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPDATING_ERROR" });
  }
};

export const followUser = (id, data) => async (dispatch) => {
  dispatch({ type: "FOLLOW_USER", data: data });
  UserApi.followUserRoute(id, data);
};
export const unfollowUser = (id, data) => async (dispatch) => {
  dispatch({ type: "UNFOLLOW_USER", data: data });
  UserApi.unfollowUserRoute(id, data);
};
