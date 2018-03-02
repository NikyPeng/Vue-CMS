/**
 * Created by glzc on 2017/11/8.
 */
export default class AC {
  static install (Vue, options) {
    const ac = new AC(options)
    Object.defineProperty(Vue.prototype, '$ac', {
      get () {
        return {
          add: ac.add,
          reduce: ac.reduce
        }
      }
    })
    Vue.directive('ac', (el, binding) => {
      if (binding.value && binding.value === 1) {
        el.style.display = 'none'
      } else {
        el.style.display = 'block'
      }
    })
  }
  constructor (options) {
    const {router, roles} = options
    this.roles = roles
    this.router = router
  }
  add (x, y) {
    if (isNaN(x) || isNaN(y)) {
      return
    }
    return x + y
  }
  reduce (x, y) {
    return (isNaN(x) || isNaN(y)) ? false : (x - y)
  }
}
