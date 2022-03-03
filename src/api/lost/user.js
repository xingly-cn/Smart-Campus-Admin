import axios from '@/libs/api.request'

export const getSchoolList = (cur, size) => {
  return axios.request({
    url: `/lost/school/getList?cur=${cur}&&size=${size}`,
    method: 'get'
  })
}

export const getSchoolInfo = (schoolId) => {
  return axios.request({
    url: `/lost/school/getInfo?schoolId=${schoolId}`,
    method: 'get'
  })
}

export const addSchool = (school) => {
  return axios.request({
    url: `/lost/school/add`,
    method: 'post',
    data: {
      ...school
    }
  })
}

export const delStu = (stuId) => {
  return axios.request({
    url: `/lost/stu/del?stuId=${stuId}`,
    method: 'post'
  })
}

export const editStu = (stu) => {
  return axios.request({
    url: `/lost/stu/edit`,
    method: 'post',
    data: {
      ...stu
    }
  })
}

export const getStuList = (cur, size) => {
  return axios.request({
    url: `/lost/stu/getList?cur=${cur}&&size=${size}`,
    method: 'get'
  })
}
