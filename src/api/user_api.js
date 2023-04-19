import { axios, baseURL }  from '../configs/axios';

export const user_login = async (data) => {
  try {
    const result = await axios(`${baseURL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    })
    return result
  } catch (error) {
    console.error(error)
  }
};

export const user_register = async (data) => {
  try {
    const result = await axios(`${baseURL}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      data: data
    })
    return result
  } catch (error) {
    console.error(error)
  }
}
