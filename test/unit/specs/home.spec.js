import Vue from 'vue'
import Home from '@/components/home'

describe('home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#home').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
