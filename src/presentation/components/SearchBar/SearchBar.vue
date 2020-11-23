<template>
  <section id="component-search-bar" class="container">
    <div id="container-search-bar">

      <ComponentSearchBarInput @emit-searching="emitClick"/>

    </div>
  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'
import ComponentSearchBarInput from './SearchBarInput/SearchBarInput.vue'

const ComponentSearchBar = Vue.component('ComponentSearchBar', {
  el: '#component-search-bar',

  components: {
    ComponentSearchBarInput
  },

  methods: {
    emitClick (searchs) {
      this.$emit('emit-searching', searchs)
    }
  }
})

export default ComponentSearchBar
</script>

<style src="./style.sass" lang="sass"></style>
