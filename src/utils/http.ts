/**
 * 添加请求拦截器
 */

import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net/'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 请求地址拼接
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 超时时间
    options.timeout = 20000
    // 添加小程序请求头
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加token请求头
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

type Data<T> = {
  code: string
  msg: string
  data: T
}
enum StatusCodeEnum {
  SUCCESS = 200,
  REJECT = 300,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode >= StatusCodeEnum.SUCCESS && res.statusCode < StatusCodeEnum.REJECT) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === StatusCodeEnum.UNAUTHORIZED) {
          // 清空用户信息 跳转登录页
          uni.clearStorageSync()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      fail: (err) => {
        uni.showToast({
          title: '请求错误',
        })
        reject(err)
      },
    })
  })
}
