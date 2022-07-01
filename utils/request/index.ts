import axios from 'axios'
const apiRoot = 'https://lrandcom.microcms.io/api/v1'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Method = (url: string, config?: any) => any
type Request = {
  get: Method
  post: Method
  put: Method
  delete: Method
}

export const request: Request = {
  async get(url, config = {}) {
    return await axios({
      method: 'GET',
      url: `${apiRoot}${url}`,
      ...config
    })
      .then(res => res.data)
      .catch(err => err)
  },
  async post(url, config = {}) {
    return await axios({
      method: 'POST',
      url: `${apiRoot}${url}`,
      ...config
    })
      .then(res => res.data)
      .catch(err => err)
  },
  async put(url, config = {}) {
    return await axios({
      method: 'PUT',
      url: `${apiRoot}${url}`,
      ...config
    })
      .then(res => res.data)
      .catch(err => err)
  },
  async delete(url, config = {}) {
    return await axios({
      method: 'DELETE',
      url: `${apiRoot}${url}`,
      ...config
    })
      .then(res => res.data)
      .catch(err => err)
  }
}
