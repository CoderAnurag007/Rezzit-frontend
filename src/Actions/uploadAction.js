import * as UploadApi from "../api/uploadApi.js";

export const uploadImage = (data) => async (dispatch) => {
  try {
    let newdata = await UploadApi.uploadImageRoute(data);
    console.log(newdata, " new post data");
  } catch (error) {
    console.log(error.message);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadApi.uploadPostRoute(data);
    console.log(newPost.data, " new post data");
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
