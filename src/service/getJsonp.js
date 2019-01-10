import getUrls from './getUrls'
import jsonp from './Jsonp'

let totalJsonp = [{
  url: getUrls.TEST1,
  data: jsonp['test1']
},
{
  url: getUrls.TEST2,
  data: jsonp['test2']
}, {
  url: getUrls.TEST3,
  data: jsonp['test3']
}]

export default function getJsonp (url) {
  // 比较一个数组,数组中的url相同的时候,返回预先定义好的数据.
  for (var i = 0; i < totalJsonp.length; i++) {
    if (url === totalJsonp[i].url) {
      return totalJsonp[i].data
    }
  }
}
