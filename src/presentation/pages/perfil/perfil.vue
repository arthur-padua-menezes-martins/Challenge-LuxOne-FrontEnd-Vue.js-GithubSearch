<template id="page-perfil">
  <section id="container-page-perfil" class="container flex_center">
    <ComponentAccountInformations/>
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

  }
})

export default PagePerfil
</script>

<style lang="sass"></style>
