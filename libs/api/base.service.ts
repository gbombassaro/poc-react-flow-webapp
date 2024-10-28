import api from '@/libs/api/base.controller'

class BaseService {
  prefix = ''
  api = api

  get(prefix = this.prefix, options) {
    return api.get(prefix, options)
  }

  patch(body, prefix = this.prefix, options) {
    return api.patch(`${prefix}`, body, options)
  }

  post(body, prefix = this.prefix, options) {
    return api.post(prefix, body, options)
  }

  put(body, prefix = this.prefix, options) {
    return api.put(`${prefix}`, body, options)
  }

  delete(prefix = this.prefix, body = {}) {
    return api.delete(prefix, body)
  }
}

export default BaseService
