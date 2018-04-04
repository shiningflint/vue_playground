import Vue from 'vue'
import App from './App.vue'

const firstVue = new Vue({
  render: exec => exec(App)
})

firstVue.$mount(document.getElementById('app'))
