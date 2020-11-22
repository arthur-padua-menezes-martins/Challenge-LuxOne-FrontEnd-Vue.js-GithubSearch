<template>
  <section id="component-search-bar">
    <div id="container-search-bar">
      <SearchBarInput/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'
import SearchBarInput from './SearchBarInput/SearchBarInput.vue'

const ComponentSearchBar = Vue.component('ComponentSearchBar', {
  el: '#component-search-bar',

  components: {
    SearchBarInput
  },

  methods: {

  }
})

export default ComponentSearchBar
</script>

<style src="./style.sass" lang="sass"></style>
