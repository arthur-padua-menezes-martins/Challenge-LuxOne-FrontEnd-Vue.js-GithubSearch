import Vue from '@/main/config/global'
import App from '@/presentation/pages/App/App.vue'

new Vue({
  el: document.querySelector('#app') as Element,

  components: {
    App
  },

  render (create) {
    return create('App')
  }
})
