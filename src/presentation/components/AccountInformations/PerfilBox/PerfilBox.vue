<template>
  <section id="component-perfil-box">

    <section id="container-perfil-box" class="mov_relative">

      <div id="container-perfil-box-image">

        <div class="black_fillter"></div>

        <div class="image">
          <img src="" alt="perfil">
         </div>

      </div>

    </section>

  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'

const ComponentPerfilBox = Vue.component('ComponentPerfilBox', {
  el: '#component-perfil-box',

  data () {
    return {

    }
  }
})

export default ComponentPerfilBox
</script>

<style src="./style.sass" lang="sass"></style>
