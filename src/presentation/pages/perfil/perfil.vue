<template>
  <section id="page-perfil" class="container flex-center flex-column">

    <ComponentAccountInformations @emit-searching="emitClick" :body="body"/>

  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'
import ComponentAccountInformations from '@/presentation/components/AccountInformations/AccountInformations.vue'

const PagePerfil = Vue.component('PagePerfil', {
  el: '#page-perfil',

  components: {
    ComponentAccountInformations
  },

  methods: {
    emitClick (searchs) {
      this.$emit('emit-searching', searchs)
    }
  },

  props: ['body']
})

export default PagePerfil
</script>

<style lang="sass"></style>
