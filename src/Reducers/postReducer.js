const PostReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, uploading: true, error: false };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    case "UPDATE_START":
      return { ...state, uploading: true, error: false };
    case "UPDATE_FAIL":
      return { ...state, uploading: false, error: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "RETRIEVING_START":
      return {
        ...state,
        error: false,
      };
    case "RETRIEVING_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        error: false,
      };
    case "RETRIEVING_FAIL":
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default PostReducer;
