<template>
  <section id="component-search-bar-input">
    <div v-bind:class="{ 'efc__opacity-hide': !only  }" id="container-search-bar-input" class="container mov__relative trs__one-second">
      <div v-bind:class="{ 'efc__opacity-hide mov__up': !only  }" id="area-search-bar-input" class="mov__relative flex-center flex-column efc__box-shadow trs__one-second">

        <div id="area-search-bar-input-top" class="flex-center flex-space-between">

          <article id="area-search-bar-search" class="flex-center">
            <input autofocus="true" id="search-bar-search" type="text"/>
          </article>

          <article id="area-search-bar-icon" class="flex-center trs__one-second">
            <button id="search-bar-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.04878 0C3.60356 0 0 3.60356 0 8.04878C0 12.494 3.60356 16.0976 8.04878 16.0976C10.0079 16.0976 11.8036 15.3976 13.1993 14.2341L18.7509 19.7857C19.0366 20.0714 19.4999 20.0714 19.7857 19.7857C20.0714 19.4999 20.0714 19.0366 19.7857 18.7509L14.2341 13.1993C15.3976 11.8036 16.0976 10.0079 16.0976 8.04878C16.0976 3.60356 12.494 0 8.04878 0ZM1.46341 8.04878C1.46341 4.41178 4.41178 1.46341 8.04878 1.46341C11.6858 1.46341 14.6341 4.41178 14.6341 8.04878C14.6341 11.6858 11.6858 14.6341 8.04878 14.6341C4.41178 14.6341 1.46341 11.6858 1.46341 8.04878Z" fill="#4FFF95"/></svg>
            </button>
          </article>

        </div>

        <div id="area-search-bar-input-bottom">

          <!-- <SearchBarAutoComplete/> -->

        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'
import SearchBarAutoComplete from '../SearchBarAutoComplete/SearchBarAutoComplete.vue'
import SearchBarInputController from './script'

const SearchBarInput = Vue.component('SearchBarInput', {
  el: '#component-search-bar-input',

  components: {
    SearchBarAutoComplete
  },

  methods: {

  },

  data () {
    return {
      only: false,
      searchBarInputController: new SearchBarInputController()
    }
  },

  mounted () {
    setTimeout(() => {
      this.only = !this.only

      this.searchBarInputController.addListeners(
        document.querySelector('#search-bar-search'),
        document.querySelector('#area-search-bar-icon')
      )
    }, 1000)
  }
})

export default SearchBarInput
</script>

<style src="./style.sass" lang="sass">
@import "@/presentation/style/_global.sass"
</style>
