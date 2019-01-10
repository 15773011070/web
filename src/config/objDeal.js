//  obj序列化拼接字符串
export function objDeal (obj) {
    let ret = ''
    for (let it in obj) {
      ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(obj[it]) + '&'
    }
    return ret
  }
  