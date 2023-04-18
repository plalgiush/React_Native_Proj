import axios from '../configs/axios';

export const user_login = async (data) => {
  try {
    const result = await axios('/login', {
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
