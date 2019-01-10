// import { BASE } from "../store/mutation-types";
import getJsonp from './getJsonp'
var debug = false
var BASE = 'https://52.81.0.22/uwo-web/'
export default async (url = '', data = {}, type = 'GET', method = 'fetch', flag = false) => {
  // 如果开启了debug模式,返回一个预先定义好的虚假jsonp格式.
  if (debug) {
    let data = getJsonp(url)
    // 有数据返回数据.
    if (data) {
      return data
    }
  }
  let token = localStorage.getItem('token')
  // 将type转换成大写字幕,默认为GET请求.
  type = type.toUpperCase()
  // 改变url的前缀
  url = BASE + url
  /*
      如果是get请求或者post用字符串拼接传参时候的处理
  */
  if (type === 'GET' || type === 'POST2') {
    let dataStr = '' // 数据拼接字符串
    // 获取到对象所有的key值,然后拼接dataStr字符串作为get请求的参数.
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    // 如果dataStr不为空截取0到&符号之间,然后添加?号,组成标准的get请求参数.
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&')) // 去掉最后一个多余的&
      url = url + '?' + dataStr
      // if(type == 'POST2'){
      //     url = url
      // }else{
      //     url = url + '?' + dataStr;
      // }
    }
  }
  // 若post用字符串拼接传参,type='POST2'
  if (type === 'POST2') {
    type = 'POST'
  }
  /*
      配置请求体相关信息
  */
  if (window.fetch && method === 'fetch') { // 浏览器支持fetch发送请求时的处理
    let requestConfig
    if (!flag) {
      requestConfig = {
        credentials: 'include',
        method: type,
        headers: {
          'Accept': 'application/json;',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          token
        },
        mode: 'cors',
        cache: 'force-cache'// 优先匹配缓存中的请求
      }
    } else {
      requestConfig = {
        credentials: 'include',
        method: type,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        mode: 'cors',
        cache: 'force-cache'
      }
    }
    var formData = function (data) {
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      // 如果dataStr不为空截取0到&符号之间,然后添加?号,组成标准的get请求参数.
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))// 去掉最后一个多余的&
        return dataStr
      }
    }
    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: formData(data)
      })
    }
    try {
      const response = await fetch(url, requestConfig)
      const responseJson = await response.json()
      // 这里把数据进行过滤,我只对最终的结果数据敢兴趣
      if (responseJson['code'] === 200) {
        return responseJson
      } else if (responseJson['code'] !== 200) {
        window.vue.$message({
          message: responseJson['msg'],
          center: true,
          type: 'warning'
        })
        window.vue.$router.push('/')
      } else {
        window.vue.$message({
          message: responseJson['msg'],
          center: true,
          type: 'warning'
        })
      }
    } catch (error) {
      throw new Error(error)
    }
  } else { // 浏览器支持fetch发送请求时的处理
    /*
        返回一个promise对象
    */
    return new Promise((resolve, reject) => {
      // 创建一个请求对象.
      let requestObj
      requestObj = createCORS(type, url)
      /*  判断window是否存在xmlHttpRequest对象,主要是为了解决浏览器的兼容性问题.
          if (window.XMLHttpRequest) {
            // 存在创建它
            requestObj = new XMLHttpRequest();
          } else {
            // 不存在创建ActiveXObject
            requestObj = new ActiveXObject;
          }
      */
      function createCORS (method, url) {
        var xhr = new XMLHttpRequest()
        if ('withCredentials' in xhr) {
          xhr.open(method, url, true)
          xhr.withCredentials = true
        } else if (typeof XDomainRequest !== 'undefined') {
          let xhr = new XDomainRequest()
          xhr.open(method, url)
        } else {
          xhr = null
        }
        return xhr
      }
      // 所发送的参数.
      let sendData = null
      // 判断类型是否是POST对象,如果是POST对象的话,就将数据对象json序列化.
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }
      // 打开网络请求
      //   requestObj.open(type, url, true);
      // 设置网络请求头 设置请求头的时候,需要设置token值
      requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8')// application/json;charset=utf-8  application/x-www-form-urlencoded
      requestObj.setRequestHeader('token', token)
      // 发送请求数据.

      requestObj.send(sendData)
      // 网络请求结束.
      requestObj.onreadystatechange = () => {
        console.log(requestObj.status)
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            // 这里把数据进行过滤,我只对最终的结果数据敢兴趣

            if (obj['code'] === 200) {
              resolve(obj['data'])
            } else if (obj['code'] === 205) {
              window.vue.$message({
                message: obj['msg'],
                center: true,
                type: 'warning'
              })
              window.vue.$router.push('/')
            } else {
              window.vue.$message({
                message: obj['msg'],
                center: true,
                type: 'warning'
              })
            }
          } else {
            // 网络失败直接将失败对象返回
            reject(requestObj)
          }
        } else {
          window.vue.$message({
            message: '异常导致请求失败',
            center: true,
            type: 'warning'
          })
          window.vue.$router.push('/')
        }
      }
    })
  }
}
