import { axios } from '@/libs/api/axios'

// function getAuthCookie(cookies) {
//   const decodedCookies = cookies.split(';')
//   const cookie = decodedCookies.find((i) => i.match('xbetauth=')) || ''
//   const token = cookie.replace('xbetauth=', '')
//   return token
// }

class BaseController {
  url = process.env.NEXT_PUBLIC_WEBAPP_API_ADRESS

  async fetch(url: string, options) {
    // const token = getAuthCookie(window.document.cookie)
    const requestOp = { ...options }
    requestOp.headers = options.headers || {}
    requestOp.method = options.method || {}
    requestOp.params = options.params || {}
    requestOp.validateStatus = options.validateStatus || undefined

    if (!requestOp.headers['Content-Type']) {
      requestOp.headers['Content-Type'] = 'application/json'
    }
    // if (token !== '') {
    //   requestOp.headers['xbetid'] = token
    // }

    const {
      headers: requestHeaders,
      body: requestBody,
      method: requestMethod,
      params: requestParams,
    } = requestOp

    const requestUrl = options.local ? url : `${this.url}/${url}`

    return await axios({
      headers: requestHeaders,
      url: requestUrl,
      data: requestBody,
      method: requestMethod,
      params: requestParams
    })
      .then((response) => {
        // console.log('Response >', response)
        return response ? response.data : null
      })
      .catch((error) => {
        console.log('Error >', error)
        return error
      })
  }

  get(url, options) {
    return this.fetch(url, { ...options, method: 'GET' })
  }

  patch(url, body, options) {
    return this.fetch(url, { ...options, method: 'PATCH', body })
  }

  post(url, body, options = {}) {
    return this.fetch(url, { ...options, method: 'POST', body })
  }

  put(url, body, options) {
    return this.fetch(url, { ...options, method: 'PUT', body })
  }

  delete(url, body = {}) {
    return this.fetch(url, { method: 'DELETE', body })
  }
}

export default new BaseController()
