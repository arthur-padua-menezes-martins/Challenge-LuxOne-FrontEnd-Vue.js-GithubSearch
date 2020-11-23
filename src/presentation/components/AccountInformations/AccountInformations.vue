<template>
  <section id="component-account-informations" class="container flex_center">
    <div id="container-account-informations">

      <ComponentSearchBar @emit-searching="emitClick"/>
      <ComponentPerfilBox></ComponentPerfilBox>
      <ComponentRepositoriesBox></ComponentRepositoriesBox>

    </div>
  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'
import ComponentPerfilBox from './PerfilBox/PerfilBox.vue'
import ComponentRepositoriesBox from './RepositoriesBox/RepositoriesBox.vue'

const AccountInformations = Vue.component('AccountInformations', {
  el: '#component-account-informations',

  components: {
    ComponentPerfilBox,
    ComponentRepositoriesBox
  }
})

export default AccountInformations
</script>

<style src="./style.sass" lang="sass"></style>
