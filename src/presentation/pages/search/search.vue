<template>
  <main>
    {{number}}
    <componentName></componentName>
  </main>
</template>

<script lang="ts">
import Vue from '@/main/config/app'

export default Vue.extend({
  data () {
    return {
      number: 0
    }
  },

  mounted () {
    window.setInterval(() => {
      this.number++
    }, 1000)
  }
})
</script>
