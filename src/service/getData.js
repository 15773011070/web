// api接口获取数据
import fetch from './fetch'
import getUrls from './getUrls'
// const pageSize = 10;

export const login = (obj) => fetch(getUrls.login, obj, 'POST')
