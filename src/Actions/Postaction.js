import * as PostApi from "../api/Postapi";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START" });
  try {
    console.log(id, "hee");

    const data = await PostApi.getTimelinePostsRoute(id);
    console.log(data);
    dispatch({ type: "RETRIEVING_SUCCESS", data: data.data });
  } catch (error) {
    dispatch({ type: "RETRIEVING_FAIL" });
    console.log(error);
  }
};
