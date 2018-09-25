import axios from 'axios'
// 源地址
const host = ''

// 创建axios实例
const service = axios.create({
 baseURL:host,
 timeout: 5000, // 请求超时时间
 headers: {'Content-Type': 'application/json;charset=UTF-8'}
})

// 请求拦截器(request)
axios.interceptors.request.use(it =>{
  console.info(it)
}, error =>{
  return Promise.reject(error)
})

// 响应拦截器(response)
axios.interceptors.response.use(it =>{
  console.info(it)
}, error =>{
  return Promise.reject(error)
})

export default service
// axios({method:'post', url: service.login,data:{}}).then(res=>{
//   console.info(res)
// }).catch(error => {
//  console.info(error)
// })