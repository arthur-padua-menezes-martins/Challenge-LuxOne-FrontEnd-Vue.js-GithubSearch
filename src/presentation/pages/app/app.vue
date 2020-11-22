<template id="page-app">
  <main id="container-page-app">

    <section>
      <ComponentInitialTransition v-if="ComponentInitialTransitionShow"/>
    </section>

    <section id="page-app-search">
      <PageSearch v-if="ComponentInitialTransitionShow === false"/>
    </section>

    <section id="page-app-perfil">
      <PagePerfil v-if="PageSearchShow === false && ComponentInitialTransitionShow === false"/>
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

  },

  data () {
    return {
      ComponentInitialTransitionShow: true,
      PageSearchShow: true
    }
  },

  mounted () {
    setTimeout(() => {
      this.ComponentInitialTransitionShow = !this.ComponentInitialTransitionShow
    }, 8000)
  }
})

export default ComponentApp
</script>

<style lang="sass">
@import "@/presentation/style/_global.sass"
</style>
