import axios from '@/libs/api.request'

export const getGoodList = (cur, size, categoryId) => {
  return axios.request({
    url: `/lost/good/getAllList?cur=${cur}&&size=${size}`,
    method: 'get'
  })
}
