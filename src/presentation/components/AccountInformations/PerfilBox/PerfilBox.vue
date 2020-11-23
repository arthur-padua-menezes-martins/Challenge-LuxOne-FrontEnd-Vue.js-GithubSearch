<template>
  <section id="component-perfil-box">

    <section id="container-perfil-box" class="mov_relative efc__box-shadow-thin">

      <div id="container-perfil-box-image" class="mov__relative">

        <div class="mov__absolute box-image-black-fillter"></div>

        <div class="box-image-container">
          <img :src="resolve('image')" alt="perfil">
         </div>

      </div>

      <div id="container-perfil-box-informations">

        <div id="container-perfil-box-personal-informations" class="flex-center flex-column">
          <div class="name" v-html="resolve('name')"></div>
          <div>
            <span class="organization" v-html="resolve('organization')"></span>
            <span class="location" v-html="resolve('location')"></span>
          </div>
        </div>

        <div id="container-perfil-box-account-informations" class="flex-center">
          <div class="flex-center flex-column">
            <span><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.85893 0C8.05904 0 8.2418 0.113608 8.33036 0.293055L10.4741 4.63679L15.2677 5.33334C15.4657 5.36211 15.6303 5.50082 15.6921 5.69114C15.7539 5.88146 15.7024 6.09038 15.5591 6.23006L12.0904 9.61118L12.9092 14.3854C12.9431 14.5826 12.862 14.782 12.7001 14.8996C12.5382 15.0172 12.3236 15.0327 12.1464 14.9396L7.85893 12.6855L3.5714 14.9396C3.39428 15.0327 3.17965 15.0172 3.01775 14.8996C2.85586 14.782 2.77478 14.5826 2.80861 14.3854L3.62745 9.61118L0.158777 6.23006C0.0154797 6.09038 -0.036092 5.88146 0.0257459 5.69114C0.0875838 5.50082 0.252107 5.36211 0.450138 5.33334L5.24373 4.63679L7.38749 0.293055C7.47606 0.113608 7.65881 0 7.85893 0ZM7.85893 1.71361L6.06428 5.34997C5.9877 5.50513 5.83967 5.61268 5.66844 5.63756L1.65549 6.22067L4.55929 9.05118C4.6832 9.17196 4.73974 9.34597 4.71049 9.51651L4.02499 13.5133L7.61429 11.6262C7.76744 11.5457 7.95041 11.5457 8.10356 11.6262L11.6929 13.5133L11.0074 9.51651C10.9781 9.34597 11.0347 9.17196 11.1586 9.05118L14.0624 6.22067L10.0494 5.63756C9.87817 5.61268 9.73015 5.50513 9.65357 5.34997L7.85893 1.71361Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="7.85893" y1="0" x2="7.85893" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0.5"/></linearGradient></defs></svg></span>
            <span v-html="resolve('stars')"></span>
          </div>
          <div class="flex-center flex-column">
            <span><svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.40048e-06 2.38095C1.40048e-06 1.74948 0.250849 1.14387 0.697362 0.697364C1.14389 0.250849 1.74948 0 2.38095 0H10.7143C10.9037 0 11.0854 0.0752547 11.2193 0.209209C11.3533 0.343163 11.4286 0.524845 11.4286 0.714285V12.619C11.4286 12.8085 11.3533 12.9902 11.2193 13.1241C11.0854 13.2581 10.9037 13.3333 10.7143 13.3333H8.33332C8.1439 13.3333 7.96218 13.2581 7.82828 13.1241C7.69428 12.9902 7.61904 12.8085 7.61904 12.619C7.61904 12.4296 7.69428 12.2479 7.82828 12.114C7.96218 11.98 8.1439 11.9047 8.33332 11.9047H9.99999V9.99999H2.38095C2.19341 9.99999 2.01006 10.0554 1.85387 10.1592C1.69768 10.263 1.57564 10.4107 1.50301 10.5836C1.43039 10.7565 1.41044 10.9469 1.44565 11.1312C1.48086 11.3154 1.56968 11.4851 1.70095 11.619C1.83356 11.7545 1.90695 11.9369 1.90499 12.1265C1.90303 12.316 1.82587 12.4969 1.69048 12.6295C1.55509 12.7621 1.37257 12.8355 1.18307 12.8335C0.993571 12.8316 0.81261 12.7545 0.68 12.619C0.243534 12.1742 -0.000674789 11.5756 1.40048e-06 10.9524V2.38095ZM9.99999 1.42857V8.57142H2.38095C2.0419 8.57142 1.72 8.64189 1.42857 8.76951V2.38095C1.42857 2.12836 1.52891 1.88612 1.70751 1.70751C1.88612 1.52891 2.12836 1.42857 2.38095 1.42857H9.99999ZM2.85714 11.6667V14.7619C2.85714 14.8061 2.86945 14.8494 2.8927 14.887C2.91595 14.9246 2.94921 14.955 2.98876 14.9748C3.0283 14.9946 3.07258 15.003 3.11662 14.999C3.16065 14.995 3.20272 14.9789 3.23809 14.9524L4.61904 13.9171C4.66026 13.8862 4.71039 13.8695 4.7619 13.8695C4.81341 13.8695 4.86355 13.8862 4.90476 13.9171L6.28571 14.9524C6.32108 14.9789 6.36314 14.995 6.40718 14.999C6.45122 15.003 6.4955 14.9946 6.53504 14.9748C6.57459 14.955 6.60786 14.9246 6.6311 14.887C6.65434 14.8494 6.66666 14.8061 6.66666 14.7619V11.6667C6.66666 11.6035 6.64157 11.5429 6.59693 11.4983C6.55227 11.4536 6.49172 11.4286 6.42856 11.4286H3.09524C3.03209 11.4286 2.97153 11.4536 2.92687 11.4983C2.88223 11.5429 2.85714 11.6035 2.85714 11.6667Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="5.71428" y1="0" x2="5.71428" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0.5"/></linearGradient></defs></svg></span>
            <span v-html="resolve('repositories')"></span>
          </div>
          <div class="flex-center flex-column">
            <span><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.76036 4.3421C2.76036 1.94404 4.70435 0 7.1024 0C9.50046 0 11.4444 1.94404 11.4444 4.3421C11.4444 5.83381 10.6922 7.14983 9.54645 7.93153C12.2026 8.90457 14.1159 11.4181 14.2044 14.3903C14.2141 14.7171 13.957 14.99 13.6302 14.9997C13.3033 15.0095 13.0304 14.7524 13.0207 14.4255C12.9259 11.2387 10.3123 8.68421 7.10233 8.68421C3.89235 8.68421 1.2788 11.2387 1.18395 14.4255C1.17422 14.7524 0.901361 15.0095 0.574496 14.9997C0.24763 14.99 -0.00946109 14.7171 0.00026723 14.3903C0.0887262 11.4181 2.00208 8.90451 4.65831 7.9315C3.51254 7.14979 2.76036 5.83379 2.76036 4.3421ZM7.1024 1.18421C5.35839 1.18421 3.94457 2.59804 3.94457 4.3421C3.94457 6.08617 5.35839 7.5 7.1024 7.5C8.84642 7.5 10.2602 6.08617 10.2602 4.3421C10.2602 2.59804 8.84642 1.18421 7.1024 1.18421Z" fill="url(#paint0_linear)"/><path d="M13.6471 4.3421C13.5305 4.3421 13.4162 4.3504 13.3047 4.36635C12.981 4.41265 12.681 4.18776 12.6347 3.86405C12.5884 3.54033 12.8133 3.24037 13.137 3.19407C13.3039 3.1702 13.4743 3.15789 13.6471 3.15789C15.6223 3.15789 17.2234 4.75907 17.2234 6.73421C17.2234 7.89934 16.6662 8.93359 15.8052 9.5861C17.6459 10.4112 18.9287 12.2591 18.9287 14.4079C18.9287 14.7349 18.6636 15 18.3366 15C18.0095 15 17.7445 14.7349 17.7445 14.4079C17.7445 12.5559 16.5153 10.9894 14.8269 10.4828L14.405 10.3561V9.03303L14.7289 8.86846C15.5077 8.47274 16.0392 7.66503 16.0392 6.73421C16.0392 5.41308 14.9682 4.3421 13.6471 4.3421Z" fill="url(#paint1_linear)"/><defs><linearGradient id="paint0_linear" x1="9.46433" y1="0" x2="9.46433" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0.5"/></linearGradient><linearGradient id="paint1_linear" x1="9.46433" y1="0" x2="9.46433" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0.5"/></linearGradient></defs></svg></span>
            <span v-html="resolve('followers')"></span>
          </div>
        </div>

      </div>

    </section>

  </section>
</template>

<script lang="ts">
import Vue from '@/main/config/app'

const ComponentPerfilBox = Vue.component('ComponentPerfilBox', {
  el: '#component-perfil-box',

  methods: {
    resolve (type) {
      return this.body.user[type]
    }
  },

  data () {
    return {

    }
  },

  props: ['body']
})

export default ComponentPerfilBox
</script>

<style src="./style.sass" lang="sass">
@import "@/presentation/style/_global.sass"
</style>
