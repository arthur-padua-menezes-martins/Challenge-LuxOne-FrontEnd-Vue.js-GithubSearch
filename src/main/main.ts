import Vue from './config/app'
import Search from '@/presentation/pages/search/search.vue'

new Vue({
  el: document.querySelector('#app') as Element,

  components: {Search},

  render (create) {
    return create('Search')
  }
})



