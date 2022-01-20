import Axios from 'axios';

const client = Axios.create()
client.interceptors.response.use(res => {
  return res.data
})
export default {
  getNewsList (page = 1) {
    if (page > 3 || page < 1) {
      return Promise.reject(new Error('暂无数据'))
    }
    return client.get('https://61e80b15e32cd90017acbfb7.mockapi.io/enterprise/news', { params: { page } })
  },
  getNewsItem (id) {
    return client.get(`https://61e80b15e32cd90017acbfb7.mockapi.io/enterprise/news/${id}`)
  }
}