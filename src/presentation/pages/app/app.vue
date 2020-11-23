<template >
  <main id="page-app">
    <section id="container-page-app">

    <section>
      <ComponentInitialTransition v-if="ComponentInitialTransitionShow"/>
    </section>

    <section>
      <ComponentChangeTransition v-if="!ComponentInitialTransitionShow && searching"/>
    </section>

    <section id="page-app-search">
      <PageSearch @emit-searching="load" v-if="PageSearchShow && !ComponentInitialTransitionShow"/>
    </section>

    <section id="page-app-perfil">
      <PagePerfil @emit-searching="load" :body="JSON.parse(body)" v-if="!PageSearchShow && !ComponentInitialTransitionShow"/>
    </section>

    </section>
  </main>
</template>

<script lang="ts">
import Vue from '@/main/config/app'
import ComponentInitialTransition from '@/presentation/components/Transition/Initial/InitialTransition.vue'

const ComponentApp = Vue.extend({
  el: '#page-app',

  components: {
    ComponentInitialTransition
  },

  methods: {
    load (searches) {
      this.searches = searches
    }
  },

  watch: {
    searches (newValue, oldValue) {
      this.searching = true

      setTimeout(() => {
        this.body = localStorage.getItem('@body')
        console.log('this.body: ', this.body)
      }, 2000)

      setTimeout(() => {
        this.searching = !this.searching
      }, 6000)
    },

    body (newValue, oldValue) {
      if (this.searches > 0 && this.body !== '') {
        this.PageSearchShow = false
      }
    }
  },

  data () {
    return {
      PageSearchShow: true,
      ComponentInitialTransitionShow: true,
      searches: 0,
      searching: false,
      body: undefined
    }
  },

  mounted () {
    localStorage.setItem('@body', '')

    setTimeout(() => {
      this.ComponentInitialTransitionShow = !this.ComponentInitialTransitionShow
    }, 8000)
  }
})

export default ComponentApp
</script>

<style lang="sass"></style>
