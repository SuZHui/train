import Axios from 'axios';

const client = Axios.create()
client.interceptors.response.use(res => {
  return res.data
})
export default {
  getNewsList (page = 1, limit = 12) {
    return client.get('https://61e80b15e32cd90017acbfb7.mockapi.io/enterprise/news', { params: { page, limit } })
  },
  getNewsItem (id) {
    return client.get(`https://61e80b15e32cd90017acbfb7.mockapi.io/enterprise/news/${id}`)
  },
  getHots () {
    return client.get('https://61e80b15e32cd90017acbfb7.mockapi.io/enterprise/home')
  }
}