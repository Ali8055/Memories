import * as api from "../api";

//Action Creaters
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
    console.log("Car # 2");
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    console.log("CAR 5");
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log("CAR 6");
    console.log(error.message);
    console.log("CAR 7");
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id, likes) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id, likes);
    console.log("car 10");
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
