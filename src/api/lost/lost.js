import axios from '@/libs/api.request'

export const getGoodList = (cur, size) => {
  return axios.request({
    url: `/lost/good/getAllList?cur=${cur}&&size=${size}`,
    method: 'get'
  })
}

export const getGoodInfo = (goodId) => {
  return axios.request({
    url: `/lost/good/getInfo?goodId=${goodId}`,
    method: 'get'
  })
}

export const delGood = (goodId) => {
  return axios.request({
    url: `/lost/good/del?goodId=${goodId}`,
    method: 'post'
  })
}

export const addGood = (good) => {
  return axios.request({
    url: `/lost/good/add`,
    method: 'post',
    data: {
      good
    }
  })
}

export const editGood = (good) => {
  return axios.request({
    url: `/lost/good/edit`,
    method: 'post',
    data: {
      good
    }
  })
}

export const getCategoryList = (cur, size) => {
  return axios.request({
    url: `/lost/category/getList?cur=${cur}&&size=${size}`,
    method: 'get'
  })
}

export const getCategoryInfo = (categoryId) => {
  return axios.request({
    url: `/lost/category/getInfo?categoryId=${categoryId}`,
    method: 'get'
  })
}

export const delCategory = (categoryId) => {
  return axios.request({
    url: `/lost/category/del?categoryId=${categoryId}`,
    method: 'post'
  })
}

export const addCategory = (category) => {
  return axios.request({
    url: `/lost/category/add`,
    method: 'post',
    data: {
      category
    }
  })
}

export const editCategory = (category) => {
  return axios.request({
    url: `/lost/category/edit`,
    method: 'post',
    data: {
      category
    }
  })
}
