/**
 * Created by glzc on 2017/11/7.
 */
import { Base64 } from 'js-base64'
let confuse = (obj, flag) => {
  let {decode, encode} = Base64
  return flag ? decode(obj) : encode(obj)
}
export default class Storage {
  set (key, value) {
    if (value instanceof Object) {
      value = JSON.stringify(value)
    } else {
      value = String(value)
    }
    window.localStorage.setItem(key, confuse(value, false))
  }
  get (key) {
    let value = window.localStorage.getItem(key)
    if (value) {
      let res = ''
      try {
        res = JSON.parse(confuse(value, true))
      } catch (e) {
        res = confuse(value, true)
      }
      return res
    } else {
      return false
    }
  }
  remove (key) {
    key ? window.localStorage.removeItem(key) : window.localStorage.clear()
  }
}
