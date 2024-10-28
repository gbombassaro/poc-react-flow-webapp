import axiosHandler from 'axios'

export const axios = axiosHandler.create()

axios.interceptors.response.use((response) => response, (error) => {
  // if (error.response.status === 401) {
  //   if (window.location.pathname !== '/login') {
  //     window.location.href = '/login'
  //   }
  // }
})