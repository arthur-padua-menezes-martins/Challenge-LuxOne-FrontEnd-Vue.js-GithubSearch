<template>
  <section id="component-repositories-box" class="flex-center">
    <div id="container-repositories-box" class="flex-center flex-column">
    </div>
  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'

const ComponentRepositoriesBox = Vue.component('ComponentRepositoriesBox', {
  el: '#component-repositories-box',

  data () {
    return {

    }
  },

  props: ['body']
})

export default ComponentRepositoriesBox
</script>

<style src="./style.sass" lang="sass"></style>
