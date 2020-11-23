<template>
  <section class="mov_relative">
    <div id="component-change-transition" class="trs__two-second">
      <svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'

const ComponentChangeTransition = Vue.component('ComponentChangeTransition', {
  el: '#component-change-transition',

  components: {

  },

  methods: {

  },

  data () {
    return {

    }
  },

  mounted () {

  }
})

export default ComponentChangeTransition
</script>

<style src="./style.sass" lang="sass"></style>
