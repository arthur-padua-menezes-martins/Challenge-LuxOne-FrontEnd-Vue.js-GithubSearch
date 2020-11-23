<template id="page-search">
  <section>
    <ComponentSearchBar @emit-searching="emitClick"/>
  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'

const PageSearch = Vue.component('PageSearch', {
  el: '#page-search',

  components: {

  },

  methods: {
    emitClick (searchs) {
      this.$emit('emit-searching', searchs)
    }
  }
})

export default PageSearch
</script>

<style lang="sass">
</style>
