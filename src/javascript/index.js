import Vue from 'vue'

const firstVue = new Vue({
  data: {
    title: "hello vue!"
  }
})

firstVue.$mount(document.getElementById('app'))
