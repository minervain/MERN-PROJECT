import axios from 'axios'

export const getPostAction = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:3000/getPosts')
        dispatch({ type: 'GET_POSTS', payload: data })
    } catch (error) {
        console.log(error.response) // Loglama işlemine burada dikkat edin
        console.log(error.response.data.msg)
    }
}
export const createPostAction = (postData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:3000/createPost',postData)
        dispatch({ type: 'CREATE_POST', payload: data })
    } catch (error) {
        console.log(error.response) // Loglama işlemine burada dikkat edin
        console.log(error.response.data.msg)
    }
}
export const updatPostAction = (id,postData) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`http://localhost:3000/updatePost/${id}`,postData)
        dispatch({ type: 'UPDATE_POSTS', payload: data })
    } catch (error) {
        console.log(error.response) // Loglama işlemine burada dikkat edin
        console.log(error.response.data.msg)
    }
}
export const deletePostAction = (id) => async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/deletePost/${id}`);
      dispatch({ type: 'DELETE_POST', payload: id });
    } catch (error) {
      console.log(error.response);
      console.log(error.response.data.msg);
    }
  };