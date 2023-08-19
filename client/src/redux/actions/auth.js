import axios from 'axios'

export const registerAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:3000/register', authData)
        dispatch({ type: 'REGISTER', payload: data })
        window.location = '/'
    } catch (error) {
        console.log(error.response) // Loglama işlemine burada dikkat edin
        console.log(error.response.data.msg)
    }
}

export const loginAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:3000/login', authData)
        dispatch({ type: 'LOGIN', payload: data })
        window.location = '/'
    } catch (error) {
        console.log(error.response) // Loglama işlemine burada dikkat edin
        console.log(error.response.data.msg)
    }
}