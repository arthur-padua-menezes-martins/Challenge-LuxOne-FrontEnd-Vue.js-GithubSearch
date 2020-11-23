<template>
  <section id="component-repositories-box" class="flex-center">
    <div id="container-repositories-box" class="flex-center flex-column">

      <div class="item-repositories-box efc__box-shadow-thin" v-for="repo in body.repos" :key="repo.stars">

        <div>
            <span>{{repo.name}}</span>
        </div>

        <div>
          <span>{{repo.description}}</span>
        </div>

        <div>

          <span>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.85893 0C8.05904 0 8.2418 0.113608 8.33036 0.293055L10.4741 4.63679L15.2677 5.33334C15.4657 5.36211 15.6303 5.50082 15.6921 5.69114C15.7539 5.88146 15.7024 6.09038 15.5591 6.23006L12.0904 9.61118L12.9092 14.3854C12.9431 14.5826 12.862 14.782 12.7001 14.8996C12.5382 15.0172 12.3236 15.0327 12.1464 14.9396L7.85893 12.6855L3.5714 14.9396C3.39428 15.0327 3.17965 15.0172 3.01775 14.8996C2.85586 14.782 2.77478 14.5826 2.80861 14.3854L3.62745 9.61118L0.158777 6.23006C0.0154797 6.09038 -0.036092 5.88146 0.0257459 5.69114C0.0875838 5.50082 0.252107 5.36211 0.450138 5.33334L5.24373 4.63679L7.38749 0.293055C7.47606 0.113608 7.65881 0 7.85893 0ZM7.85893 1.71361L6.06428 5.34997C5.9877 5.50513 5.83967 5.61268 5.66844 5.63756L1.65549 6.22067L4.55929 9.05118C4.6832 9.17196 4.73974 9.34597 4.71049 9.51651L4.02499 13.5133L7.61429 11.6262C7.76744 11.5457 7.95041 11.5457 8.10356 11.6262L11.6929 13.5133L11.0074 9.51651C10.9781 9.34597 11.0347 9.17196 11.1586 9.05118L14.0624 6.22067L10.0494 5.63756C9.87817 5.61268 9.73015 5.50513 9.65357 5.34997L7.85893 1.71361Z" fill="white" fill-opacity="0.4"/></svg>
          </span>

          <span>
            {{repo.stars}}
          </span>

        </div>

      </div>

    </div>
  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'

const ComponentRepositoriesBox = Vue.component('ComponentRepositoriesBox', {
  el: '#component-repositories-box',

  methods: {
    resolve (type) {
      return this.body.repos[type]
    }
  },

  data () {
    return {

    }
  },

  mounted () {
    console.log('In repos')
    console.log(this.body)
  },

  props: ['body']
})

export default ComponentRepositoriesBox
</script>

<style src="./style.sass" lang="sass"></style>
