<template>
  <section id="component-search-bar-input">
    <div id="container-search-bar-input">
      <SearchBarAutoComplete/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'
import SearchBarAutoComplete from '../SearchBarAutoComplete/SearchBarAutoComplete.vue'

const SearchBarInput = Vue.component('SearchBarInput', {
  el: '#component-search-bar-input',

  components: {
    SearchBarAutoComplete
  },

  methods: {

  }
})

export default SearchBarInput
</script>

<style src="./style.sass" lang="sass"></style>
